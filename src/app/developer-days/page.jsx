'use client';

import { useRouter } from 'next/navigation';

import EmailRegistrationStep from 'components/pages/developer-days/email-registration-step';
import Container from 'components/shared/container';

// @TODO:
// deal with router: to and from tickets pages
const DeveloperDays2Page = () => {
  const router = useRouter();

  const handleSubmitSuccess = () => {
    router.push('/developer-days/generate-ticket');
  };

  return (
    <Container className="relative grid h-full grid-cols-12 gap-10" size="lg">
      <EmailRegistrationStep onSuccessCallback={handleSubmitSuccess} />
    </Container>
  );
};

export default DeveloperDays2Page;
