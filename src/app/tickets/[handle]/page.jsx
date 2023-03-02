import DynamicTicket from 'components/pages/dynamic-ticket';
import NextLink from 'next/link';
import { notFound } from 'next/navigation';

import prisma from 'utils/prisma';

const TicketPage = async ({ params }) => {
  // eslint-disable-next-line no-use-before-define
  const userData = await getTicketData(params.handle);

  if (!userData) return notFound();

  return (
    <div className="relative mx-auto grid h-full max-w-[1760px] grid-cols-12 gap-10 xl:h-auto xl:flex-grow xl:grid-cols-1 xl:gap-0 xl:px-11 xl:py-11 lg:py-7 md:px-8 md:pt-5 md:pb-20 sm:px-4">
      <div className="col-span-5 col-start-2 mr-10 self-center 2xl:col-span-4 2xl:col-start-2 2xl:mr-0 xl:col-span-full xl:self-end xl:text-center">
        <h1 className="pointer-events-none relative z-50 text-[96px] font-semibold leading-none tracking-tighter text-white 2xl:text-[78px] 2xl:tracking-[-0.05em] lg:text-[58px] md:text-[52px]">
          {userData.name}&apos;s <br className="hidden md:block" />
          Ticket
        </h1>
        <p className="pointer-events-none relative z-50 mt-5 font-mono text-xl font-light leading-tight tracking-tight text-white xl:text-lg xl:leading-[1.375] xl:tracking-tighter lg:mt-4 lg:text-base">
          Join {userData.name.split(' ')[0]} at Neon Developer Days on{' '}
          <time dateTime="2023-03-28 09:00">March 28th, 9 a.m. PT</time>
        </p>
        <NextLink
          className="t-2xl mt-11 inline-flex items-center justify-center self-start whitespace-nowrap rounded-full bg-primary-4 py-5 px-11 text-center font-bold !leading-none text-black outline-none transition-colors duration-200 hover:bg-[#00e5bf] 2xl:py-[20px] xl:px-9 lg:mt-8 md:py-5 md:px-8 sm:w-full"
          href="/"
          rel="noopener noreferrer"
        >
          <span>Register now</span>
        </NextLink>
      </div>
      <div className="col-span-6 col-start-7 -ml-10 self-center 2xl:col-start-6 2xl:ml-0 xl:col-span-full xl:self-start">
        <DynamicTicket userData={userData} />
      </div>
    </div>
  );
};

export default TicketPage;

async function getTicketData(handle) {
  let userData = null;

  if (handle) {
    try {
      userData = await prisma.user.findFirstOrThrow({
        where: {
          login: handle,
        },
        select: {
          name: true,
          email: true,
          login: true,
          colorSchema: true,
          image: true,
          id: true,
        },
      });
    } catch (err) {
      console.log('err', err);
      userData = null;
    }
  }

  return userData;
}

export async function generateStaticParams() {
  const users = await prisma.user.findMany();

  return users.map((user) => ({
    handle: user.login,
  }));
}

export const revalidate = 60;
