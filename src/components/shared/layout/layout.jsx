import PropTypes from 'prop-types';

import Footer from 'components/shared/footer';
import Header from 'components/shared/header';

const Layout = ({ children, isFooterShow = true, isHeaderWithBorder = false }) => (
  <>
    <Header withBorder={isHeaderWithBorder} />
    <main className="flex min-h-full flex-col overflow-hidden xl:min-h-0 xl:flex-grow">
      {children}
    </main>
    {isFooterShow && <Footer />}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isFooterShow: PropTypes.bool,
  isHeaderWithBorder: PropTypes.bool,
};

export default Layout;
