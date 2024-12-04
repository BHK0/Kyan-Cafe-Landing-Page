import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function GET(request) {
  try {
    // Get the requested path from the URL and clean it
    const pathname = new URL(request.url).pathname;
    const path = pathname.replace('/api/prefetch-images', '').split('#')[0];

    // Skip empty paths
    if (!path || path === '/') {
      return NextResponse.json({ images: [] });
    }

    // Current implementation with static images
    let images = [];
    
    // Basic path-based image mapping
    if (path === '/menu') {
      images = [
        {
          srcset: '/coffe-cub-kyan.webp',
          sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
          src: '/coffe-cub-kyan.webp',
          alt: 'Coffee Cup',
          loading: 'eager'
        }
      ];
    }

    return NextResponse.json(
      { images },
      {
        headers: {
          'Cache-Control': 'public, max-age=3600',
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error prefetching images:', error);
    return NextResponse.json(
      { images: [] },
      { status: 200 }
    );
  }
} 