import { motion, useMotionValue, useTransform } from 'framer-motion';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

const CursorTrackingWrapper = ({ children }) => {
  const [innerWidth, setInnerWidth] = useState(0);
  const innerWrapperRef = useRef();
  const x = useMotionValue(200);
  // const y = useMotionValue(200);

  // const rotateX = useTransform(y, [0, 400], [45, -45]);
  const rotateY = useTransform(x, [0, innerWidth], [-20, 20]);

  useEffect(() => {
    if (!innerWidth) setInnerWidth(innerWrapperRef?.current?.offsetWidth);
  }, [children, innerWidth]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    // y.set(event.clientY - rect.top);
  };

  return (
    <motion.div
      style={{
        perspective: innerWidth,
      }}
      onMouseMove={handleMouseMove}
    >
      <motion.div ref={innerWrapperRef} style={{ rotateY }}>
        {children}
      </motion.div>
    </motion.div>
  );
};

CursorTrackingWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CursorTrackingWrapper;
