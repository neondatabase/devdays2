'use client';

import { useRouter } from 'next/navigation';

import EmailRegistrationStep from 'components/pages/developer-days/email-registration-step';

// @TODO:
// deal with router: to and from tickets pages
const DeveloperDays2Page = () => {
  const router = useRouter();

  const handleSubmitSuccess = () => {
    router.push('/developer-days/generate-ticket');
  };

  return (
    <div className="relative mx-auto grid h-full max-w-[1760px] grid-cols-12 gap-10">
      <EmailRegistrationStep onSuccessCallback={handleSubmitSuccess} />
    </div>
  );
};

export default DeveloperDays2Page;
