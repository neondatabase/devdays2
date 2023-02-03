'use client';

import Script from 'next/script';
import { useRef, useState } from 'react';

import 'styles/globals.css';

import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
import MobileMenu from 'components/shared/mobile-menu';

// eslint-disable-next-line react/prop-types
const RootLayout = ({ children }) => {
  const headerRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuOutsideClick = () => {
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const handleHeaderBurgerClick = () => {
    setIsMobileMenuOpen((isMobileMenuOpen) => !isMobileMenuOpen);
  };

  return (
    <html lang="en">
      <head>
        {process.env.NODE_ENV === 'production' && (
          <Script id="google-tag-manager" strategy="afterInteractive" />
        )}
      </head>
      <body>
        {process.env.NODE_ENV === 'production' && (
          <noscript
            dangerouslySetInnerHTML={{
              __html: ``,
            }}
          />
        )}
        <div className="relative flex min-h-[100vh] flex-col">
          <Header
            ref={headerRef}
            isMobileMenuOpen={isMobileMenuOpen}
            onBurgerClick={handleHeaderBurgerClick}
          />
          <main className="flex flex-1 flex-col dark:bg-black">{children}</main>
          <Footer />
          <MobileMenu
            isOpen={isMobileMenuOpen}
            headerRef={headerRef}
            onOutsideClick={handleMobileMenuOutsideClick}
          />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
