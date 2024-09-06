'use client';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-800 md:py-4">
      <div className="container mx-auto p-4 flex flex-col gap-2 md:gap-0 md:flex-row md:items-center md:justify-between">
        <span className="text-sm text-gray-500 text-center dark:text-gray-400">
          © 2024-{currentYear}{' '}
          <a href="https://plantree.me/" className="hover:underline">
            Plantree
          </a>
          . All Rights Reserved.
        </span>
        <ul className="mx-auto md:mx-0 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400">
          <li>
            <Link href="/about" className="hover:underline me-4 md:me-6">
              关于
            </Link>
            <Link href="/changelog" className="hover:underline me-4 md:me-6">
              版本
            </Link>
            <Link href="/contact" className="hover:underline me-4 md:me-6">
              联系
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
