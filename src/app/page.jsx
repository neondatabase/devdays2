'use client';

import { useRouter } from 'next/navigation';

import EmailRegistrationStep from 'components/pages/developer-days/email-registration-step';

// @TODO:
// deal with router: to and from tickets pages
const DeveloperDays2Page = () => {
  const router = useRouter();

  const handleSubmitSuccess = () => {
    router.push('/generate-ticket');
  };

  return (
    <div className="relative mx-auto grid h-full max-w-[1760px] grid-cols-12 gap-10 lg:grid-cols-1 lg:gap-0 lg:px-11 lg:py-11 md:px-8 md:py-9 sm:px-4 sm:py-5">
      <EmailRegistrationStep onSuccessCallback={handleSubmitSuccess} />
    </div>
  );
};

export default DeveloperDays2Page;
