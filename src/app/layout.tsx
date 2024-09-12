import type { Metadata } from 'next';
import './globals.css';

import ThemeProvider from './components/theme-provider';
import Header from './components/header';
import Footer from './components/footer';

export const metadata: Metadata = {
  title: '微简历 | WeResume',
  description: '一款以内容为中心的简历编辑器'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen">
            {' '}
            <Header />
            <main className="h-full w-full overflow-hidden bg-gray-100 dark:bg-gray-700 pt-16 md:pt-0">
              {children}
            </main>
          </div>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
