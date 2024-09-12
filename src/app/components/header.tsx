'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

// import ModeToggle from './mode-toggle';
import githubIcon from './icons/github.svg';
import favIcon from './icons/favicon.svg';

function GithubIcon() {
  return (
    <Button variant="ghost" size="icon">
      <Link href="https://github.com/plantree/we-resume" target="_blank">
        <Image priority src={githubIcon} alt="Follow on GitHub" className="w-6 h-6" />
      </Link>
    </Button>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white fixed w-full md:sticky md:top-0 shadow">
      <div className="container mx-auto flex justify-between items-center py-2 px-6 h-[var(--top-nav-bar-height)]">
        {/* Logo or Brand */}
        <div className="text-xl font-bold flex gap-2">
          {' '}
          <Image priority src={favIcon} alt="We Resume" className="w-8 h-8" />
          <Link href="/">微简历</Link>
        </div>

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
          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <Button variant="ghost">
              <Link href="/editor">编辑</Link>
            </Button>
            <Button variant="ghost">
              <Link href="/parser">解析</Link>
            </Button>
            <GithubIcon />
          </nav>

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
            <GithubIcon />
            {/* <ModeToggle />
            <Button variant="outline">登陆</Button>
            <Button variant="default">注册</Button> */}
          </div>
        </div>
      )}
    </header>
  );
}
