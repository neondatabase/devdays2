import { notFound } from 'next/navigation';

import DynamicTicket from 'components/pages/dev-days-2/dynamic-ticket';
import Container from 'components/shared/container';
import SocialShare from 'components/shared/social-share';
import prisma from 'utils/prisma';

const TicketPage = async ({ params }) => {
  const data = await getTicketData(params.handle);

  if (!data) return notFound();

  const shareUrl = `${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}/developer-days-2/tickets/${data.githubHandle}`;

  return (
    <Container
      className="relative flex min-h-[100vh] items-center gap-12 py-4 xl:flex-wrap xl:justify-center xl:gap-8"
      size="lg"
    >
      <div className="xl:w-full">
        <h2 className="text-[96px] font-semibold leading-none tracking-tighter text-white md:text-6xl [@media(max-width:1360px)]:text-7xl">
          You’re In. <br />
          Make it Unique.
        </h2>
        <p className="mt-4 font-mono text-xl font-light leading-tight tracking-tighter text-white">
          Generate a unique ticket image with your GitHub profile.
        </p>
        <SocialShare url={shareUrl} />
      </div>
      <div className="w-[790px] xl:w-full ">
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
