'use client';

import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function prefetchImages(href) {
  if (href.startsWith('/order')) {
    return [];
  }

  try {
    const cleanHref = href.split('#')[0];

    if (cleanHref === '/') {
      return [{
        srcset: '/hero.webp',
        sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
        src: '/hero.webp',
        alt: 'Hero Image',
        loading: 'eager'
      }];
    }

    const url = new URL(cleanHref, window.location.href);
    const imageResponse = await fetch(`/api/prefetch-images${url.pathname}`, {
      priority: 'low',
    });
  
    if (!imageResponse.ok) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`Failed to prefetch images for ${href}`);
      }
      return [];
    }
    
    const { images } = await imageResponse.json();
    return images;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`Error prefetching images for ${href}:`, error);
    }
    return [];
  }
}

const seen = new Set();

function prefetchImage(image) {
  if (image.loading === 'lazy' || seen.has(image.srcset)) {
    return;
  }
  const img = new Image();
  img.decoding = 'async';
  img.fetchPriority = 'low';
  img.sizes = image.sizes;
  seen.add(image.srcset);
  img.srcset = image.srcset;
  img.src = image.src;
  img.alt = image.alt;
  let done = false;
  img.onload = img.onerror = () => {
    done = true;
  };
  return () => {
    if (done) return;
    img.src = img.srcset = '';
    seen.delete(image.srcset);
  };
}

export function Link({ children, ...props }) {
  const [images, setImages] = useState([]);
  const [preloading, setPreloading] = useState([]);
  const linkRef = useRef(null);
  const router = useRouter();
  let prefetchTimeout = null;
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (props.prefetch === false) {
      return;
    }

    const linkElement = linkRef.current;
    if (!linkElement) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          prefetchTimeout = setTimeout(async () => {
            router.prefetch(String(props.href));
            await sleep(0);
            void prefetchImages(String(props.href)).then((images) => {
              setImages(images);
            }, console.error);
            observer.unobserve(entry.target);
          }, 300);
        } else if (prefetchTimeout) {
          clearTimeout(prefetchTimeout);
          prefetchTimeout = null;
        }
      },
      { rootMargin: '0px', threshold: 0.1 }
    );

    observer.observe(linkElement);

    return () => {
      observer.disconnect();
      if (prefetchTimeout) {
        clearTimeout(prefetchTimeout);
      }
    };
  }, [props.href, props.prefetch]);

  return (
    <NextLink
      ref={linkRef}
      prefetch={false}
      onMouseEnter={() => {
        router.prefetch(String(props.href));
        if (preloading.length) return;
        const p = [];
        for (const image of images) {
          const remove = prefetchImage(image);
          if (remove) p.push(remove);
        }
        setPreloading(p);
      }}
      onMouseLeave={() => {
        for (const remove of preloading) {
          remove();
        }
        setPreloading([]);
      }}
      onMouseDown={(e) => {
        const url = new URL(String(props.href), window.location.href);
        if (
          url.origin === window.location.origin &&
          e.button === 0 &&
          !e.altKey &&
          !e.ctrlKey &&
          !e.metaKey &&
          !e.shiftKey
        ) {
          e.preventDefault();
          router.push(String(props.href));
        }
      }}
      {...props}
    >
      {children}
    </NextLink>
  );
} 