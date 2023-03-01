import { notFound } from 'next/navigation';

import DynamicTicket from 'components/pages/developer-days/dynamic-ticket';
import SocialShare from 'components/shared/social-share';
import prisma from 'utils/prisma';

const TicketEditPage = async ({ params }) => {
  // eslint-disable-next-line no-use-before-define
  const userData = await getTicketData(params.handle);

  if (!userData) return notFound();

  const shareUrl = `${process.env.NEXT_PUBLIC_MAIN_SITE_URL}/developer-days/tickets/${userData.githubHandle}`;

  return (
    <div className="relative mx-auto grid h-full max-w-[1760px] grid-cols-12 gap-10">
      <div className="col-span-5 col-start-2 mr-24 self-center">
        <h1 className="pointer-events-none relative z-50 text-[96px] font-semibold leading-none tracking-tighter text-white 2xl:text-[64px] lg:text-center">
          {userData.name}&apos;s <br className="lg:hidden sm:block" />
          Ticket
        </h1>
        <p className="pointer-events-none relative z-50 mt-5 font-mono text-xl font-light leading-tight tracking-tight text-white lg:text-center lg:text-lg md:text-base">
          Join {userData.name.split(' ')[0]} at Neon Developer Days on{' '}
          <time dateTime="2023-03-28 09:00">March 28th, 9 a.m. PT</time>
        </p>
        <SocialShare className="mt-11 sm:mt-6" url={shareUrl} />
      </div>
      <div className="col-span-6 col-start-7 -ml-10 self-center">
        <DynamicTicket userData={userData} />
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

export const revalidate = 60;
