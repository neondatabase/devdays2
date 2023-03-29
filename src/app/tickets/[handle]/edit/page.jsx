import { notFound } from 'next/navigation';

import DynamicTicket from 'components/pages/developer-days/dynamic-ticket';
import Button from 'components/shared/button';
import Layout from 'components/shared/layout';
import LiveIcon from 'icons/live.inline.svg';
import prisma from 'utils/prisma';

const TicketEditPage = async ({ params }) => {
  // eslint-disable-next-line no-use-before-define
  const userData = await getTicketData(params.handle);

  if (!userData) return notFound();

  const userName = userData.name || userData.login;

  return (
    <Layout>
      <div className="relative mx-auto grid max-w-[1760px] flex-grow grid-cols-12 gap-10 py-20 2xl:px-14 xl:grid-cols-1 xl:gap-0 xl:px-11 xl:py-11 lg:py-7 md:px-8 md:pt-5 md:pb-20 sm:px-4">
        <div className="pointer-events-none relative z-10 col-span-4 col-start-2 self-center 2xl:col-start-1 xl:col-span-full xl:self-end xl:text-center">
          <h1 className="relative z-50 text-[62px] font-semibold leading-none tracking-[-0.05em] text-white 1xl:max-w-[420px] xl:mx-auto xl:max-w-[700px] md:max-w-[500px] md:text-[52px]">
            {userName}&apos;s <br className="hidden md:block" />
            Ticket
          </h1>
          <p className="relative z-50 mt-5 max-w-[610px] font-mono text-[1.15rem] font-light leading-tight tracking-tight text-white 2xl:max-w-[500px] 1xl:max-w-[420px] xl:mx-auto xl:max-w-[700px] xl:text-lg xl:leading-[1.375] xl:tracking-tighter lg:mt-4 lg:text-base">
            Choose the ticket color and gather a watch party for the upcoming Neon Developer Days!
            See you on <time dateTime="2023-03-29T09:00">March 29th, 9 a.m. PT</time>
          </p>
          <Button
            className="social-share pointer-events-auto relative z-50 mt-11 flex items-center gap-4 py-[18px] px-6 pr-7 text-white shadow-social transition duration-200 lg:px-8 xs:py-2 xs:px-3"
            size="sm"
            theme="code-copy"
            href="/stage"
          >
            <LiveIcon className="h-[32px] w-fit shrink-0" aria-hidden />
            <span className="min-w-[82px] font-sans text-xl font-semibold leading-none tracking-[-0.02em] text-white">
              Neon Live
            </span>
          </Button>
        </div>
        <div className="col-span-6 col-start-7 self-center 2xl:col-start-6 1xl:-ml-10 xl:col-span-full xl:ml-0 xl:self-start">
          <DynamicTicket userData={userData} withColorPicker />
        </div>
      </div>
    </Layout>
  );
};

export default TicketEditPage;

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
