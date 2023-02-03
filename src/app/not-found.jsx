import Hero from 'components/pages/404/hero';
import SEO from 'components/shared/seo';
import SEO_DATA from 'constants/seo-data';

const NotFoundPage = () => (
  <>
    <SEO {...SEO_DATA[404]} />
    <Hero />
  </>
);

export default NotFoundPage;
