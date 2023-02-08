import Image from 'next/image';
import PropTypes from 'prop-types';

import SubscriptionForm from 'components/shared/subscription-form';
import { HUBSPOT_DEVELOPER_DAYS_2_FORM_ID } from 'constants/forms';
import ElephantIllustration from 'images/ticket-hero-elephant.png';

const EmailRegistrationStep = ({ onSuccessCallback }) => (
  <>
    <div className="w-[580px] xl:w-1/2 lg:w-2/3 md:w-full">
      <h2 className="text-[120px] font-semibold leading-none tracking-tighter text-black dark:text-white xl:text-8xl md:text-6xl">
        Neon Dev Days 2023
      </h2>
      <p className="mt-4 font-mono text-xl font-light tracking-tighter text-black dark:text-white">
        Join us at 10:30AM PT, March 26 to hear more about latest updates from our dev team.
      </p>
      <SubscriptionForm
        className="mt-12"
        successText="Thanks for registering!"
        submitButtonText="Register"
        theme="transparent"
        size="sm"
        localStorageKey="submittedEmailDeveloperDays2Form"
        formId={HUBSPOT_DEVELOPER_DAYS_2_FORM_ID}
        onSuccess={onSuccessCallback}
      />
    </div>
    <div className="w-7/12 xl:w-1/2 lg:my-4 md:w-full">
      <Image src={ElephantIllustration} alt="Elephant illustration" />
    </div>
  </>
);

EmailRegistrationStep.propTypes = {
  onSuccessCallback: PropTypes.func,
};

export default EmailRegistrationStep;
