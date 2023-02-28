import clsx from 'clsx';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const styles = {
  size: {
    lg: 'max-w-[1760px]',
    full: 'w-full px-14',
  },
};

const Container = forwardRef(({ className = null, size, children, ...otherProps }, ref) => (
  <div
    className={clsx('px relative mx-auto', className, styles.size[size])}
    {...otherProps}
    ref={ref}
  >
    {children}
  </div>
));

Container.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)).isRequired,
  children: PropTypes.node.isRequired,
};

export default Container;
