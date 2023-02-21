import { motion, useAnimationControls, useMotionValue, useTransform } from 'framer-motion';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

import usePrevious from 'hooks/use-previous';

const appearAndExitGradientVariants = {
  initial: {
    opacity: 0,
    translateX: '-100%',
  },
  move: {
    opacity: 1,
    translateX: '100%',
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

const scaleAndMoveTicketVariants = {
  initial: {
    scale: 1,
    transition: {
      duration: 0.35,
      ease: 'linear',
    },
  },
  scaleOut: {
    scale: 0.95,
    transition: {
      duration: 0.35,
      ease: 'linear',
    },
  },
};

const CursorTrackingWrapper = ({ children, color = '1', withAnimations = false }) => {
  const prevColor = usePrevious(color);
  const innerWrapperRef = useRef();
  const x = useMotionValue(200);
  // const y = useMotionValue(200);
  const gradientControls = useAnimationControls();
  const ticketControls = useAnimationControls();

  useEffect(() => {
    if (!withAnimations) return;

    if (prevColor !== color) {
      ticketControls.start('scaleOut').then(() => {
        ticketControls.start('initial');
      });

      gradientControls.start('move').then(() => {
        gradientControls.start('initial');
      });
    }
  }, [prevColor, color, gradientControls, ticketControls, withAnimations]);

  // const rotateX = useTransform(y, [0, innerWidth], [8, -8]);
  const rotateY = useTransform(x, [0, innerWrapperRef?.current?.offsetWidth || 790], [-8, 8]);

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
          perspective: innerWrapperRef?.current?.offsetWidth || 790,
        }}
        initial="initial"
        animate={ticketControls}
        variants={scaleAndMoveTicketVariants}
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className="overflow-hidden rounded-[22px]"
          ref={innerWrapperRef}
          style={{ rotateY }}
        >
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
              backgroundImage: `linear-gradient(106deg, transparent 30%, ${
                color === '1'
                  ? 'rgba(51, 255, 187, 0.8)'
                  : color === '2'
                  ? 'rgba(230, 255, 102, 0.8)'
                  : color === '3'
                  ? 'rgba(255, 153, 221, 0.8)'
                  : 'rgba(204, 204, 255, 0.8)'
              } 60%, transparent 60%)`,
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
  withAnimations: PropTypes.bool,
};

export default CursorTrackingWrapper;
