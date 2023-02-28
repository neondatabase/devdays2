import PropTypes from 'prop-types';

const SITE_URL = process.env.NEXT_PUBLIC_DEFAULT_SITE_URL || 'localhost:3000';

const defaultTitle = 'Neon — Serverless, Fault-Tolerant, Branchable Postgres';
const defaultDescription =
  'Postgres made for developers. Easy to Use, Scalable, Cost efficient solution for your next project.';
const defaultImagePath = '/developer-days/images/social-previews/index.jpg';

const fontsBasePath = '/developer-days/fonts';

const fontsPaths = [
  '/ibm-plex-sans/ibm-plex-sans-bold.woff2',
  '/ibm-plex-sans/ibm-plex-sans-regular.woff2',
];

const SEO = ({
  title = defaultTitle,
  description = defaultDescription,
  imagePath = defaultImagePath,
  preloadAssets = [],
}) => {
  const currentImagePath = imagePath.startsWith('http') ? imagePath : SITE_URL + imagePath;

  return (
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
      />
      <title>{title}</title>
      <meta name="description" content={description} key="desc" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={currentImagePath} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="theme-color" content="#1a1a1a" />
      <link rel="icon" href="/developer-days/favicon.ico" />
      <link rel="manifest" href="/developer-days/manifest.webmanifest" crossOrigin="anonymous" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/developer-days/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="48x48"
        href="/developer-days/favicon/favicon-48x48.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="72x72"
        href="/developer-days/favicon/favicon-72x72.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/developer-days/favicon/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="144x144"
        href="/developer-days/favicon/favicon-144x144.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/developer-days/favicon/favicon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="256x256"
        href="/developer-days/favicon/favicon-256x256.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="384x384"
        href="/developer-days/favicon/favicon-384x384.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="512x512"
        href="/developer-days/favicon/favicon-512x512.png"
      />
      <link rel="mask-icon" href="/developer-days/favicon/safari-pinned-tab.svg" color="#1a1a1a" />

      {fontsPaths.map((fontPath, index) => (
        <link
          rel="preload"
          href={`${fontsBasePath}${fontPath}`}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          key={index}
        />
      ))}

      {preloadAssets.map((item, index) => (
        <link key={index} rel="preload" href={item} as="image" crossOrigin="true" />
      ))}
    </>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imagePath: PropTypes.string,
  preloadAssets: PropTypes.array,
};

export default SEO;
