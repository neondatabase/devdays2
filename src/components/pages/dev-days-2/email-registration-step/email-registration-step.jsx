import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

import BlinkingText from 'components/shared/blinking-text';
import SubscriptionForm from 'components/shared/subscription-form';
import { HUBSPOT_DEVELOPER_DAYS_2_FORM_ID } from 'constants/forms';
import ElephantIllustration from 'images/developer-days-2/ticket-hero-elephant.png';

const EmailRegistrationStep = ({ onSuccessCallback }) => {
  const [titleRef, isTitleInView, titleEntry] = useInView({ triggerOnce: true, threshold: 0.5 });

  const titleContent = (
    <BlinkingText parentElement={titleEntry?.target} shouldAnimationStart={isTitleInView}>
      {'Neon Dev \n Days 2023'.split('').map((letter, index) =>
        index === 8 ? (
          <br className="lg:hidden" key={index} />
        ) : (
          <span
            className={clsx('animate-text-blink', letter === '/' && 'text-secondary-2')}
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
        className="w-5/12 xl:w-1/2 lg:flex lg:w-full lg:flex-col lg:items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeIn' }}
      >
        <span className="rounded-[50px] bg-secondary-2 py-1 px-3 text-sm font-semibold uppercase leading-snug dark:text-black sm:mt-0">
          Spring 2023
        </span>
        <h1
          className="mt-4 text-[120px] font-semibold leading-none tracking-tighter text-white 2xl:text-8xl xl:text-7xl lg:text-center lg:text-[78px] md:text-[58px] sm:max-w-[80%] sm:text-[52px]"
          ref={titleRef}
        >
          {titleContent}
        </h1>
        <p className="mt-4 font-mono text-xl font-light tracking-tighter text-white lg:max-w-md lg:text-center lg:text-lg md:text-base sm:max-w-[80%]">
          Join us at <time dateTime="2023-03-26 10:30">10:30AM PT, March 26</time> to hear more
          about latest updates from our dev team.
        </p>
        <SubscriptionForm
          className="mt-12 lg:mt-8"
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
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          opacity: {
            duration: 1,
            ease: 'linear',
          },
          scale: {
            duration: 2,
            ease: [0, 0.35, 0.35, 1],
          },
        }}
      >
        <Image src={ElephantIllustration} alt="Elephant illustration" />
      </motion.div>
    </>
  );
};

EmailRegistrationStep.propTypes = {
  onSuccessCallback: PropTypes.func,
};

export default EmailRegistrationStep;
