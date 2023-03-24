import Layout from 'components/shared/layout';
import SubscriptionForm from 'components/shared/subscription-form';
import { DEV_DAYS_AGENDA } from 'constants/dev-days';
import { HUBSPOT_DEVELOPER_DAYS_2_FORM_ID } from 'constants/forms';

const AgendaPage = () => (
  <Layout>
    <div className="relative mx-auto grid max-w-[1760px] flex-grow grid-cols-12 gap-10 py-20 before:pointer-events-none before:absolute before:top-[71px] before:left-0 before:z-0 before:h-48 before:w-[765px] before:bg-agenda-top-dots before:bg-cover after:pointer-events-none after:absolute after:bottom-[3px] after:left-0 after:z-0 after:h-80 after:w-[765px] after:bg-agenda-bottom-dots after:bg-cover 2xl:px-14 xl:grid-cols-1 xl:gap-0 xl:py-11 xl:py-11 xl:px-11 xl:before:top-0 xl:before:w-full xl:before:bg-agenda-top-dots-medium xl:after:hidden lg:py-9 lg:px-8 lg:pt-2 lg:pb-9 lg:before:bg-agenda-top-dots-small md:px-4 sm:before:hidden">
      <div className="col-span-4 col-start-2 -mr-10 self-center 2xl:col-start-1 xl:col-span-full xl:mr-0 xl:self-end xl:text-center">
        <span className="inline-block rounded-[50px] bg-secondary-2 py-1 px-3 align-top text-sm font-semibold uppercase leading-snug tracking-[-0.02em] text-black lg:mt-0 lg:text-xs">
          March 2023
        </span>
        <h1 className="mt-4 text-[96px] font-semibold leading-none tracking-tighter text-white xl:mt-3 xl:text-center xl:text-[78px] xl:tracking-[-0.05em] lg:mt-3 lg:text-[58px] md:text-[52px]">
          Developer Days Agenda
        </h1>
        <p className="mt-5 font-mono text-xl font-light leading-snug tracking-tighter text-white 2xl:text-lg xl:mt-4 lg:text-base">
          Join us on <time dateTime="2023-03-29 09:00">March 29th, 9 a.m. PT</time> to learn more
          about latest of Serverless Postgres
        </p>
        <SubscriptionForm
          className="mt-12 xl:mx-auto xl:mt-10 lg:mt-8 md:mt-7"
          successText="Thanks for registering!"
          submitButtonText="Register"
          size="sm"
          localStorageKey="submittedEmailDeveloperDays2Form"
          formId={HUBSPOT_DEVELOPER_DAYS_2_FORM_ID}
        />
      </div>
      <div className="relative z-10 col-span-5 col-start-7 self-center 2xl:col-span-7 2xl:col-start-6 xl:col-span-full xl:!transform-none xl:self-start">
        <ul className="columns-2 gap-20 xl:mt-20 xl:gap-32 xl:px-20 lg:mt-[3.25rem] lg:gap-24 lg:px-11 sm:mt-10 sm:columns-1 sm:px-0">
          {DEV_DAYS_AGENDA.map((item, index) => {
            const { title, author } = item;

            return (
              <li key={index} className="mt-10 first:mt-0 lg:mt-8">
                <h3 className="text-2xl font-medium leading-dense tracking-tighter text-white lg:text-xl">
                  {title}
                </h3>
                <p className="mt-2 font-mono text-xl font-light leading-[1.25] tracking-tight text-gray-5 lg:text-base">
                  {author}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </Layout>
);

export default AgendaPage;
