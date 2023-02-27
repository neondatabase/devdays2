import SEO from 'components/shared/seo';
import SEO_DATA from 'constants/seo-data';
import prisma from 'utils/prisma';

const buildOgImageUrl = (data) => '/api/og?'.concat(new URLSearchParams(data));

const Head = async ({ params }) => {
  const { handle } = params;
  let userData;

  if (handle) {
    try {
      userData = await prisma.user.findUnique({
        where: {
          githubHandle: handle,
        },
        select: {
          name: true,
          email: true,
          githubHandle: true,
          image: true,
          id: true,
          colorSchema: true,
        },
      });
    } catch (err) {
      console.log('Ticket page head query err', err);
    }
  }

  userData = userData || {
    name: 'Your name',
    email: 'your@email.com',
    githubHandle: 'github-account',
    colorSchema: '0',
    image: '',
    id: 0,
  };
  //* TODO: make proper default url
  return (
    <>
      <link rel="preload" href="/images/developer-days-2/elephant-1.png" as="image" />
      <link rel="preload" href="/images/developer-days-2/elephant-2.png" as="image" />
      <link rel="preload" href="/images/developer-days-2/elephant-3.png" as="image" />
      <link rel="preload" href="/images/developer-days-2/elephant-4.png" as="image" />
      <SEO {...SEO_DATA.ticket(userData)} imagePath={buildOgImageUrl(userData)} />
    </>
  );
};

export default Head;
