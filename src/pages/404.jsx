import Head from 'next/head';

import 'styles/globals.css';

import Hero from 'components/pages/404/hero';
import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
import SEO from 'components/shared/seo';
import SEO_DATA from 'constants/seo-data';

const GlobalNotFoundPage = () => (
  <>
    <Head>
      <SEO {...SEO_DATA[404]} />
    </Head>
    <div className="relative flex min-h-screen flex-col bg-black">
      <Header />
      <main className="flex min-h-[calc(100vh-68px)] flex-1 flex-col overflow-hidden lg:min-h-[calc(100vh-56px)]">
        <Hero />
      </main>
      <Footer />
    </div>
  </>
);

export default GlobalNotFoundPage;
