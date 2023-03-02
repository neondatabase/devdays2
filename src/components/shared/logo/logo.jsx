import clsx from 'clsx';
import Image from 'next/image';
import PropTypes from 'prop-types';

import logoWhite from 'images/logo-white.svg';

const Logo = ({ className = null }) => (
  <Image
    className={clsx('h-9 w-auto 2xl:h-8', className)}
    src={logoWhite}
    alt=""
    width={128}
    height={36}
    aria-hidden
  />
);

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
