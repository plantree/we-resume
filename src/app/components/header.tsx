'use client';

// import React from 'react';
// import Image from 'next/image';
// import 'flowbite';
// import { useState, useEffect } from 'react';

// export default function Header() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [mobileMenu, setMobileMenu] = useState(false);

//   useEffect(() => {
//     const darkMode = localStorage.getItem('darkMode') === 'true';
//     setDarkMode(darkMode);
//     toggleTheme(darkMode);
//   }, []);

//   const toggleTheme = (darkMode: boolean) => {
//     document.documentElement.classList.toggle('dark', darkMode);
//     localStorage.setItem('darkMode', darkMode ? 'true' : 'false');
//   };

//   return (
//     <nav className="sticky top-0 border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
//         <a href="/" className="flex items-center space-x-3">
//           <Image
//             src="https://flowbite.com/docs/images/logo.svg"
//             className="h-8"
//             alt="Flowbite Logo"
//             width="32"
//             height="32"
//           />
//           <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">微简历</span>
//         </a>
//         <button
//           data-collapse-toggle="navbar-solid-bg"
//           type="button"
//           className="inline-flex md:hidden items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//           aria-controls="navbar-solid-bg"
//           aria-expanded={mobileMenu}
//           onClick={() => {
//             setMobileMenu(!mobileMenu);
//           }}
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg
//             className="w-5 h-5"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 17 14"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M1 1h15M1 7h15M1 13h15"
//             />
//           </svg>
//         </button>
//         <div className={(mobileMenu ? '' : 'hidden') + ' w-full items-center md:flex md:w-auto'}>
//           <ul className="flex flex-col font-medium m-2 rounded-lg bg-gray-50 md:items-center md:flex-row md:space-x-4 md:m-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
//             <li>
//               <a
//                 href="/parser"
//                 className="inline-block w-full p-3 text-gray-500 rounded-lg md:mx-auto md:py-2 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
//               >
//                 解析
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/editor"
//                 className="inline-block w-full p-3 text-gray-500 rounded-lg md:mx-auto md:py-2 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
//               >
//                 编辑
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div className={(mobileMenu ? '' : 'hidden') + ' w-full items-center md:flex md:w-auto'}>
//           <a
//             href="https://github.com/plantree/we-resume"
//             data-tooltip-target="tooltip-github"
//             className="inline-flex items-center justify-center text-gray-500 w-10 h-10 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
//           >
//             <svg
//               className="w-[1.1rem] h-[1.1rem]"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
//                 clipRule="evenodd"
//               ></path>
//             </svg>
//             <span className="sr-only">查看 Github</span>
//           </a>
//           <div
//             id="tooltip-github"
//             role="tooltip"
//             className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
//           >
//             查看 Github
//             <div className="tooltip-arrow" data-popper-arrow></div>
//           </div>
//           <button
//             id="theme-toggle"
//             data-tooltip-target="tooltip-toggle"
//             type="button"
//             className="text-gray-500 inline-flex items-center justify-center dark:text-gray-400 hover:bg-gray-100 w-10 h-10 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
//             onClick={() => {
//               setDarkMode(!darkMode);
//               toggleTheme(!darkMode);
//             }}
//           >
//             <svg
//               id="theme-toggle-dark-icon"
//               className={(darkMode ? '' : 'hidden') + ' w-4 h-4'}
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 18 20"
//             >
//               <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
//             </svg>
//             <svg
//               id="theme-toggle-light-icon"
//               className={(darkMode ? 'hidden' : '') + ' w-4 h-4'}
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//             >
//               <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
//             </svg>
//             <span className="sr-only">切换主题</span>
//           </button>
//           <div
//             id="tooltip-toggle"
//             role="tooltip"
//             className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
//           >
//             切换主题
//             <div className="tooltip-arrow" data-popper-arrow></div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

// import ModeToggle from './mode-toggle';
import githubIcon from './github.svg';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo or Brand */}
        <div className="text-xl font-bold">
          <Link href="/">微简历</Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <Button variant="ghost">
            <Link href="/editor">编辑</Link>
          </Button>
          <Button variant="ghost">
            <Link href="/parser">解析</Link>
          </Button>
        </nav>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 focus:outline-none"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Actions (for desktop) // TODO */}
        <div className="hidden md:flex space-x-4">
          {' '}
          <Button variant="ghost" size="icon">
            <Link href="https://github.com/plantree/we-resume" target="_blank">
              <Image priority src={githubIcon} alt="Follow on GitHub" className="w-6 h-6" />
            </Link>
          </Button>
          {/* <ModeToggle />
          <Button variant="outline">登陆</Button>
          <Button variant="default">注册</Button> */}
        </div>
      </div>

      {/* Mobile Menu (Slide-down effect) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-4 py-4 px-6">
            <Button variant="ghost">
              <Link href="/editor">编辑</Link>
            </Button>
            <Button variant="ghost">
              <Link href="/parser">解析</Link>
            </Button>
          </nav>

          {/* Mobile Actions // TODO */}
          <div className="flex flex-col space-y-4 px-6 pb-4">
            <Button variant="ghost" size="icon">
              <Link href="https://github.com/plantree/we-resume" target="_blank">
                <Image priority src={githubIcon} alt="Follow on GitHub" className="w-6 h-6" />
              </Link>
            </Button>
            {/* <ModeToggle />
            <Button variant="outline">登陆</Button>
            <Button variant="default">注册</Button> */}
          </div>
        </div>
      )}
    </header>
  );
}
