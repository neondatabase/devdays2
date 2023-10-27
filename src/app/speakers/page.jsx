import AgendaTable from 'components/pages/speakers/agenda-table';
import Hero from 'components/pages/speakers/hero';
import Layout from 'components/shared/layout';
import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.speakers);

// TODO: remove this page and its related components from the components/speakers folder when restoring the redirect to the agenda

const SpeakersPage = () => (
  <Layout>
    <link rel="preload" crossOrigin="anonymous" href="/animations/input-lines.riv" as="fetch" />
    <link
      rel="preload"
      crossOrigin="anonymous"
      href="/images/developer-days/elephant-defuse.jpg"
      as="image"
    />
    <link
      rel="preload"
      crossOrigin="anonymous"
      href="/images/developer-days/elephant-depth.jpg"
      as="image"
    />
    <link
      rel="preload"
      crossOrigin="anonymous"
      href="/images/developer-days/elephant-0-large.png"
      as="image"
      media="(min-width: 1024px)"
    />
    <link
      rel="preload"
      crossOrigin="anonymous"
      href="/images/developer-days/elephant-0-medium.png"
      as="image"
      media="(min-width: 768px) and (max-width: 1023px)"
    />
    <link
      rel="preload"
      crossOrigin="anonymous"
      href="/images/developer-days/elephant-0-small.png"
      as="image"
      media="(max-width: 767px)"
    />
    <Hero />
    <AgendaTable />
  </Layout>
);

export default SpeakersPage;
