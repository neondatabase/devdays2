import EmailRegistrationStep from 'components/pages/developer-days/email-registration-step';
import Layout from 'components/shared/layout';

const DeveloperDays2Page = () => (
  <Layout>
    <div className="relative mx-auto grid max-w-[1760px] flex-grow grid-cols-12 gap-10 2xl:px-14 xl:grid-cols-1 xl:gap-0 xl:px-11 xl:py-11 lg:px-8 lg:py-9 md:px-4 md:py-4">
      <EmailRegistrationStep />
    </div>
  </Layout>
);

export default DeveloperDays2Page;
