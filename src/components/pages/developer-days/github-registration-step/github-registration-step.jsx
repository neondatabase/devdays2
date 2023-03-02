'use client';

import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { Alignment, Fit, Layout, useRive } from 'rive-react';

import Button from 'components/shared/button';
import CursorTrackingWrapper from 'components/shared/cursor-tracking-wrapper';
import GithubIcon from 'components/shared/header/images/header-github.inline.svg';
import DesktopBlankTicketIllustration from 'images/developer-days/blank-ticket-desktop.svg';
import MobileBlankTicketIllustration from 'images/developer-days/blank-ticket-mobile.svg';

const GithubRegistrationStep = () => {
  const { RiveComponent } = useRive({
    src: '/developer-days/animations/input-lines.riv',
    autoplay: true,
    stateMachines: 'State Machine 1',
    layout: new Layout({
      fit: Fit.FitWidth,
      alignment: Alignment.TopCenter,
    }),
  });

  return (
    <>
      <div className="col-span-5 col-start-2 self-center lg:col-span-full lg:text-center">
        <h2 className="text-[96px] font-semibold leading-none tracking-tighter text-white 2xl:text-7xl xl:text-6xl lg:text-center lg:text-[78px] lg:tracking-[-0.05em] md:text-[58px] sm:text-[52px]">
          You’re invited. <br className="" />
          Grab the ticket.
        </h2>
        <p className="mt-5 font-mono text-xl font-light leading-tight tracking-tight text-white lg:mx-auto lg:max-w-md lg:text-center lg:text-lg lg:leading-[1.375] lg:tracking-tighter md:mt-4 md:text-base">
          Generate a unique ticket image with your GitHub profile and participate in Neon's giveaway
          right after the conference.
        </p>
        <div className="mt-11 flex items-center lg:flex-col md:mt-9 sm:mt-6">
          <div className="relative">
            <Button
              className="relative z-20 border-primary-4 !bg-primary-4 !pr-8 pl-[4.1rem] !text-xl tracking-[-0.02em] !text-black hover:bg-[#00e5bf] xl:pl-[4.25rem] md:pl-[4.25rem]"
              size="md"
              theme="primary"
              rel="noopener noreferrer"
              target="_blank"
              onClick={() => signIn('github')}
            >
              <GithubIcon
                className="absolute top-1/2 left-3 -translate-y-1/2 text-black"
                width={40}
                height={40}
                aria-hidden="true"
              />
              <span>Generate with GitHub</span>
            </Button>
            <RiveComponent className="pointer-events-none absolute -top-4 left-1/2 z-10 w-[140%] -translate-x-1/2 [&>*]:!min-h-[480px]" />
          </div>
          <span className="relative z-10 ml-5 max-w-[140px] text-sm font-light leading-[1.375] tracking-[0.04em] text-gray-5 lg:ml-0 lg:mt-3 lg:max-w-full">
            Only public data <br className="xl:hidden" /> is going to be used.
          </span>
        </div>
      </div>
      <div className="col-span-6 col-start-7 -ml-10 self-center 2xl:col-span-5 2xl:-mr-10 2xl:ml-0 lg:col-span-full lg:mr-0">
        <CursorTrackingWrapper>
          <Image
            className="mx-auto lg:max-w-[95%] sm:hidden"
            width={792}
            height={390}
            src={DesktopBlankTicketIllustration}
            alt="Blank ticket desktop illustration"
          />
        </CursorTrackingWrapper>
        <Image
          className="remove-image-loading-visual mx-auto hidden sm:block"
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
