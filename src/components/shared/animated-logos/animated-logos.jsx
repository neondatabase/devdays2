import clsx from 'clsx';
import PropTypes from 'prop-types';

import airplaneLogo from 'images/logos/airplane.svg';
import appsmithLogo from 'images/logos/appsmith.svg';
import cloudflareLogo from 'images/logos/cloudflare.svg';
import drizzleORMLogo from 'images/logos/drizzle-orm.svg';
import grafbaseLogo from 'images/logos/grafbase.svg';
import hasuraLogo from 'images/logos/hasura.svg';
import langchainLogo from 'images/logos/langchain.svg';
import neonLogo from 'images/logos/neon.svg';
import polyscaleLogo from 'images/logos/polyscale.svg';
import prismaLogo from 'images/logos/prisma.svg';
import qoveryLogo from 'images/logos/qovery.svg';
import snapletLogo from 'images/logos/snaplet.svg';

const logos = [
  {
    src: qoveryLogo,
    alt: 'Qovery',
    width: 104,
    height: 32,
  },
  {
    src: hasuraLogo,
    alt: 'Hasura',
    width: 88,
    height: 28,
  },
  {
    src: prismaLogo,
    alt: 'Prisma',
    width: 95,
    height: 30,
  },
  {
    src: cloudflareLogo,
    alt: 'CloudFlare',
    width: 137,
    height: 20,
  },
  {
    src: drizzleORMLogo,
    alt: 'Drizzle ORM',
    width: 160,
    height: 18,
  },
  {
    src: appsmithLogo,
    alt: 'appsmith_',
    width: 121,
    height: 20,
  },
  {
    src: snapletLogo,
    alt: 'Snaplet',
    width: 114,
    height: 32,
  },
  {
    src: airplaneLogo,
    alt: 'Airplane',
    width: 89,
    height: 24,
  },
  {
    src: polyscaleLogo,
    alt: 'Polyscale',
    width: 112,
    height: 32,
  },
  {
    src: grafbaseLogo,
    alt: 'Grafbase',
    width: 113,
    height: 20,
  },
  {
    src: langchainLogo,
    alt: 'Langchain',
    width: 106,
    height: 24,
  },
  {
    src: neonLogo,
    alt: 'Neon',
    width: 100,
    height: 28,
  },
];

const AnimatedLogos = ({ className = null }) => (
    <div
      className={clsx(
        className,
        'logos grid w-full overflow-x-hidden md:-mx-4 md:w-[calc(100%+32px)] sm:mx-0 sm:w-full relative z-10'
      )}
    >
      <div className="flex h-10 w-full animate-logos">
        <ul className="flex w-full justify-between items-center">
          {logos.map(({ src, alt, width, height }, index) => (
            <li className="px-[18px]" key={`logo_${index}`}>
              <img
                className="h-7 w-auto max-w-none"
                src={src}
                alt={alt}
                width={width}
                height={height}
                loading="eager"
              />
            </li>
          ))}
        </ul>
        <ul className="flex md:hidden sm:flex items-center" aria-hidden>
          {logos.map(({ src, alt, width, height }, index) => (
            <li className="px-[18px]" key={index}>
              <img
                className="h-7 w-auto max-w-none"
                src={src}
                alt={alt}
                width={width}
                height={height}
                loading="eager"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

AnimatedLogos.propTypes = {
  className: PropTypes.string,
};

export default AnimatedLogos;
