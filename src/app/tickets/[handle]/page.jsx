import { notFound } from 'next/navigation';

import DynamicTicket from 'components/pages/developer-days/dynamic-ticket';
import Button from 'components/shared/button';
import prisma from 'utils/prisma';

const TicketPage = async ({ params }) => {
  // eslint-disable-next-line no-use-before-define
  const userData = await getTicketData(params.handle);

  if (!userData) return notFound();

  const userName = userData.name || userData.login;

  return (
    <div className="relative mx-auto grid max-w-[1760px] flex-grow grid-cols-12 gap-10 py-20 2xl:px-14 xl:grid-cols-1 xl:gap-0 xl:px-11 xl:py-11 lg:py-7 md:px-8 md:pt-5 md:pb-20 sm:px-4">
      <div className="pointer-events-none relative z-10 col-span-5 col-start-2 self-center 2xl:col-start-1 xl:col-span-full xl:self-end xl:text-center">
        <h1 className="relative z-50 text-[58px] font-semibold leading-none tracking-[-0.05em] text-white 1xl:max-w-[420px] xl:mx-auto xl:max-w-[700px] md:max-w-[500px] md:text-[52px]">
          {userName}&apos;s <br className="hidden md:block" />
          Ticket
        </h1>
        <p className="relative z-50 mt-5 max-w-[610px] font-mono text-xl font-light leading-tight tracking-tight text-white 2xl:max-w-[500px] 1xl:max-w-[420px] xl:mx-auto xl:max-w-[700px] xl:text-lg xl:leading-[1.375] xl:tracking-tighter lg:mt-4 lg:text-base">
          Join {userName.split(' ')[0]} at Neon Developer Days on{' '}
          <time dateTime="2023-03-28 09:00">March 29th, 9 a.m. PT</time>
        </p>
        <Button className="pointer-events-auto mt-11" size="md" theme="primary" href="/" isAnimated>
          Register now
        </Button>
      </div>
      <div className="col-span-6 col-start-7 self-center 2xl:col-start-6 1xl:-ml-10 xl:col-span-full xl:ml-0 xl:self-start">
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
