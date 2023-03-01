import SEO from 'components/shared/seo';
import SEO_DATA from 'constants/seo-data';

const Head = () => (
  <>
    <SEO {...SEO_DATA.developerDays2} />
    <link
      rel="preload"
      href="/developer-days/animations/input-lines.riv"
      as="fetch"
      crossOrigin="true"
    />
  </>
);

export default Head;
