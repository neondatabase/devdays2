import { notFound } from 'next/navigation';

import DynamicTicket from 'components/pages/dev-days-2/dynamic-ticket';
import Container from 'components/shared/container';
import SocialShare from 'components/shared/social-share';
import prisma from 'utils/prisma';

// TODO: uncomment
// eslint-disable-next-line no-unused-vars
const TicketPage = async ({ params }) => {
  // TODO: uncomment
  // const userData = await getTicketData(params.handle);

  const userData = {
    id: 8,
    email: 'please@no.spam',
    image: 'https://i.pravatar.cc/128',
    name: 'Mr. Tester',
    githubHandle: 'mr-tester',
  };

  if (!userData) return notFound();

  const shareUrl = `${process.env.NEXT_PUBLIC_MAIN_SITE_URL}/developer-days-2/tickets/${userData.githubHandle}`;

  return (
    <Container
      className="flex min-h-[inherit] items-center justify-between gap-12 py-4 lg:flex-col lg:justify-start lg:pb-24 lg:pt-16"
      size="lg"
    >
      <div className="w-full max-w-[620px] pb-9 lg:flex lg:flex-col lg:items-center">
        <h1 className="pointer-events-none relative z-50 text-[96px] font-semibold leading-none tracking-tighter text-white 2xl:text-[64px] lg:text-center">
          You’re In. <br className="lg:hidden sm:block" />
          Make it Unique.
        </h1>
        <p className="pointer-events-none mt-4 font-mono text-xl font-light leading-tight tracking-tighter text-white lg:text-center lg:text-lg md:text-base">
          Join us at <time dateTime="2023-03-26 10:30">10:30AM PT, March 26</time>
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

// TODO: uncomment
// eslint-disable-next-line no-unused-vars
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
