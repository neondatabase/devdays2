import SEO from 'components/shared/seo';
import SEO_DATA from 'constants/seo-data';

const Head = async () => (
  <SEO
    {...SEO_DATA.ticket({
      id: 0,
      name: 'Mr. Tester',
      image: 'https://i.pravatar.cc/112',
      githubHandle: 'mr-tester',
      colorSchema: '1',
    })}
  />
);

export default Head;
