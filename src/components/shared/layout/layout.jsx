import clsx from 'clsx';
import PropTypes from 'prop-types';

import Footer from 'components/shared/footer';
import Header from 'components/shared/header';

const Layout = ({ children, isFooterShow = true, isHeaderWithBorder = false }) => (
  <>
    <Header withBorder={isHeaderWithBorder} />
    <main
      className={clsx(
        'flex flex-col overflow-hidden xl:min-h-0 xl:flex-grow',
        !isHeaderWithBorder && 'min-h-full'
      )}
    >
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
