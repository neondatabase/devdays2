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
      className="relative flex min-h-[inherit] items-center gap-12 py-4 xl:flex-wrap xl:justify-center xl:gap-4"
      size="lg"
    >
      <div className="xl:flex xl:w-full xl:flex-col xl:items-center">
        <h1 className="text-[96px] font-semibold leading-none tracking-tighter text-white 2xl:text-7xl xl:text-center xl:text-[78px] md:text-[58px] sm:text-[52px]">
          You’re In. <br className="lg:hidden sm:block" />
          Make it Unique.
        </h1>
        <p className="mt-4 font-mono text-xl font-light leading-tight tracking-tighter text-white lg:text-center lg:text-lg md:text-base">
          Join us at <time dateTime="2023-03-26 10:30">10:30AM PT, March 26</time>
        </p>
        <SocialShare className="mt-12 sm:mt-6" url={shareUrl} />
      </div>
      <div className="shrink-0 lg:mt-6 lg:max-w-[95%] sm:mt-4 sm:flex sm:flex-col-reverse">
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
