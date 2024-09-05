import type { Metadata } from 'next';
import './globals.css';

import Header from './components/Header';
import Footer from './components/Footer';

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
      <body>
        <Header />
        <main className="min-h-screen w-full bg-gray-100 dark:bg-gray-700">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
