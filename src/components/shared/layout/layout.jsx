import clsx from 'clsx';
import PropTypes from 'prop-types';

import Footer from 'components/shared/footer';
import Header from 'components/shared/header';

const Layout = ({ children, isFooterShow = true, isHeaderAbsolute = true }) => (
  <>
    <Header isHeaderAbsolute={isHeaderAbsolute} />
    <main
      className={clsx(
        'flex flex-col overflow-hidden xl:min-h-0 xl:flex-grow [@media(max-height:650px)_and_(min-width:1279px)]:py-[70px]',
        isHeaderAbsolute && 'min-h-full'
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
  isHeaderAbsolute: PropTypes.bool,
};

export default Layout;
