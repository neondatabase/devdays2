'use client';

import DesktopBlankTicketIllustration from 'images/blank-ticket-desktop.svg';
import MobileBlankTicketIllustration from 'images/blank-ticket-mobile.svg';
import Image from 'next/image';
import NextLink from 'next/link';
import PropTypes from 'prop-types';

import CursorTrackingWrapper from 'components/shared/cursor-tracking-wrapper';

import illustration from './images/illustration.png';

const Hero = ({ isTicketPage = false }) => (
  <div className="relative mx-auto grid h-full max-w-[1760px] flex-grow grid-cols-12 gap-10 text-white xl:h-auto xl:flex-grow xl:grid-cols-1 xl:px-11 xl:py-11 lg:gap-y-8 lg:px-8 lg:py-9 md:gap-y-7 md:px-4 md:pt-5 md:pb-20">
    <div className="col-span-4 col-start-2 self-center xl:col-span-full xl:self-end xl:text-center">
      <h1 className="text-[58px] font-bold leading-none xl:text-5xl xl:leading-none md:text-4xl">
        Ooops!
        <br /> {isTicketPage ? 'Ticket' : 'Page'} not found...
      </h1>
      <p className="t-xl mt-7 lg:mt-8">
        {isTicketPage
          ? "Sorry, the ticket you are looking for doesn't exist."
          : 'Sorry, the page you are looking for doesn’t exist.'}
      </p>
      <NextLink
        className="t-2xl mt-11 inline-flex items-center justify-center self-start whitespace-nowrap rounded-full bg-primary-1 py-5 px-11 text-center font-bold !leading-none text-black outline-none transition-colors duration-200 hover:bg-[#00e5bf] 2xl:py-[20px] xl:px-9 lg:mt-8 md:py-5 md:px-8 sm:w-full"
        href={isTicketPage ? '' : '/'}
      >
        {isTicketPage ? 'Register' : 'Back to home'}
      </NextLink>
    </div>
    <div className="col-span-7 col-start-6 self-center xl:col-span-full xl:self-start">
      {isTicketPage ? (
        <>
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
            className="mx-auto hidden sm:block"
            width={346}
            height={702}
            src={MobileBlankTicketIllustration}
            alt="Blank ticket mobile illustration"
          />
        </>
      ) : (
        <Image
          className="w-[75%] xl:mx-auto sm:w-full"
          width={860}
          height={862}
          src={illustration}
          alt="Illustration"
          loading="eager"
          quality={75}
        />
      )}
    </div>
  </div>
);

Hero.propTypes = {
  isTicketPage: PropTypes.bool,
};

export default Hero;
