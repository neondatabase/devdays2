'use client';

import clsx from 'clsx';
import NextLink from 'next/link';
import PropTypes from 'prop-types';

import Logo from 'components/shared/logo';
import LINKS from 'constants/links';

import Github from './images/header-github.inline.svg';

const Header = ({ withBorder }) => (
  <header
    className={clsx(
      'safe-paddings left-0 top-0 right-0 z-10 xl:relative',
      withBorder ? 'relative border-b border-[#ffffff33]' : 'absolute'
    )}
  >
    <div className="flex h-[70px] items-center justify-between py-3.5 px-14 xl:h-auto xl:py-6 xl:px-11 lg:px-8 lg:py-5 md:px-4">
      <NextLink href="/">
        <span className="sr-only">Neon</span>
        <Logo />
      </NextLink>
      <div className="flex items-center space-x-8">
        <p className="font-mono text-[15px] font-light tracking-tighter text-white sm:hidden">
          Join us on March 29th, 9 a.m. PT
        </p>
        <NextLink
          className="relative flex h-[42px] items-center rounded-full border-2 border-white bg-black pl-[6px] pr-[22px] font-semibold leading-none text-white hover:border-primary-2"
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

Header.propTypes = {
  withBorder: PropTypes.bool,
};

export default Header;
