import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { AmbientBackground } from '@/components/ui/AmbientBackground';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ArvinSoftware — Turning Ideas Into Digital Reality',
  description:
    'We transform ideas into powerful digital experiences through thoughtful design, modern technologies, and innovative software solutions.',
  keywords: [
    'ArvinSoftware',
    'Software Development Company',
    'Web Development',
    'Mobile Apps',
    'Custom Software',
    'UI/UX Design',
    'Cloud Solutions',
  ],
  authors: [{ name: 'ArvinSoftware' }],
  openGraph: {
    title: 'ArvinSoftware — Turning Ideas Into Digital Reality',
    description:
      'We transform ideas into powerful digital experiences through thoughtful design, modern technologies, and innovative software solutions.',
    type: 'website',
    locale: 'en_US',
    siteName: 'ArvinSoftware',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('arvin-theme');
                  if (stored === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-cyan-500/20 selection:text-cyan-400`}
      >
        <ThemeProvider>
          <AmbientBackground />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 pt-20 md:pt-24">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
