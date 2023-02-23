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
      <div className="relative flex min-h-screen flex-col bg-black">
        <Header />
        <main className="flex min-h-[calc(100vh-68px)] flex-1 flex-col overflow-hidden lg:min-h-[calc(100vh-56px)]">
          {children}
        </main>
        <Footer />
      </div>
    </body>
  </html>
);

export default RootLayout;
