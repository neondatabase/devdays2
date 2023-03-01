'use client';

import Image from 'next/image';
import NextLink from 'next/link';
import PropTypes from 'prop-types';

import Container from 'components/shared/container';
import CursorTrackingWrapper from 'components/shared/cursor-tracking-wrapper';
import DesktopBlankTicketIllustration from 'images/developer-days/blank-ticket-desktop.svg';
import MobileBlankTicketIllustration from 'images/developer-days/blank-ticket-mobile.svg';

import illustration from './images/illustration.png';

const Hero = ({ isTicketPage = false }) => (
    <section className="min-h-[inherit] text-white md:py-14 xs:pt-10">
      <Container
        className="grid min-h-[inherit] grid-cols-12 items-start gap-x-8 md:gap-x-0 md:gap-y-4"
        size="md"
      >
        <div className="col-start-2 col-end-6 flex flex-col self-center 2xl:col-start-1 md:col-span-full">
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
            href={isTicketPage ? '/developer-days' : '/'}
          >
            {isTicketPage ? 'Register' : 'Back to home'}
          </NextLink>
        </div>

        <div className="col-start-6 col-end-12 self-center 2xl:col-end-13 md:col-span-full">
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
              className="w-full md:mx-auto md:max-w-xl"
              width={860}
              height={862}
              src={illustration}
              alt="Illustration"
              loading="eager"
              quality={75}
            />
          )}
        </div>
      </Container>
    </section>
  );

Hero.propTypes = {
  isTicketPage: PropTypes.bool,
};

export default Hero;
