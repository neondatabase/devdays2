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
    name: 'Hundreds',
    email: 'your@email.com',
    githubHandle: 'gitprofile',
    colorSchema: '1',
    image:
      'https://i.guim.co.uk/img/static/sys-images/Guardian/About/General/2013/8/30/1377862460433/Kick-Ass-2-010.jpg?width=465&quality=85&dpr=1&s=none',
    id: 0,
  };
  //* TODO: make proper default url
  return <SEO {...SEO_DATA.ticket(userData)} imagePath={buildOgImageUrl(userData)} />;
};

export default Head;
