import SEO from 'components/shared/seo';
import SEO_DATA from 'constants/seo-data';

const Head = () => (
  <>
    <SEO {...SEO_DATA.generateTicket} />
    <link rel="preload" crossOrigin="anonymous" href="/animations/input-lines.riv" as="fetch" />
    <link
      rel="preload"
      crossOrigin="anonymous"
      href="/images/developer-days/elephant-1-large.png"
      as="image"
      media="(min-width: 1024px)"
    />
    <link
      rel="preload"
      crossOrigin="anonymous"
      href="/images/developer-days/elephant-1-medium.png"
      as="image"
      media="(min-width: 768px) and (max-width: 1023px)"
    />
    <link
      rel="preload"
      crossOrigin="anonymous"
      href="/images/developer-days/elephant-1-small.png"
      as="image"
      media="(max-width: 767px)"
    />
    <link
      rel="preload"
      crossOrigin="anonymous"
      href="/images/developer-days/elephant-2-large.png"
      as="image"
      media="(min-width: 1024px)"
    />
    <link
      rel="preload"
      crossOrigin="anonymous"
      href="/images/developer-days/elephant-2-medium.png"
      as="image"
      media="(min-width: 768px) and (max-width: 1023px)"
    />
    <link
      rel="preload"
      crossOrigin="anonymous"
      href="/images/developer-days/elephant-2-small.png"
      as="image"
      media="(max-width: 767px)"
    />
    <link
      rel="preload"
      crossOrigin="anonymous"
      href="/images/developer-days/elephant-3-large.png"
      as="image"
      media="(min-width: 1024px)"
    />
    <link
      rel="preload"
      crossOrigin="anonymous"
      href="/images/developer-days/elephant-3-medium.png"
      as="image"
      media="(min-width: 768px) and (max-width: 1023px)"
    />
    <link
      rel="preload"
      crossOrigin="anonymous"
      href="/images/developer-days/elephant-3-small.png"
      as="image"
      media="(max-width: 767px)"
    />
    <link
      rel="preload"
      crossOrigin="anonymous"
      href="/images/developer-days/elephant-4-large.png"
      as="image"
      media="(min-width: 1024px)"
    />
    <link
      rel="preload"
      crossOrigin="anonymous"
      href="/images/developer-days/elephant-4-medium.png"
      as="image"
      media="(min-width: 768px) and (max-width: 1023px)"
    />
    <link
      rel="preload"
      crossOrigin="anonymous"
      href="/images/developer-days/elephant-4-small.png"
      as="image"
      media="(max-width: 767px)"
    />
    <link
      rel="preload"
      crossOrigin="anonymous"
      href="/fonts/kallisto/kallisto-light.woff2"
      as="font"
      type="font/woff2"
    />
  </>
);

export default Head;
