import clsx from 'clsx';

import Container from 'components/shared/container';
import Link from 'components/shared/link';
import Logo from 'components/shared/logo';
import MENUS from 'constants/menus.js';

const Footer = () => (
    <footer className="safe-paddings mt-auto overflow-hidden dark:bg-black dark:text-white">
      <Container className="flex justify-between py-10 xl:py-8" size="lg">
        <div className="flex flex-col items-start justify-between md:w-full md:space-y-8 sm:space-y-6">
          <div className="mb-7 flex flex-col xl:mb-5 md:mb-0 md:w-full md:flex-row md:items-center md:justify-between">
            <Link className="block" to="/">
              <span className="sr-only">Neon</span>
              <Logo className="w-auto sm:h-6" isThemeBlack={false} />
            </Link>
          </div>
          <div className="space-y-[18px] leading-none">
            <p>Made in SF and the World</p>
            <p>Neon 2022 Ⓒ All rights reserved</p>
          </div>
        </div>
        <div className="flex space-x-[123px] xl:space-x-8 md:hidden">
          {MENUS.footer.map(({ heading, links }, index) => (
            <div className={clsx('flex flex-col xl:w-full')} key={index}>
              <h3 className="relative text-sm font-bold uppercase leading-none tracking-wider">
                {heading}
              </h3>
              <ul className="mt-6 flex grow flex-col space-y-[18px]">
                {links.map(({ to, text }, index) => {
                  const isExternalUrl = to.startsWith('http');
                  return (
                    <li className="flex" key={index}>
                      <Link
                        className="relative whitespace-nowrap leading-none"
                        to={to}
                        theme="white"
                        target={isExternalUrl ? '_blank' : null}
                        rel={isExternalUrl ? 'noopener noreferrer' : null}
                      >
                        {text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );

export default Footer;
