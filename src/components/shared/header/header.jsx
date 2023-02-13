'use client';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Link from 'components/shared/link';
import Logo from 'components/shared/logo';
import LINKS from 'constants/links';

import Github from './images/header-github.inline.svg';

const Header = () => (
  <header className="safe-paddings absolute top-0 left-0 right-0 z-40 w-full lg:relative lg:h-14">
    <Container className="flex items-center justify-between py-3.5" size="lg">
      <Link to="/">
        <span className="sr-only">Neon</span>
        <Logo />
      </Link>

      <div className="flex items-center space-x-7">
        <p className="font-mono text-base font-light text-white sm:hidden">
          Join us at 10:30AM PT, March 26
        </p>
        <Button
          className="relative border-white bg-black py-[11px] pl-11 text-white hover:border-primary-2"
          to={LINKS.github}
          size="xs"
          theme="tertiary"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Github className="absolute top-1/2 left-1.5 -translate-y-1/2 text-white" />
          <span>Star Us</span>
        </Button>
      </div>
    </Container>
  </header>
);

export default Header;
