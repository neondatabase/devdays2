'use client';

import Image from 'next/image';
import PropTypes from 'prop-types';

import DynamicTicket from 'components/pages/developer-days/dynamic-ticket';
import Button from 'components/shared/button';

import illustration from './images/illustration.png';

const Hero = ({ isTicketPage = false }) => (
  <div className="relative mx-auto grid max-w-[1760px] flex-grow grid-cols-12 gap-10 py-20 2xl:px-14 xl:h-[-webkit-fill-available] xl:grid-cols-1 xl:px-11 xl:py-11 lg:gap-y-8 lg:px-8 lg:py-9 md:gap-y-7 md:px-4 md:pt-5 md:pb-20">
    <div className="col-span-4 col-start-2 self-center 2xl:col-start-1 xl:col-span-full xl:self-end xl:text-center">
      <h1 className="text-[62px] font-semibold leading-none tracking-[-0.05em] text-white xl:mx-auto xl:text-center md:text-[52px]">
        Ooops!
        <br /> {isTicketPage ? 'Ticket' : 'Page'} not found...
      </h1>
      <p className="mt-5 font-mono text-[1.15rem] font-light leading-tight tracking-tight text-white 1xl:max-w-[420px] xl:mx-auto xl:max-w-xl xl:text-center xl:text-lg xl:leading-[1.375] xl:tracking-tighter lg:mt-4 lg:text-base">
        {isTicketPage
          ? "Sorry, the ticket you are looking for doesn't exist."
          : 'Sorry, the page you are looking for doesn’t exist.'}
      </p>
      <Button className="mt-11" size="md" theme="primary" href="/" isAnimated>
        {isTicketPage ? 'Grab yours' : 'Back to home'}
      </Button>
    </div>
    <div className="col-span-6 col-start-7 self-center 2xl:col-start-6 1xl:-ml-10 xl:col-span-full xl:ml-0 xl:mr-0 xl:self-start">
      {isTicketPage ? (
        <DynamicTicket
          userData={{
            id: 0,
            name: 'Your Name',
            image: '',
            login: 'github-account',
            colorSchema: '0',
          }}
          isBlankTicket
        />
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
