'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

import Button from 'components/shared/button';
import CursorTrackingWrapper from 'components/shared/cursor-tracking-wrapper';
import GithubIcon from 'components/shared/header/images/header-github.inline.svg';
import LuminousBack from 'components/shared/subscription-form/icons/luminous-button-back.inline.svg';
import DesktopBlankTicketIllustration from 'images/developer-days/blank-ticket-desktop.svg';
import MobileBlankTicketIllustration from 'images/developer-days/blank-ticket-mobile.svg';

const appearAndExitAnimationVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const GithubRegistrationStep = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className="col-span-5 col-start-2 self-center xl:col-span-full xl:self-end xl:text-center">
        <h2 className="text-[96px] font-semibold leading-none tracking-tighter text-white 2xl:text-7xl xl:text-center xl:text-[78px] xl:tracking-[-0.05em] lg:text-[58px] md:text-[52px]">
          You’re invited. <br />
          Grab the ticket.
        </h2>
        <p className="mt-5 font-mono text-xl font-light leading-tight tracking-tight text-white xl:mx-auto xl:max-w-xl xl:text-center xl:text-lg xl:leading-[1.375] xl:tracking-tighter lg:mt-4 lg:text-base">
          Generate a unique ticket image with your GitHub profile and participate in Neon's giveaway
          right after the conference.
        </p>
        <div className="mt-11 flex items-center xl:mt-10 xl:flex-col lg:mt-8 md:mt-6">
          <div className="relative">
            <Button
              className="relative z-10"
              size="md"
              theme="primary"
              rel="noopener noreferrer"
              target="_blank"
              disabled={isLoading}
              onClick={() => {
                setIsLoading(true);
                signIn('github');
              }}
            >
              <AnimatePresence>
                {isLoading ? (
                  <motion.div
                    className="absolute top-1/2 left-3 z-20 flex -translate-y-1/2 items-center justify-center rounded-full bg-transparent"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={appearAndExitAnimationVariants}
                    aria-hidden
                  >
                    <div className="h-[40px] w-[40px] rounded-full" />
                    <svg
                      className="absolute top-1/2 left-1/2 h-[40px] w-[40px]"
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
                        stroke="black"
                        strokeWidth="5"
                        initial={{ pathLength: 0 }}
                        animate={{
                          pathLength: 1,
                          transition: { duration: 2, delay: 0.2, repeat: Infinity },
                        }}
                      />
                    </svg>
                  </motion.div>
                ) : (
                  <GithubIcon
                    className="absolute top-1/2 left-3 -translate-y-1/2 text-black"
                    width={40}
                    height={40}
                    aria-hidden="true"
                  />
                )}
              </AnimatePresence>
              <span>Generate with GitHub</span>
            </Button>
            <LuminousBack
              className="pointer-events-none absolute -top-12 left-1/2 -z-10 -translate-x-1/2"
              aria-hidden="true"
            />
          </div>
          <span className="relative z-10 ml-5 max-w-[140px] text-sm font-light leading-[1.375] tracking-[0.04em] text-gray-5 xl:mt-3 xl:ml-0 xl:max-w-full sm:mt-2">
            Only public data <br className="xl:hidden" /> is going to be used.
          </span>
        </div>
      </div>
      <div className="col-span-6 col-start-7 -ml-10 self-center 2xl:col-span-5 2xl:-mr-10 2xl:ml-0 xl:col-span-full xl:mr-0 xl:self-start">
        <CursorTrackingWrapper>
          <Image
            className="mx-auto xl:max-w-[95%] md:hidden"
            width={792}
            height={390}
            src={DesktopBlankTicketIllustration}
            alt="Blank ticket desktop illustration"
          />
        </CursorTrackingWrapper>
        <Image
          className="remove-image-loading-visual mx-auto hidden md:block"
          width={346}
          height={702}
          src={MobileBlankTicketIllustration}
          alt="Blank ticket mobile illustration"
        />
      </div>
    </>
  );
};

export default GithubRegistrationStep;
