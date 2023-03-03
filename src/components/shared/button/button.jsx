import clsx from 'clsx';
import NextLink from 'next/link';
import PropTypes from 'prop-types';

const styles = {
  base: 'inline-flex items-center justify-center font-bold !leading-none text-center whitespace-nowrap rounded-full transition-colors duration-200 outline-none',
  size: {
    md: 'text-xl tracking-[-0.02em] pr-8 pl-[4.1rem] py-[22px] xl:pl-[4.25rem] lg:pl-[4.25rem] px-11 xl:px-9 lg:px-8',
    sm: 'text-base px-[27px] py-[14px]',
  },
  theme: {
    primary: 'bg-primary-4 text-black hover:bg-[#00e5bf]',
    'code-copy': 'rounded-md',
    quaternary: 'bg-white text-[#1A1A1A] border-2 border-white hover:border-primary-2',
  },
};

const Button = ({
  className: additionalClassName = null,
  to = null,
  size,
  theme,
  children,
  ...otherProps
}) => {
  const className = clsx(styles.base, styles.size[size], styles.theme[theme], additionalClassName);

  const Tag = to ? NextLink : 'button';

  return (
    <Tag className={className} href={to} {...otherProps}>
      {children}
    </Tag>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)).isRequired,
  theme: PropTypes.oneOf(Object.keys(styles.theme)).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
