import Stage from 'components/pages/developer-days/stage';
import Layout from 'components/shared/layout';

const StagePage = () => (
  <Layout isFooterShow={false} isHeaderAbsolute={false}>
    <div className="relative grid flex-grow grid-cols-[1fr_320px] lg:grid-cols-1 lg:grid-rows-[1fr_24vh] sm:grid-rows-[1fr_45vh]">
      <Stage />
    </div>
  </Layout>
);

export default StagePage;
