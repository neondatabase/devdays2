'use client';

import Script from 'next/script';
import { SessionProvider } from 'next-auth/react';

import 'styles/globals.css';

import Footer from 'components/shared/footer';
import Header from 'components/shared/header';

// eslint-disable-next-line react/prop-types
const RootLayout = ({ children }) => (
  <SessionProvider>
    <html lang="en" className="h-full">
      <head>
        {process.env.NODE_ENV === 'production' && (
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl+'';f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer', 'GTM-MJLTK6F');
      `}
          </Script>
        )}
      </head>
      <body>
        {process.env.NODE_ENV === 'production' && (
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MJLTK6F" height="0" width="0" style="display: none; visibility: hidden" aria-hidden="true"></iframe>`,
            }}
          />
        )}
        <Header />
        <main className="flex min-h-full flex-col overflow-hidden xl:min-h-0 xl:flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  </SessionProvider>
);

export default RootLayout;
