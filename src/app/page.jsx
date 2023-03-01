'use client';

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

import EmailRegistrationStep from 'components/pages/developer-days/email-registration-step';
import GithubRegistrationStep from 'components/pages/developer-days/github-registration-step';
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
  const router = useRouter();

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
      return router.push(`/tickets/${data.githubHandle}`);
    }

    return (
      <Container
        className="relative -mt-12 flex min-h-[inherit] items-center gap-12 lg:mt-0 lg:flex-wrap lg:justify-center lg:gap-4"
        size="lg"
      >
        {content}
      </Container>
    );
  }

  return null;
};

export default DeveloperDays2Page;
