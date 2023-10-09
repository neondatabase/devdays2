import AgendaTable from 'components/pages/agenda/agenda-table';
import Hero from 'components/pages/agenda/hero';
import Layout from 'components/shared/layout';
import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.agenda);

const AgendaPage = () => (
  <Layout>
    <Hero />
    <AgendaTable />
  </Layout>
);

export default AgendaPage;
