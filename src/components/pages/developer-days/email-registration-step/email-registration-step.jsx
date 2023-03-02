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
      {'Developer Days'.split('').map((letter, index) =>
        index === 9 ? (
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
        className="col-span-4 col-start-2 self-center xl:col-span-full xl:text-center xl:!opacity-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: 'linear' }}
      >
        <span className="inline-block rounded-[50px] bg-secondary-2 py-1 px-3 align-top text-sm font-semibold uppercase leading-snug tracking-[-0.02em] text-black xl:text-xs lg:mt-0 lg:text-xs">
          March 2023
        </span>
        <h1
          className="mt-4 text-[120px] font-semibold leading-none tracking-tighter text-white 2xl:text-8xl xl:mt-2 xl:text-center xl:text-[78px] xl:tracking-[-0.05em] lg:text-[58px] md:mt-1 md:text-[52px]"
          ref={titleRef}
        >
          {titleContent}
        </h1>
        <p className="mt-5 max-w-xl font-mono text-xl font-light tracking-tighter text-white 2xl:text-lg xl:mx-auto xl:max-w-md lg:mt-4 lg:max-w-sm lg:text-base md:max-w-[80%]">
          Join us on <time dateTime="2023-03-28 10:30">March 28th, 9 a.m. PT</time> to learn more
          about latest of Serverless Postgres
        </p>
        <SubscriptionForm
          className="mt-12 xl:mx-auto xl:mt-10 lg:mt-8 md:mt-7"
          successText="Thanks for registering!"
          submitButtonText="Register"
          size="sm"
          localStorageKey="submittedEmailDeveloperDays2Form"
          formId={HUBSPOT_DEVELOPER_DAYS_2_FORM_ID}
          onSuccess={onSuccessCallback}
        />
      </motion.div>
      <motion.div
        className="col-span-7 col-start-6 self-center xl:col-span-full xl:!transform-none xl:!opacity-100"
        initial="initial"
        animate={columnControls}
        variants={appearColumnVariants}
      >
        <div
          className="relative w-[1080px] animate-webgl-brightness mix-blend-lighten xl:hidden"
          style={{ perspective: 900 }}
        >
          <motion.canvas
            className="webgl relative z-20"
            initial="initial"
            animate={sceneControls}
            variants={appearSceneVariants}
          />
          <CursorTrackingWrapper className="absolute inset-0 z-30" xMovement={1} yMovement={1}>
            <Image
              className="h-full w-full"
              src="/developer-days/images/developer-days/elephant-tusk.png"
              width={1010}
              height={740}
              alt="Tusks illustration"
              priority
            />
          </CursorTrackingWrapper>
          <Script
            src="/developer-days/static/elephant-webgl-scene.js"
            type="module"
            strategy="afterInteractive"
          />
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
