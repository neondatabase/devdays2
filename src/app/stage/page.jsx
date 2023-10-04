import Stage from 'components/pages/developer-days/stage';
import Layout from 'components/shared/layout';
import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.stage);

const StagePage = () => (
  <Layout isFooterShow={false} isHeaderAbsolute={false}>
    <div className="relative grid flex-grow grid-cols-[1fr_320px] lg:grid-cols-1 lg:grid-rows-[1fr_auto]">
      <Stage />
    </div>
  </Layout>
);

export default StagePage;
