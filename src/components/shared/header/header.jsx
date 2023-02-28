'use client';

import NextLink from 'next/link';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Logo from 'components/shared/logo';
import LINKS from 'constants/links';

import Github from './images/header-github.inline.svg';

const Header = () => (
  <header className="safe-paddings absolute left-0 top-0 right-0 z-10">
    <Container className="flex h-[70px] items-center justify-between py-3.5" size="full">
      <NextLink href="/">
        <span className="sr-only">Neon</span>
        <Logo />
      </NextLink>
      <div className="flex items-center space-x-7">
        <p className="font-mono text-[15px] font-light tracking-tighter text-white sm:hidden">
          Join us on March 28th, 9 a.m. PT
        </p>
        <NextLink
          className="relative flex h-[42px] items-center rounded-full border-2 border-white bg-black pl-[6px] pr-[22px] font-bold leading-none text-white hover:border-primary-2"
          href={LINKS.github}
          theme="tertiary"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Github className="mr-[10px] text-white" />
          <span>Star Us</span>
        </NextLink>
      </div>
    </Container>
  </header>
);

export default Header;
