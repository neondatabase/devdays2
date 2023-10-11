'use client';

import clsx from 'clsx';
import { motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

import CursorTrackingWrapper from 'components/shared/cursor-tracking-wrapper';
import ElephantIllustration from 'images/developer-days/ticket-hero-elephant.png';

const appearColumnVariants = {
  initial: {
    opacity: 0,
    scale: 1.2,
  },
  appear: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: 'linear',
      scale: {
        duration: 2,
        ease: [0, 0.35, 0.35, 1],
      },
    },
  },
};

const appearSceneVariants = {
  initial: {
    translateY: 50,
  },
  appear: {
    translateY: 0,
    transition: {
      delay: 1,
      duration: 3,
      ease: [0.4, 0, 0, 1],
    },
  },
};

const ElephantWebglAnimation = ({ className }) => {
  const columnControls = useAnimationControls();
  const sceneControls = useAnimationControls();

  const canvasRef = useRef(null);

  useEffect(() => {
    (async () => {
      const elephantWebglScene = (await import('utils/elephant-webgl-scene')).default;
      elephantWebglScene(canvasRef.current);
    })();
  }, []);

  useEffect(() => {
    const handleElephantTextureLoad = () => {
      if (window.localStorage.getItem('isTextureLoaded')) {
        columnControls.start('appear');
        sceneControls.start('appear');
      }
    };

    window.addEventListener('storage', handleElephantTextureLoad);

    return () => {
      window.removeEventListener('storage', handleElephantTextureLoad);
    };
  }, [columnControls, sceneControls]);

  return (
    <motion.div
      className={clsx(
        'col-span-7 col-start-6 self-center xl:col-span-full xl:!transform-none xl:self-start xl:!opacity-100',
        className
      )}
      initial="initial"
      animate={columnControls}
      variants={appearColumnVariants}
    >
      <div
        className="relative w-[1080px] animate-webgl-brightness mix-blend-lighten 2xl:max-w-full xl:hidden"
        style={{ perspective: 900 }}
      >
        <motion.canvas
          className="webgl relative z-20 2xl:!h-auto 2xl:max-w-full"
          initial="initial"
          animate={sceneControls}
          variants={appearSceneVariants}
          width={1080}
          height={760}
          ref={canvasRef}
        />
        <CursorTrackingWrapper className="absolute inset-0 z-30" xMovement={1} yMovement={1}>
          <Image
            className="h-full w-full"
            src="/images/developer-days/elephant-tusk.png"
            width={1010}
            height={704}
            alt="Tusks illustration"
            priority
          />
        </CursorTrackingWrapper>
      </div>
      <Image
        className="remove-image-loading-visual hidden xl:block lg:my-9 md:my-4"
        src={ElephantIllustration}
        alt="Elephant illustration"
        sizes="100vw"
      />
    </motion.div>
  );
};

ElephantWebglAnimation.propTypes = {
  className: PropTypes.string,
};

export default ElephantWebglAnimation;
