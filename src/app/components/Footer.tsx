'use client';

export default function Footer() {
  return (
    <footer className="border-gray-200 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 shadow">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024-present{' '}
          <a href="https://plantree.me/" className="hover:underline">
            Plantree
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="/about" className="hover:underline me-4 md:me-6">
              关于
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              联系
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
