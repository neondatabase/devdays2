'use client';

import Script from 'next/script';

import 'styles/globals.css';

import Footer from 'components/shared/footer';
import Header from 'components/shared/header';

// eslint-disable-next-line react/prop-types
const RootLayout = ({ children }) => (
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
          <Header />
          <main className="flex flex-1 flex-col bg-black">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );

export default RootLayout;
