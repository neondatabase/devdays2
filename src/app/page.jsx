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
    <div className="relative mx-auto grid min-h-[865px] max-w-[1760px] flex-grow grid-cols-12 gap-10 2xl:px-14 xl:grid-cols-1 xl:gap-0 xl:px-11 xl:py-11 lg:px-8 lg:py-9 md:px-4 md:py-4">
      <EmailRegistrationStep onSuccessCallback={handleSubmitSuccess} />
    </div>
  );
};

export default DeveloperDays2Page;
