'use client';

import NextLink from 'next/link';

import Logo from 'components/shared/logo';
import LINKS from 'constants/links';
import AgendaIcon from 'icons/agenda.inline.svg';
import TwitterIcon from 'icons/twitter.inline.svg';

import Github from './images/header-github.inline.svg';

// TODO: change agenda link to /stage page
// import LiveIcon from 'icons/live.inline.svg';

const Header = () => (
  <header className="safe-paddings absolute left-0 top-0 right-0 z-10 xl:relative">
    <div className="flex h-[70px] items-center justify-between py-3.5 px-14 xl:h-auto xl:py-6 xl:px-11 lg:px-8 lg:py-5 md:px-4">
      <NextLink href="/">
        <span className="sr-only">Neon</span>
        <Logo />
      </NextLink>
      <div className="flex items-center space-x-8">
        <NextLink
          className="relative flex items-center font-mono text-[15px] font-light tracking-tighter text-white transition-colors duration-200 hover:text-primary-2"
          href="/agenda"
          theme="tertiary"
        >
          <AgendaIcon className="mr-[10px] h-4" />
          <span>Agenda</span>
        </NextLink>
        <NextLink
          className="relative flex items-center font-mono text-[15px] font-light tracking-tighter text-white transition-colors duration-200 hover:text-primary-2 sm:hidden"
          href={LINKS.twitter}
          theme="tertiary"
          rel="noopener noreferrer"
          target="_blank"
        >
          <TwitterIcon className="mr-[10px] h-4" />
          <span>Twitter</span>
        </NextLink>
        <NextLink
          className="relative flex h-[42px] items-center rounded-full border-2 border-white bg-black pl-[6px] pr-[22px] font-semibold leading-none text-white hover:border-primary-2 sm:hidden"
          href={LINKS.github}
          theme="tertiary"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Github className="mr-[10px] text-white" />
          <span>Star Us</span>
        </NextLink>
      </div>
    </div>
  </header>
);

export default Header;
