import { notFound } from 'next/navigation';

import DynamicTicket from 'components/pages/developer-days/dynamic-ticket';
import SocialShare from 'components/shared/social-share';
import prisma from 'utils/prisma';

const TicketEditPage = async ({ params }) => {
  // eslint-disable-next-line no-use-before-define
  const userData = await getTicketData(params.handle);

  if (!userData) return notFound();

  const shareUrl = `${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}/tickets/${userData.login}`;

  return (
    <div className="relative mx-auto grid min-h-[600px] max-w-[1760px] flex-grow grid-cols-12 gap-10 xl:h-[-webkit-fill-available] xl:grid-cols-1 xl:gap-0 xl:px-11 xl:py-11 lg:py-7 md:px-8 md:pt-5 md:pb-20 sm:px-4">
      <div className="relative z-10 col-span-4 col-start-2 self-center xl:col-span-full xl:self-end xl:text-center">
        <h1 className="pointer-events-none relative z-50 text-[96px] font-semibold leading-none tracking-tighter text-white 2xl:text-[78px] 2xl:tracking-[-0.05em] xl:mx-auto xl:max-w-[700px] lg:text-[58px] md:max-w-[500px] md:text-[52px]">
          {userData.name}&apos;s <br className="hidden md:block" />
          Ticket
        </h1>
        <p className="pointer-events-none relative z-50 mt-5 font-mono text-xl font-light leading-tight tracking-tight text-white xl:mx-auto xl:max-w-[700px] xl:text-lg xl:leading-[1.375] xl:tracking-tighter lg:mt-4 lg:text-base md:max-w-[500px]">
          Choose the ticket color and gather a watch party for the upcoming Neon Developer Days! See
          you on <time dateTime="2023-03-28 09:00">March 28th, 9 a.m. PT</time>
        </p>
        <SocialShare className="mt-11 lg:mt-8 sm:mt-6" url={shareUrl} />
      </div>
      <div className="col-span-6 col-start-7 -ml-10 self-center 2xl:col-start-6 2xl:ml-0 xl:col-span-full xl:self-start">
        <DynamicTicket userData={userData} withColorPicker />
      </div>
    </div>
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
