'use client';

import { motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import AnimatedLogos from 'components/shared/animated-logos';
import BlinkingText from 'components/shared/blinking-text';
import CursorTrackingWrapper from 'components/shared/cursor-tracking-wrapper';
import GradientLabel from 'components/shared/gradient-label';
import SubscriptionForm from 'components/shared/subscription-form';
import { HUBSPOT_DEVELOPER_DAYS_3_FORM_ID } from 'constants/forms';
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

// eslint-disable-next-line no-unused-vars
const EmailRegistrationStep = ({ onSuccessCallback }) => {
  const [titleRef, isTitleInView, titleEntry] = useInView({ triggerOnce: true, threshold: 0.5 });
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

  const titleContent = (
    <BlinkingText parentElement={titleEntry?.target} shouldAnimationStart={isTitleInView}>
      {'Neon Developer Days 2023'.split('').map((letter, index) =>
        index === 14 ? (
          <span key={index}>
            <br className="xl:hidden" />
            <span className="hidden xl:inline"> </span>
          </span>
        ) : (
          <span
            className="animate-text-blink xl:!animate-none"
            style={{ animationPlayState: 'paused' }}
            key={index}
          >
            {letter}
          </span>
        )
      )}
    </BlinkingText>
  );

  return (
    <>
      <motion.div
        className="relative z-10 col-span-4 col-start-2 self-center 2xl:col-start-1 2xl:col-span-5 xl:col-span-full xl:self-end xl:text-center xl:!opacity-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: 'linear' }}
      >
        <GradientLabel className="inline-block" theme="green">
          November 2nd
        </GradientLabel>
        <h1
          className="mt-4 text-[82px] font-semibold leading-none tracking-tighter text-white 2xl:text-6xl xl:mt-2 xl:text-center xl:text-[78px] xl:tracking-[-0.05em] lg:text-[58px] md:mt-1 md:text-[52px]"
          ref={titleRef}
        >
          {titleContent}
        </h1>
        <p className="mt-6 max-w-xl font-mono text-xl font-light tracking-tighter text-white 2xl:text-lg xl:mx-auto xl:max-w-md lg:mt-4 lg:max-w-sm lg:text-base md:max-w-[80%]">
          Join us at{' '}
          <time className="text-primary-4" dateTime="2023-11-02T10:00">
            10:00 AM PT, November 2nd
          </time>{' '}
          for presentations about Postgres, scalability, AI, and using Neon with modern developer
          tools.
        </p>
        <SubscriptionForm
          className="mt-7 xl:mx-auto xl:mt-10 lg:mt-8 md:mt-7"
          successText="Thanks for registering!"
          submitButtonText="Register"
          size="sm"
          localStorageKey="submittedEmailDeveloperDays3Form"
          formId={HUBSPOT_DEVELOPER_DAYS_3_FORM_ID}
        />
        <AnimatedLogos className="mt-14 sm:mt-10" />
      </motion.div>
      <motion.div
        className="col-span-7 col-start-6 self-center xl:col-span-full xl:!transform-none xl:self-start xl:!opacity-100"
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
              height={740}
              alt="Tusks illustration"
              priority
            />
          </CursorTrackingWrapper>
        </div>
        <Image
          className="remove-image-loading-visual hidden xl:block lg:my-9 md:my-4"
          src={ElephantIllustration}
          alt="Elephant illustration"
        />
      </motion.div>
    </>
  );
};

EmailRegistrationStep.propTypes = {
  onSuccessCallback: PropTypes.func,
};

export default EmailRegistrationStep;
