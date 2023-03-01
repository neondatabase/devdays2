import { notFound } from 'next/navigation';

import DynamicTicket from 'components/pages/developer-days/dynamic-ticket';
import Container from 'components/shared/container';
import SocialShare from 'components/shared/social-share';
import prisma from 'utils/prisma';

const TicketPage = async ({ params }) => {
  // eslint-disable-next-line no-use-before-define
  const userData = await getTicketData(params.handle);

  if (!userData) return notFound();

  const shareUrl = `${process.env.NEXT_PUBLIC_MAIN_SITE_URL}/developer-days/tickets/${userData.githubHandle}`;

  return (
    <Container
      className="flex min-h-[inherit] items-center justify-between gap-12 py-4 lg:flex-col lg:justify-start lg:pb-24 lg:pt-16"
      size="lg"
    >
      <div className="w-full max-w-[620px] pb-9 lg:flex lg:flex-col lg:items-center">
        <h1 className="pointer-events-none relative z-50 text-[96px] font-semibold leading-none tracking-tighter text-white 2xl:text-[64px] lg:text-center">
          {userData.name}&apos;s <br className="lg:hidden sm:block" />
          Ticket
        </h1>
        <p className="pointer-events-none relative z-50 mt-4 font-mono text-xl font-light leading-tight tracking-tighter text-white lg:text-center lg:text-lg md:text-base">
          Join {userData.name.split(' ')[0]} at Neon Developer Days on{' '}
          <time dateTime="2023-03-28 09:00">March 28th, 9 a.m. PT</time>
        </p>
        <SocialShare className="mt-12 sm:mt-6" url={shareUrl} />
      </div>
      <div className="shrink-0">
        <DynamicTicket userData={userData} />
      </div>
    </Container>
  );
};

export default TicketPage;

async function getTicketData(handle) {
  let userData = null;

  if (handle) {
    try {
      userData = await prisma.user.findFirstOrThrow({
        where: {
          githubHandle: handle,
        },
        select: {
          name: true,
          email: true,
          githubHandle: true,
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
