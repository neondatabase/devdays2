'use client';

import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

import EmailStep from 'components/pages/dev-days-2/email-step';
import GithubStep from 'components/pages/dev-days-2/github-step';
import Container from 'components/shared/container';

const FUNNEL_STATES = {
  INITIAL: 'initial',
  TICKET_CTA: 'ticket_cta',
};

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
      content = <GithubStep handleGitBtnClick={handleGitAuth} />;
      break;
    case FUNNEL_STATES.INITIAL:
    default:
      content = <EmailStep onSuccessCallback={handleSubmitSuccess} />;
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
