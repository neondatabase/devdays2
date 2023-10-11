import AgendaTable from 'components/pages/agenda/agenda-table';
import Hero from 'components/pages/agenda/hero';
import Layout from 'components/shared/layout';
import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.agenda);

const AgendaPage = () => (
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

export default AgendaPage;
