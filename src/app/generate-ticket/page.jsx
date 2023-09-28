import GithubRegistrationStep from 'components/pages/developer-days/github-registration-step';
import Layout from 'components/shared/layout';
import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.generateTicket);

const GenerateTicketPage = () => (
  <Layout>
    <link rel="preload" crossOrigin="anonymous" href="/animations/input-lines.riv" as="fetch" />
    <link
      rel="preload"
      crossOrigin="anonymous"
      href="/images/developer-days/elephant-1-large.png"
      as="image"
      media="(min-width: 1024px)"
    />
    <link
      rel="preload"
      crossOrigin="anonymous"
      href="/images/developer-days/elephant-1-medium.png"
      as="image"
      media="(min-width: 768px) and (max-width: 1023px)"
    />
    <link
      rel="preload"
      crossOrigin="anonymous"
      href="/images/developer-days/elephant-1-small.png"
      as="image"
      media="(max-width: 767px)"
    />
    <link
      rel="preload"
      crossOrigin="anonymous"
      href="/images/developer-days/elephant-2-large.png"
      as="image"
      media="(min-width: 1024px)"
    />
    <link
      rel="preload"
      crossOrigin="anonymous"
      href="/images/developer-days/elephant-2-medium.png"
      as="image"
      media="(min-width: 768px) and (max-width: 1023px)"
    />
    <link
      rel="preload"
      crossOrigin="anonymous"
      href="/images/developer-days/elephant-2-small.png"
      as="image"
      media="(max-width: 767px)"
    />
    <link
      rel="preload"
      crossOrigin="anonymous"
      href="/images/developer-days/elephant-3-large.png"
      as="image"
      media="(min-width: 1024px)"
    />
    <link
      rel="preload"
      crossOrigin="anonymous"
      href="/images/developer-days/elephant-3-medium.png"
      as="image"
      media="(min-width: 768px) and (max-width: 1023px)"
    />
    <link
      rel="preload"
      crossOrigin="anonymous"
      href="/images/developer-days/elephant-3-small.png"
      as="image"
      media="(max-width: 767px)"
    />
    <link
      rel="preload"
      crossOrigin="anonymous"
      href="/images/developer-days/elephant-4-large.png"
      as="image"
      media="(min-width: 1024px)"
    />
    <link
      rel="preload"
      crossOrigin="anonymous"
      href="/images/developer-days/elephant-4-medium.png"
      as="image"
      media="(min-width: 768px) and (max-width: 1023px)"
    />
    <link
      rel="preload"
      crossOrigin="anonymous"
      href="/images/developer-days/elephant-4-small.png"
      as="image"
      media="(max-width: 767px)"
    />
    <link
      rel="preload"
      crossOrigin="anonymous"
      href="/fonts/kallisto/kallisto-light.woff2"
      as="font"
      type="font/woff2"
    />
    <div className="relative mx-auto grid max-w-[1760px] flex-grow grid-cols-12 gap-10 py-20 2xl:px-14 xl:h-[-webkit-fill-available] xl:grid-cols-1 xl:px-11 xl:py-11 lg:gap-y-8 lg:px-8 lg:py-9 md:gap-y-7 md:px-4 md:pt-5 md:pb-20">
      <GithubRegistrationStep />
    </div>
  </Layout>
);

export default GenerateTicketPage;
