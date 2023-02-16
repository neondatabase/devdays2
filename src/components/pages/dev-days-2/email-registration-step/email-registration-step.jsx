import Image from 'next/image';
import PropTypes from 'prop-types';

import SubscriptionForm from 'components/shared/subscription-form';
import { HUBSPOT_DEVELOPER_DAYS_2_FORM_ID } from 'constants/forms';
import ElephantIllustration from 'images/ticket-hero-elephant.png';

const EmailRegistrationStep = ({ onSuccessCallback }) => (
  <>
    <div className="w-5/12 xl:w-1/2 lg:flex lg:w-full lg:flex-col lg:items-center">
      <span className="rounded-[50px] bg-secondary-2 py-1 px-3 text-sm font-semibold uppercase leading-snug dark:text-black sm:mt-0">
        Spring 2023
      </span>
      <h1 className="mt-4 text-[120px] font-semibold leading-none tracking-tighter text-white 2xl:text-8xl xl:text-7xl lg:text-center lg:text-[78px] md:text-[58px] sm:max-w-[80%] sm:text-[52px]">
        Neon Dev <br className="lg:hidden" /> Days 2023
      </h1>
      <p className="mt-4 font-mono text-xl font-light tracking-tighter text-white lg:max-w-md lg:text-center lg:text-lg md:text-base sm:max-w-[80%]">
        Join us at <time dateTime="2023-03-26 10:30">10:30AM PT, March 26</time> to hear more about
        latest updates from our dev team.
      </p>
      <SubscriptionForm
        className="mt-12 lg:mt-8"
        successText="Thanks for registering!"
        submitButtonText="Register"
        size="sm"
        localStorageKey="submittedEmailDeveloperDays2Form"
        formId={HUBSPOT_DEVELOPER_DAYS_2_FORM_ID}
        onSuccess={onSuccessCallback}
      />
    </div>
    <div className="w-7/12 xl:w-1/2 lg:my-4 lg:w-full">
      <Image src={ElephantIllustration} alt="Elephant illustration" />
    </div>
  </>
);

EmailRegistrationStep.propTypes = {
  onSuccessCallback: PropTypes.func,
};

export default EmailRegistrationStep;
