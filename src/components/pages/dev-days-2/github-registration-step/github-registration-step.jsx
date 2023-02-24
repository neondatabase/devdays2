import Image from 'next/image';
import { signIn } from 'next-auth/react';

import Button from 'components/shared/button';
import CursorTrackingWrapper from 'components/shared/cursor-tracking-wrapper';
import GithubIcon from 'components/shared/header/images/header-github.inline.svg';
import LuminousBack from 'components/shared/subscription-form/icons/luminous-back.inline.svg';
import DesktopBlankTicketIllustration from 'images/developer-days-2/blank-ticket-desktop.svg';
import MobileBlankTicketIllustration from 'images/developer-days-2/blank-ticket-mobile.svg';

const GithubRegistrationStep = () => (
  <>
    <div className="w-6/12 xl:w-1/2 lg:flex lg:w-full lg:flex-col lg:items-center">
      <h2 className="text-[96px] font-semibold leading-none tracking-tighter text-white 2xl:text-7xl xl:text-6xl lg:text-center lg:text-[78px] md:text-[58px] sm:text-[52px]">
        You’re In. <br className="lg:hidden sm:block" />
        Make it Unique.
      </h2>
      <p className="mt-4 font-mono text-xl font-light leading-tight tracking-tighter text-white lg:mt-6 lg:text-center lg:text-lg md:text-base">
        Generate a unique ticket image with your GitHub profile.
      </p>
      <div className="mt-12 flex items-center lg:mt-10 lg:flex-col sm:mt-6">
        <div className="relative">
          <Button
            className="relative z-20 border-primary-4 !bg-primary-4 pl-[4.25rem] !text-xl tracking-tighter !text-black hover:bg-[#00e5bf] xl:pl-[4.25rem] md:pl-[4.25rem]"
            size="md"
            theme="tertiary"
            rel="noopener noreferrer"
            target="_blank"
            onClick={() => signIn('github')}
          >
            <GithubIcon
              className="absolute top-1/2 left-4 -translate-y-1/2 text-black"
              width={40}
              height={40}
              aria-hidden="true"
            />
            <span>Generate with GitHub</span>
          </Button>
          <LuminousBack
            className="pointer-events-none absolute -top-2 left-1/2 z-10 h-[200%] w-[130%] -translate-x-1/2 xs:-top-4 xs:w-[120%]"
            aria-hidden="true"
          />
        </div>
        <span className="relative z-10 ml-4 max-w-[130px] text-sm font-light leading-snug text-gray-8 lg:ml-0 lg:mt-2 lg:max-w-full">
          Only public data is going to be used.
        </span>
      </div>
    </div>
    <div className="w-7/12 xl:w-1/2 lg:my-4 lg:w-[95%]">
      <CursorTrackingWrapper>
        <Image
          className="mx-auto sm:hidden"
          width={776}
          height={380}
          src={DesktopBlankTicketIllustration}
          alt="Blank ticket desktop illustration"
        />
      </CursorTrackingWrapper>
      <Image
        className="mx-auto hidden min-h-[736px] sm:block"
        width={346}
        height={702}
        src={MobileBlankTicketIllustration}
        alt="Blank ticket mobile illustration"
      />
    </div>
  </>
);

export default GithubRegistrationStep;
