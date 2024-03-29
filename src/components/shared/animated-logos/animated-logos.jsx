import clsx from 'clsx';
import PropTypes from 'prop-types';

import airplaneLogo from 'images/logos/airplane.svg';
import appsmithLogo from 'images/logos/appsmith.svg';
import coherenceLogo from 'images/logos/coherence.svg';
import drizzleORMLogo from 'images/logos/drizzle-orm.svg';
import grafbaseLogo from 'images/logos/grafbase.svg';
import koyebLogo from 'images/logos/koyeb.svg';
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
    src: prismaLogo,
    alt: 'Prisma',
    width: 95,
    height: 32,
  },
  {
    src: drizzleORMLogo,
    alt: 'Drizzle ORM',
    width: 160,
    height: 32,
  },
  {
    src: appsmithLogo,
    alt: 'appsmith_',
    width: 121,
    height: 32,
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
    height: 32,
  },
  {
    src: polyscaleLogo,
    alt: 'Polyscale',
    width: 111,
    height: 32,
  },
  {
    src: grafbaseLogo,
    alt: 'Grafbase',
    width: 113,
    height: 32,
  },
  {
    src: langchainLogo,
    alt: 'Langchain',
    width: 106,
    height: 32,
  },
  {
    src: neonLogo,
    alt: 'Neon',
    width: 100,
    height: 32,
  },
  {
    src: coherenceLogo,
    alt: 'Coherence',
    width: 130,
    height: 32,
  },
  {
    src: koyebLogo,
    alt: 'Koyeb',
    width: 120,
    height: 32,
  },
];

const AnimatedLogos = ({ className = null }) => (
  <div
    className={clsx(
      className,
      'logos grid w-full overflow-x-hidden md:-mx-4 md:w-[calc(100%+32px)] sm:mx-0 sm:w-full relative z-10'
    )}
  >
    <div className="flex h-10 w-full animate-logos motion-reduce:animate-none">
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
