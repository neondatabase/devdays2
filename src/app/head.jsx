import SEO from 'components/shared/seo';
import SEO_DATA from 'constants/seo-data';

const Head = () => (
  <>
    <SEO {...SEO_DATA.developerDays2} />
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
  </>
);

export default Head;
