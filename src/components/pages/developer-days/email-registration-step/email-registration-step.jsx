'use client';

import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

import AnimatedLogos from 'components/shared/animated-logos';
import BlinkingText from 'components/shared/blinking-text';
import ElephantWebglAnimation from 'components/shared/elephant-webgl-animation';
import GradientLabel from 'components/shared/gradient-label';
import SubscriptionForm from 'components/shared/subscription-form';
import { HUBSPOT_DEVELOPER_DAYS_3_FORM_ID } from 'constants/forms';

// eslint-disable-next-line no-unused-vars
const EmailRegistrationStep = ({ onSuccessCallback }) => {
  const [titleRef, isTitleInView, titleEntry] = useInView({ triggerOnce: true, threshold: 0.5 });

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
      <ElephantWebglAnimation />
    </>
  );
};

EmailRegistrationStep.propTypes = {
  onSuccessCallback: PropTypes.func,
};

export default EmailRegistrationStep;
