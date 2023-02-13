import Image from 'next/image';
import PropTypes from 'prop-types';

import SubscriptionForm from 'components/shared/subscription-form';
import { HUBSPOT_DEVELOPER_DAYS_2_FORM_ID } from 'constants/forms';
import ElephantIllustration from 'images/ticket-hero-elephant.png';

const EmailRegistrationStep = ({ onSuccessCallback }) => (
  <>
    <div className="w-5/12 xl:w-1/2 lg:w-2/3 sm:w-full">
      <span className="rounded-[50px] bg-secondary-2 py-1 px-3 text-sm font-semibold uppercase leading-snug dark:text-black sm:mt-0">
        Spring 2023
      </span>
      <h1 className="mt-4 text-[120px] font-semibold leading-none tracking-tighter text-white 2xl:text-8xl xl:text-7xl md:text-6xl">
        Neon Dev <br /> Days 2023
      </h1>
      <p className="mt-4 font-mono text-xl font-light tracking-tighter text-white">
        Join us at <time dateTime="2023-03-26 10:30">10:30AM PT, March 26</time> to hear more about
        latest updates from our dev team.
      </p>
      <SubscriptionForm
        className="mt-12"
        successText="Thanks for registering!"
        submitButtonText="Register"
        size="sm"
        localStorageKey="submittedEmailDeveloperDays2Form"
        formId={HUBSPOT_DEVELOPER_DAYS_2_FORM_ID}
        onSuccess={onSuccessCallback}
      />
    </div>
    <div className="w-7/12 xl:w-1/2 lg:mt-2 lg:mb-10 lg:w-2/3 sm:w-full">
      <Image src={ElephantIllustration} alt="Elephant illustration" />
    </div>
  </>
);

EmailRegistrationStep.propTypes = {
  onSuccessCallback: PropTypes.func,
};

export default EmailRegistrationStep;
