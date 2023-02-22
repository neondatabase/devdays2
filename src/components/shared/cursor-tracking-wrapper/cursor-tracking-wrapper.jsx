import clsx from 'clsx';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import PropTypes from 'prop-types';
import { useRef } from 'react';

const CursorTrackingWrapper = ({
  children,
  className: additionalClassName,
  xMovement = 8,
  yMovement = 8,
}) => {
  const innerWrapperRef = useRef();
  const x = useMotionValue(200);
  // const y = useMotionValue(200);

  // const rotateX = useTransform(y, [0, innerWidth], [8, -8]);
  const rotateY = useTransform(
    x,
    [0, innerWrapperRef?.current?.offsetWidth || 790],
    [-xMovement, yMovement]
  );

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    // y.set(event.clientY - rect.top);
  };

  return (
    <>
      <motion.div
        className={clsx('xl:hidden', additionalClassName)}
        style={{
          perspective: innerWrapperRef?.current?.offsetWidth || 790,
        }}
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className="overflow-hidden rounded-[22px]"
          ref={innerWrapperRef}
          style={{ rotateY }}
        >
          {children}
        </motion.div>
      </motion.div>
      <div className="hidden xl:block">{children}</div>
    </>
  );
};

CursorTrackingWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  xMovement: PropTypes.number,
  yMovement: PropTypes.number,
};

export default CursorTrackingWrapper;
