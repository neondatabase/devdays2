import SEO from 'components/shared/seo';
import SEO_DATA from 'constants/seo-data';
import prisma from 'utils/prisma';

const buildOgImageUrl = (data) =>
  data ? '/api/og?'.concat(new URLSearchParams(data)) : '/api/og?';

const Head = async ({ params }) => {
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
    return <SEO {...SEO_DATA.ticket(userData)} imagePath={buildOgImageUrl(userData)} />;
  }

  return <SEO {...SEO_DATA['404-ticket']} />;
};

export default Head;
