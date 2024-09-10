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
          <Header />
          <main className="min-h-screen w-full bg-gray-100 dark:bg-gray-700 pt-16 md:pt-0">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
