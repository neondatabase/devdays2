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
  </>
);

export default Head;
