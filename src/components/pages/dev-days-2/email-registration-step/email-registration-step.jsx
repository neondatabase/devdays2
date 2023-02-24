'use client';

import { motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import Script from 'next/script';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import BlinkingText from 'components/shared/blinking-text';
import CursorTrackingWrapper from 'components/shared/cursor-tracking-wrapper';
import SubscriptionForm from 'components/shared/subscription-form';
import { HUBSPOT_DEVELOPER_DAYS_2_FORM_ID } from 'constants/forms';
import ElephantIllustration from 'images/developer-days-2/ticket-hero-elephant.png';

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
    translateX: -40,
    translateY: 30,
    rotateX: 10,
    originX: 0,
  },
  appear: {
    translateX: -40,
    translateY: 0,
    rotateX: 0,
    originX: 0,
    transition: {
      duration: 3,
      ease: [0, 0.35, 0.35, 1],
    },
  },
};

const EmailRegistrationStep = ({ onSuccessCallback }) => {
  const [titleRef, isTitleInView, titleEntry] = useInView({ triggerOnce: true, threshold: 0.5 });
  const columnControls = useAnimationControls();
  const sceneControls = useAnimationControls();

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
      {'Neon Dev Days 2023'.split('').map((letter, index) =>
        index === 8 ? (
          <br className="lg:hidden" key={index} />
        ) : (
          <span className="animate-text-blink" style={{ animationPlayState: 'paused' }} key={index}>
            {letter}
          </span>
        )
      )}
    </BlinkingText>
  );

  return (
    <>
      <motion.div
        className="w-5/12 xl:w-1/2 lg:mt-10 lg:flex lg:w-full lg:flex-col lg:items-center"
        initial={window.innerWidth <= '1024' ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: 'linear' }}
      >
        <span className="rounded-[50px] bg-secondary-2 py-1 px-3 text-sm font-semibold uppercase leading-snug dark:text-black sm:mt-0 sm:text-xs">
          Spring 2023
        </span>
        <h1
          className="mt-4 text-[120px] font-semibold leading-none tracking-tighter text-white 2xl:text-8xl xl:text-7xl lg:text-center lg:text-[78px] md:text-[58px] sm:mt-2 sm:max-w-[80%] sm:text-[52px]"
          ref={titleRef}
        >
          {window.innerWidth <= '1024' ? 'Neon Dev Days 2023' : titleContent}
        </h1>
        <p className="mt-4 max-w-xl font-mono text-xl font-light tracking-tighter text-white lg:text-center lg:text-lg md:text-base sm:max-w-[80%]">
          Join us at <time dateTime="2023-03-26 10:30">10:30AM PT, March 26</time> to hear more
          about latest updates from our dev team.
        </p>
        <SubscriptionForm
          className="mt-12 lg:mt-8 xs:mt-4"
          successText="Thanks for registering!"
          submitButtonText="Register"
          size="sm"
          localStorageKey="submittedEmailDeveloperDays2Form"
          formId={HUBSPOT_DEVELOPER_DAYS_2_FORM_ID}
          onSuccess={onSuccessCallback}
        />
      </motion.div>
      <motion.div
        className="w-7/12 xl:w-1/2 lg:my-4 lg:w-full"
        initial="initial"
        animate={window.innerWidth <= '1024' ? false : columnControls}
        variants={window.innerWidth <= '1024' ? false : appearColumnVariants}
      >
        <div className="relative min-h-[740px] w-[1010px] xl:hidden" style={{ perspective: 800 }}>
          <motion.canvas
            className="webgl relative z-20 animate-webgl-brightness"
            initial="initial"
            animate={sceneControls}
            variants={appearSceneVariants}
          />
          <CursorTrackingWrapper
            className="absolute inset-0 z-30 animate-webgl-brightness"
            xMovement={2}
            yMovement={2}
          >
            <Image
              className="h-full min-h-[740px] w-full"
              src="/images/developer-days-2/elephant-tusk.png"
              width={1010}
              height={740}
              alt="Tusks illustration"
            />
          </CursorTrackingWrapper>
          <Script src="/static/elephant-webgl-scene.js" type="module" strategy="afterInteractive" />
        </div>
        <Image className="hidden xl:block" src={ElephantIllustration} alt="Elephant illustration" />
      </motion.div>
    </>
  );
};

EmailRegistrationStep.propTypes = {
  onSuccessCallback: PropTypes.func,
};

export default EmailRegistrationStep;
