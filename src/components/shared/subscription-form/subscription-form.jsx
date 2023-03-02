'use client';

import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useCookie, useLocation } from 'react-use';
import { Alignment, Fit, Layout, useRive } from 'rive-react';

import Button from 'components/shared/button';
import useLocalStorage from 'hooks/use-local-storage';
import { doNowOrAfterSomeTime, emailRegexp, sendHubspotFormData } from 'utils/forms';

import CheckIcon from './icons/subscription-form-check.inline.svg';
import ErrorIcon from './icons/subscription-form-error.inline.svg';

const appearAndExitAnimationVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const sizeClassNames = {
  sm: {
    form: 'relative max-w-[540px] xl:max-w-[456px] lg:max-w-[464px]',
    input: 'h-[64px] text-lg pl-6 border xl:pl-5 md:h-[56px]',
    loading: 'right-[7px]',
    success: 'right-[7px]',
    stateIcon: 'w-12 h-12',
  },
};

const SubscriptionForm = ({
  className = null,
  formId,
  successText = 'Thank you for subscribing!',
  submitButtonText = 'Subscribe',
  size = 'md',
  localStorageKey,
  onSuccess,
}) => {
  const [email, setEmail] = useState('');
  const [formState, setFormState] = useState('default');
  const [submittedEmails, setSubmittedEmails] = useLocalStorage(localStorageKey, []);
  const [errorMessage, setErrorMessage] = useState('');
  const [hubspotutk] = useCookie('hubspotutk');
  const { href } = useLocation();
  const handleInputChange = (event) => setEmail(event.currentTarget.value.trim());

  const context = {
    hutk: hubspotutk,
    pageUri: href,
  };

  const { RiveComponent } = useRive({
    src: '/animations/input-lines.riv',
    autoplay: true,
    stateMachines: 'State Machine 1',
    layout: new Layout({
      fit: Fit.FitWidth,
      alignment: Alignment.TopCenter,
    }),
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const loadingAnimationStartedTime = Date.now();

    if (!email) {
      setErrorMessage('Please enter your email');
    } else if (!emailRegexp.test(email)) {
      setErrorMessage('Please enter a valid email');
    } else if (submittedEmails.includes(email)) {
      setFormState('loading');
      doNowOrAfterSomeTime(() => {
        setFormState('success');
        setEmail(successText);
        onSuccess();
        setTimeout(() => {
          setFormState('default');
          setEmail('');
        }, 2000);
      }, loadingAnimationStartedTime);
    } else {
      setErrorMessage('');
      setFormState('loading');

      sendHubspotFormData({
        formId,
        context,
        values: [
          {
            name: 'email',
            value: email,
          },
        ],
      })
        .then((response) => {
          if (response.ok) {
            // preserve submitted email only on
            // submission success
            setSubmittedEmails([...submittedEmails, email]);
            doNowOrAfterSomeTime(() => {
              setFormState('success');
              setEmail(successText);
              onSuccess();
              setTimeout(() => {
                setFormState('default');
                setEmail('');
              }, 2000);
            }, loadingAnimationStartedTime);
          } else {
            doNowOrAfterSomeTime(() => {
              setFormState('error');
              setErrorMessage('Something went wrong. Please reload the page and try again');
            }, loadingAnimationStartedTime);
          }
        })
        .catch(() => {
          doNowOrAfterSomeTime(() => {
            setFormState('error');
            setErrorMessage('Something went wrong. Please reload the page and try again');
          }, loadingAnimationStartedTime);
        });
    }
  };

  return (
    <motion.form
      className={clsx('xl:!w-auto xl:!opacity-100', className, sizeClassNames[size].form)}
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: `100%` }}
      transition={{
        opacity: {
          duration: 0.5,
          ease: 'linear',
        },
        width: {
          duration: 2,
          ease: [0, 0.35, 0.35, 1],
        },
      }}
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        className={clsx(
          'remove-autocomplete-styles relative z-20 block w-full rounded-full border-primary-3 bg-black pr-[218px] font-semibold leading-none text-white placeholder-gray-5 outline-none transition-colors duration-200 placeholder:font-normal xl:pr-[150px] xl:placeholder:text-base',
          errorMessage && 'border-secondary-1',
          sizeClassNames[size].input
        )}
        name="email"
        type="email"
        placeholder="Your email address..."
        autoComplete="email"
        value={email}
        readOnly={formState !== 'default'}
        onChange={handleInputChange}
      />

      <RiveComponent className="pointer-events-none absolute -top-8 left-1/2 z-10 w-[120%] -translate-x-1/2 [&>*]:!min-h-[360px]" />

      {/* Error message */}
      <AnimatePresence>
        {errorMessage && (
          <motion.span
            className="t-base absolute left-1/2 -bottom-5 z-10 w-full translate-y-full -translate-x-1/2 text-center font-semibold !leading-snug text-secondary-1 xl:-bottom-4"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={appearAndExitAnimationVariants}
          >
            {errorMessage}
          </motion.span>
        )}
      </AnimatePresence>

      {/* Button */}
      <AnimatePresence>
        {formState === 'default' && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={appearAndExitAnimationVariants}
          >
            <Button
              className="absolute top-1/2 right-[7px] z-20 -translate-y-1/2"
              size="sm"
              type="submit"
              theme="quaternary"
              disabled={formState !== 'default'}
            >
              <span className="">{submitButtonText}</span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading state */}
      <AnimatePresence>
        {formState === 'loading' && (
          <motion.div
            className={clsx(
              'absolute top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full bg-black',
              sizeClassNames[size].loading
            )}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={appearAndExitAnimationVariants}
            aria-hidden
          >
            <div className="h-[48px] w-[48px] rounded-full border-[3px] border-gray-2 2xl:h-[40px] 2xl:w-[40px]" />
            <svg
              className="absolute top-1/2 left-1/2 h-[48px] w-[48px] 2xl:h-[40px] 2xl:w-[40px]"
              width="58"
              height="58"
              viewBox="0 0 58 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ transform: 'scale(1, -1) rotate(-90deg) translate(-50%, -50%)' }}
            >
              <motion.path
                d="M3 29C3 43.3594 14.6406 55 29 55C43.3594 55 55 43.3594 55 29C55 14.6406 43.3594 3 29 3C14.6406 3 3 14.6406 3 29Z"
                strokeLinecap="round"
                stroke="#00e699"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1, transition: { duration: 2, delay: 0.2 } }}
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success state */}
      <AnimatePresence>
        {(formState === 'success' || formState === 'error') && (
          <motion.div
            className={clsx('absolute top-1/2 z-20 -translate-y-1/2', sizeClassNames[size].success)}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={appearAndExitAnimationVariants}
            aria-hidden
          >
            {formState === 'success' && (
              <CheckIcon className={clsx(sizeClassNames[size].stateIcon)} />
            )}
            {formState === 'error' && (
              <ErrorIcon className={clsx(sizeClassNames[size].stateIcon)} />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  );
};

SubscriptionForm.propTypes = {
  className: PropTypes.string,
  formId: PropTypes.string.isRequired,
  successText: PropTypes.string,
  submitButtonText: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md']),
  localStorageKey: PropTypes.string.isRequired,
  onSuccess: PropTypes.func,
};

export default SubscriptionForm;
