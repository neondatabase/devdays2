'use client';

import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Github from 'components/shared/header/images/header-github.inline.svg';
import Heading from 'components/shared/heading';
import SubscriptionForm from 'components/shared/subscription-form';

const FUNNEL_STATES = {
  INITIAL: 'initial',
  TICKET_CTA: 'ticket_cta',
};

const TicketCTA = ({ handleGitBtnClick }) => (
  <Container
    className="relative z-10 flex min-h-[100vh] !max-w-[521px] flex-col items-start justify-center space-y-4"
    size="sm"
  >
    <Heading className="text-center leading-snug" tag="h2" size="sm">
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

const Initial = ({ onSuccess }) => (
  <Container
    className="relative z-10 flex min-h-[100vh] !max-w-[521px] flex-col items-center justify-center"
    size="sm"
  >
    <Heading className="text-center leading-snug" tag="h2" size="sm">
      Register for Neon Developer Days!
    </Heading>
    <SubscriptionForm
      className="mt-8"
      successText="Thanks for registering!"
      submitButtonText="Register"
      size="sm"
      localStorageKey="submittedEmailDeveloperDays2Form"
      onSuccess={onSuccess}
      // formId={HUBSPOT_DEVELOPER_DAYS_1_FORM_ID}
    />
  </Container>
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
      content = <Initial onSuccess={handleSubmitSuccess} />;
  }
  return <div className="relative overflow-hidden bg-black text-white">{content}</div>;
};

export default DeveloperDays2Page;

TicketCTA.propTypes = {
  handleGitBtnClick: PropTypes.func,
};

Initial.propTypes = {
  onSuccess: PropTypes.func,
};
