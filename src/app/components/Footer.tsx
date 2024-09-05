'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 shadow">
      <div className="w-full mx-auto flex flex-col max-w-screen-xl p-4 md:flex-row md:items-center md:justify-between">
        <span className="text-sm text-gray-500 text-center dark:text-gray-400">
          © {currentYear}{' '}
          <a href="https://plantree.me/" target="_blank" className="hover:underline">
            Plantree
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap space-x-2 md:space-x-4 justify-center items-center mt-3 md:mt-0 text-sm font-medium text-gray-500 dark:text-gray-400">
          <li>
            <a href="/about" className="hover:underline">
              关于
            </a>
          </li>
          <li>
            <a
              href="mailto:eric.wangpy@outlook.com?subject=[Issue] 微简历"
              className="hover:underline"
            >
              联系
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
