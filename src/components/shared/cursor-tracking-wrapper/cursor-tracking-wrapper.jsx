import { motion, useAnimationControls, useMotionValue, useTransform } from 'framer-motion';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

import usePrevious from 'hooks/use-previous';

const appearAndExitGradientVariants = {
  initial: {
    translateX: '-100%',
    opacity: 0,
  },
  visible: {
    translateX: '100%',
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: 'linear',
      opacity: {
        duration: 0,
      },
    },
    transitionEnd: {
      opacity: 0,
    },
  },
};

const CursorTrackingWrapper = ({ children, color = '1' }) => {
  const [innerWidth, setInnerWidth] = useState(0);
  const prevColor = usePrevious(color);
  const innerWrapperRef = useRef();
  const x = useMotionValue(200);
  // const y = useMotionValue(200);
  const gradientControls = useAnimationControls();

  useEffect(() => {
    if (prevColor !== color) {
      gradientControls.start('visible').then(() => {
        gradientControls.start('initial');
      });
    }
  }, [prevColor, color, gradientControls]);

  // const rotateX = useTransform(y, [0, innerWidth], [8, -8]);
  const rotateY = useTransform(x, [0, innerWidth], [-8, 8]);

  useEffect(() => {
    if (!innerWidth) setInnerWidth(innerWrapperRef?.current?.offsetWidth);
  }, [children, innerWidth]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    // y.set(event.clientY - rect.top);
  };

  return (
    <>
      <motion.div
        className="xl:hidden"
        style={{
          perspective: innerWidth || 790,
        }}
        onMouseMove={handleMouseMove}
      >
        <motion.div className="overflow-hidden" ref={innerWrapperRef} style={{ rotateY }}>
          {children}
          <motion.span
            initial="initial"
            animate={gradientControls}
            variants={appearAndExitGradientVariants}
            style={{
              position: 'absolute',
              zIndex: '22',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              backgroundImage:
                'linear-gradient(106deg, transparent 30%, #fff 60%, transparent 60%)',
            }}
          />
        </motion.div>
      </motion.div>
      <div className="hidden xl:block">{children}</div>
    </>
  );
};

CursorTrackingWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

export default CursorTrackingWrapper;
