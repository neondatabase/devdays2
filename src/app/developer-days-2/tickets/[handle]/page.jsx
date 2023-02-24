import { notFound } from 'next/navigation';

import DynamicTicket from 'components/pages/dev-days-2/dynamic-ticket';
import Container from 'components/shared/container';
import SocialShare from 'components/shared/social-share';
import prisma from 'utils/prisma';

const TicketPage = async ({ params }) => {
  // const userData = await getTicketData(params.handle);

  // if (!userData) return notFound();

  const userData = {
    id: 8,
    email: 'please@no.spam',
    image: 'https://i.pravatar.cc/128',
    name: 'Mr. Tester',
    githubHandle: 'mr-tester',
  };

  const shareUrl = `${process.env.NEXT_PUBLIC_MAIN_SITE_URL}/developer-days-2/tickets/${userData.githubHandle}`;

  return (
    <Container
      className="flex min-h-[inherit] items-center justify-between gap-12 py-4 lg:flex-col"
      size="lg"
    >
      <div className="relative z-10 w-full max-w-[620px] lg:flex lg:flex-col lg:items-center">
        <h1 className="text-[96px] font-semibold leading-none tracking-tighter text-white xl:text-6xl lg:text-center lg:text-[78px] md:text-[58px] sm:text-[52px]">
          You’re In. <br className="lg:hidden sm:block" />
          Make it Unique.
        </h1>
        <p className="mt-4 font-mono text-xl font-light leading-tight tracking-tighter text-white lg:text-center lg:text-lg md:text-base">
          Join us at <time dateTime="2023-03-26 10:30">10:30AM PT, March 26</time>
        </p>
        <SocialShare className="mt-12 sm:mt-6" url={shareUrl} />
      </div>
      <div className="relative z-20 shrink-0">
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
