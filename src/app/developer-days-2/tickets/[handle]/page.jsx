import { notFound } from 'next/navigation';

import DynamicTicket from 'components/pages/dev-days-2/dynamic-ticket';
import Container from 'components/shared/container';
import SocialShare from 'components/shared/social-share';
import prisma from 'utils/prisma';

const TicketPage = async ({ params }) => {
  const data = await getTicketData(params.handle);

  if (!data) return notFound();

  const shareUrl = `${process.env.NEXT_PUBLIC_MAIN_SITE_URL}/developer-days-2/tickets/${data.githubHandle}`;

  return (
    <Container
      className="relative flex min-h-[100vh] items-center gap-12 py-4 lg:flex-wrap lg:justify-center lg:gap-0"
      size="lg"
    >
      <div className="w-6/12 xl:w-1/2 lg:w-2/3 sm:w-full">
        <h2 className="text-[96px] font-semibold leading-none tracking-tighter text-white 2xl:text-7xl xl:text-6xl">
          You’re In. <br />
          Make it Unique.
        </h2>
        <p className="mt-4 font-mono text-xl font-light leading-tight tracking-tighter text-white">
          Generate a unique ticket image with your GitHub profile.
        </p>
        <SocialShare url={shareUrl} />
      </div>
      <div className="w-7/12 xl:w-1/2 lg:mt-2 lg:mb-10 lg:w-2/3 sm:w-full">
        <DynamicTicket data={data} />
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
