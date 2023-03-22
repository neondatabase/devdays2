import Layout from 'components/shared/layout';

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

const LivePage = () => (
  <Layout isFooterShow={false} isHeaderWithBorder>
    <div className="relative grid flex-grow grid-cols-[1fr_320px]">
      <div className="">
        <h1 className="sr-only">Live translation</h1>
      </div>
      <div className="relative max-h-[calc(100vh-71px)] overflow-y-auto bg-gray-0 px-4 py-5">
        <h2 className="text-2xl font-medium leading-dense tracking-tighter text-white lg:text-xl">
          Schedule
        </h2>
        <ul className="mt-4 flex flex-col gap-8">
          {agendaData.map((item, index) => {
            const { title, author } = item;
            return (
              <li key={index} className="">
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

export default LivePage;
