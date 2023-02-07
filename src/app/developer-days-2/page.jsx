'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Github from 'components/shared/header/images/header-github.inline.svg';
import Heading from 'components/shared/heading';
import SubscriptionForm from 'components/shared/subscription-form';
import Illustration from 'images/hero-elephant.png';

const FUNNEL_STATES = {
  INITIAL: 'initial',
  TICKET_CTA: 'ticket_cta',
};

const TicketCTA = ({ handleGitBtnClick }) => (
  <Container
    className="relative z-10 flex min-h-[100vh] !max-w-[521px] flex-col items-start justify-center space-y-4"
    size="sm"
  >
    <Heading className="text-center leading-snug tracking-tighter" tag="h2" size="sm">
      You're making it unique
    </Heading>
    <p>Generate a unique ticket image with your GitHub profile. Only public info will be used</p>
    <Button
      className="relative py-[11px] pl-11 dark:border-white dark:bg-black dark:text-white dark:hover:border-primary-2 xl:hidden"
      size="xs"
      theme="tertiary"
      rel="noopener noreferrer"
      target="_blank"
      onClick={handleGitBtnClick}
    >
      <Github
        className={clsx('absolute top-1/2 left-1.5 -translate-y-1/2 dark:text-white', 'text-white')}
      />
      <span>Generate with GitHub</span>
    </Button>
  </Container>
);

const Initial = ({ onSuccessCallback }) => (
  <>
    <div className="w-[580px] xl:w-1/2 lg:w-2/3 md:w-full">
      <h2 className="text-[120px] font-semibold leading-none tracking-tighter text-black dark:text-white xl:text-8xl md:text-6xl">
        Neon Dev Days 2023
      </h2>
      <p className="mt-8 font-mono text-xl font-light tracking-tighter text-black dark:text-white">
        Join us at 10:30AM PT, March 26 to hear more about latest updates from our dev team.
      </p>
      <SubscriptionForm
        className="mt-8"
        successText="Thanks for registering!"
        submitButtonText="Register"
        theme="transparent"
        size="sm"
        localStorageKey="submittedEmailDeveloperDays2Form"
        onSuccess={onSuccessCallback}
      />
    </div>
    <div className="w-7/12 xl:w-1/2 lg:my-4 md:w-full">
      <Image src={Illustration} alt="Elephant illustration" />
    </div>
  </>
);

// @TODO:
// deal with router: to and from tickets pages
const DeveloperDays2Page = () => {
  const [funnelState, setFunnelState] = useState(FUNNEL_STATES.INITIAL);
  const { data } = useSession();
  const router = useRouter();

  // if the session is active, move user to his ticket
  useEffect(() => {
    if (router && data?.githubHandle) {
      router.push(`/developer-days-2/tickets/${data.githubHandle}`);
    }
  }, [router, data?.githubHandle]);

  const handleSubmitSuccess = () => {
    setFunnelState(FUNNEL_STATES.TICKET_CTA);
  };

  const handleGitAuth = () => {
    signIn();
  };

  let content = null;
  switch (funnelState) {
    case FUNNEL_STATES.TICKET_CTA:
      content = <TicketCTA handleGitBtnClick={handleGitAuth} />;
      break;
    case FUNNEL_STATES.INITIAL:
    default:
      content = <Initial onSuccessCallback={handleSubmitSuccess} />;
  }

  return (
    <Container
      className="relative flex min-h-[100vh] items-center gap-4 py-4 lg:flex-wrap lg:justify-center lg:gap-8"
      size="lg"
    >
      {content}
    </Container>
  );
};

export default DeveloperDays2Page;

TicketCTA.propTypes = {
  handleGitBtnClick: PropTypes.func,
};

Initial.propTypes = {
  onSuccessCallback: PropTypes.func,
};
