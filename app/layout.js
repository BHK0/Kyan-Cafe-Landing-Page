import { Cairo } from 'next/font/google';
import './globals.css';
import localFont from 'next/font/local';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

const cairo = Cairo({ 
  subsets: ['arabic'],
  display: 'swap',
  preload: true,
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  display: 'swap',
  variable: '--font-geist-mono'
});

export const metadata = {
  title: 'كيان | KYAN',
  description: 'استمتع بتجربة قهوة فريدة مع مجموعة متنوعة من المشروبات المميزة في كيان كافيه',
  keywords: ['كيان كافيه', 'قهوة', 'مشروبات', 'كافيهات السعودية', 'قهوة مميزة'],
  authors: [{ name: 'كيان كافيه' }],
  openGraph: {
    title: 'كيان | KYAN',
    description: 'استمتع بتجربة قهوة فريدة مع مجموعة متنوعة من المشروبات المميزة',
    url: 'https://kyancafe.com',
    siteName: 'كيان كافيه',
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'كيان | KYAN',
    description: 'استمتع بتجربة قهوة فريدة مع مجموعة متنوعة من المشروبات المميزة',
  },
  robots: 'index, follow',
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning className={geistMono.variable}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                let theme = localStorage.getItem('theme');
                if (!theme) {
                  theme = 'dark';
                  localStorage.setItem('theme', theme);
                }
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={cairo.className}>
        <ThemeProvider>
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
