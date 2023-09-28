'use client';

import clsx from 'clsx';
import NextLink from 'next/link';
import PropTypes from 'prop-types';

import Logo from 'components/shared/logo';

const Header = ({ isHeaderAbsolute }) => (
  <header
    className={clsx(
      'safe-paddings left-0 top-0 right-0 z-10 xl:relative',
      isHeaderAbsolute ? 'absolute' : 'relative border-b border-[rgba(255,255,255,0.2)]'
    )}
  >
    <div className="flex h-[70px] items-center justify-between py-3.5 px-14 xl:h-auto xl:py-6 xl:px-11 lg:px-8 lg:py-5 md:px-4">
      <NextLink href="/">
        <span className="sr-only">Neon</span>
        <Logo />
      </NextLink>
    </div>
  </header>
);

Header.propTypes = {
  isHeaderAbsolute: PropTypes.bool,
};

export default Header;
