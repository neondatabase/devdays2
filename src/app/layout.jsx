'use client';

import Script from 'next/script';
import { SessionProvider } from 'next-auth/react';

import 'styles/globals.css';

import Footer from 'components/shared/footer';
import Header from 'components/shared/header';

// eslint-disable-next-line react/prop-types
const RootLayout = ({ children }) => (
  <SessionProvider basePath="/developer-days/api/auth">
    <html lang="en" className="h-full">
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
        <Header />
        <main className="h-full min-h-full overflow-hidden xl:flex xl:h-auto xl:min-h-0 xl:flex-grow xl:flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  </SessionProvider>
);

export default RootLayout;
