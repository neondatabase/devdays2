'use client';

import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

import EmailRegistrationStep from 'components/pages/dev-days-2/email-registration-step';
import GithubRegistrationStep from 'components/pages/dev-days-2/github-registration-step';
import Container from 'components/shared/container';

const FUNNEL_STATES = {
  INITIAL: 'initial',
  TICKET_CTA: 'ticket_cta',
};

// @TODO:
// deal with router: to and from tickets pages
const DeveloperDays2Page = () => {
  const [funnelState, setFunnelState] = useState(FUNNEL_STATES.INITIAL);
  const { data, status } = useSession();

  const handleSubmitSuccess = () => {
    setFunnelState(FUNNEL_STATES.TICKET_CTA);
  };

  let content;
  switch (funnelState) {
    case FUNNEL_STATES.TICKET_CTA:
      content = <GithubRegistrationStep />;
      break;
    case FUNNEL_STATES.INITIAL:
    default:
      content = <EmailRegistrationStep onSuccessCallback={handleSubmitSuccess} />;
  }

  if (status !== 'loading') {
    if (status === 'authenticated' && data?.githubHandle) {
      return redirect(`/developer-days-2/tickets/${data.githubHandle}`);
    }

    return (
      <Container
        className="relative flex min-h-[100vh] items-center gap-12 py-4 lg:flex-wrap lg:justify-center lg:gap-0"
        size="lg"
      >
        {content}
      </Container>
    );
  }

  return null;
};

export default DeveloperDays2Page;
