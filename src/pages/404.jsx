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
      <Hero />
      <Footer />
    </div>
  </>
);

export default GlobalNotFoundPage;
