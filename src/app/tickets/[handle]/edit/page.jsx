import Link from 'next/link';
import { notFound } from 'next/navigation';

import DynamicTicket from 'components/pages/developer-days/dynamic-ticket';
import Layout from 'components/shared/layout';
import SocialShare from 'components/shared/social-share';
import SEO_DATA from 'constants/seo-data';
import ArrowLeftIcon from 'icons/arrow-left-thin.inline.svg';
import buildOgImageUrl from 'utils/build-og-image-url';
import getMetadata from 'utils/get-metadata';
import prisma from 'utils/prisma';

const TicketEditPage = async ({ params }) => {
  // eslint-disable-next-line no-use-before-define
  const userData = await getTicketData(params.handle);

  if (!userData) return notFound();

  const userName = userData.name || userData.login;

  const shareUrl = `${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}/tickets/${userData.login}`;

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
            See you on <time dateTime="2023-11-02T10:00">November 2nd, 10 a.m. PT</time>
          </p>
          <Link
            className="pointer-events-auto inline-flex items-end text-primary-4 mt-[18px] text-lg leading-none tracking-[-0.02em] underline decoration-primary-4/40 underline-offset-[8px] hover:decoration-primary-4 transition-colors duration-200 lg:text-base"
            href="/speakers"
          >
            <span>Check out the list of speakers</span>
            <ArrowLeftIcon className="ml-2.5 w-[18px] h-auto rotate-180" />
          </Link>
          <SocialShare className="pointer-events-auto mt-11 lg:mt-8 sm:mt-6" url={shareUrl} />
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

export async function generateMetadata({ params }) {
  const { handle } = params;
  let userData;

  if (handle) {
    try {
      userData = await prisma.user.findUnique({
        where: {
          login: handle,
        },
        select: {
          name: true,
          email: true,
          login: true,
          image: true,
          id: true,
          colorSchema: true,
        },
      });
    } catch (err) {
      console.log('Ticket page head query err', err);
    }
  }

  if (userData) {
    return getMetadata({
      ...SEO_DATA.ticket(userData),
      pathname: `/tickets/${userData.login}/edit`,
      imagePath: buildOgImageUrl(userData),
    });
  }

  return getMetadata({ ...SEO_DATA['404-ticket'] });
}

export const revalidate = 0;
