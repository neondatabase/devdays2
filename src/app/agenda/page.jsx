import Button from 'components/shared/button';
import ArrowIcon from 'icons/arrow-left.inline.svg';

const agendaData = [
  {
    title: 'Keynote',
    author: 'Nikita Shamgunov',
  },
  {
    title: 'Deep dive into the Neon storage engine GetPage@LSN',
    author: 'Heikki Linnakangas',
  },
  {
    title: 'Building an AI-powered ChatBot using Vercel, OpenAI, and Postgres ',
    author: 'Raouf Chebri',
  },
  {
    title: 'Scaling Serverless Postgre: How we implement Autoscaling',
    author: 'Em Sharnoff',
  },
  {
    title: 'Optimizing Performance in a Serverless PostgreSQL Database',
    author: 'Konstantin Knizhnik & Matthias Van De Meent',
  },
  {
    title: 'Understand your storage cost',
    author: 'Anastasia Lubennikova',
  },
  {
    title: 'Quicker serverless Postgres connections',
    author: 'George MacKerron',
  },
  {
    title: 'Developer workflows with Vercel and GitHub Actions',
    author: 'Mahmoud Abdelwahab',
  },
];

const GenerateTicketPage = () => (
  <div className="relative mx-auto grid max-w-[1760px] flex-grow grid-cols-12 gap-10 2xl:px-14 xl:grid-cols-1 xl:gap-0 xl:px-11 xl:py-11 lg:px-8 lg:pt-2 lg:pb-9 md:px-4">
    <div className="col-span-4 col-start-2 -mr-10 self-center 2xl:col-start-1 xl:col-span-full xl:mr-0 xl:self-end xl:text-center xl:!opacity-100">
      <span className="inline-block rounded-[50px] bg-secondary-2 py-1 px-3 align-top text-sm font-semibold uppercase leading-snug tracking-[-0.02em] text-black lg:mt-0 lg:text-xs">
        March 29, 2023
      </span>
      <h1 className="mt-4 text-[96px] font-semibold leading-none tracking-tighter text-white 2xl:text-8xl xl:mt-3 xl:text-center xl:text-[78px] xl:tracking-[-0.05em] lg:mt-3 lg:text-[58px] md:text-[52px]">
        Join Neon Live and listen to our speakers
      </h1>
      <p className="mt-5 font-mono text-xl font-light leading-snug tracking-tighter text-white 2xl:text-lg xl:mt-4 lg:text-base">
        Join us on <time dateTime="2023-03-29 09:00">March 29th, 9 a.m. PT</time> to learn more
        about latest of Serverless Postgres
      </p>
      <Button className="mt-3 lg:mt-2" size="md" theme="text" href="/">
        <ArrowIcon className="mr-2" aria-hidden />
        Back to the registration
      </Button>
    </div>
    <div className="col-span-5 col-start-7 self-center 2xl:col-span-7 2xl:col-start-6 xl:col-span-full xl:!transform-none xl:self-start xl:!opacity-100">
      <ul className="columns-2 gap-20 xl:mt-20 xl:gap-32 xl:px-20 lg:mt-[3.25rem] lg:gap-24 lg:px-11 sm:mt-10 sm:columns-1 sm:px-0">
        {agendaData.map((item, index) => {
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
);

export default GenerateTicketPage;
