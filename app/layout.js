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
  title: 'KYAN Cafe',
  description: 'Experience unique coffee with a diverse selection of distinctive drinks at KYAN Cafe',
  keywords: ['KYAN Cafe', 'Coffee', 'Beverages', 'Saudi Cafes', 'Specialty Coffee'],
  authors: [{ name: 'KYAN Cafe' }],
  openGraph: {
    title: 'KYAN Cafe',
    description: 'Experience unique coffee with a diverse selection of distinctive drinks',
    url: 'https://kyancafe.com',
    siteName: 'KYAN Cafe',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KYAN Cafe',
    description: 'Experience unique coffee with a diverse selection of distinctive drinks',
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
