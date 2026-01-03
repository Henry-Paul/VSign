import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';
import PhoneFloat from './PhoneFloat';
import { Helmet } from 'react-helmet-async';

const Layout = () => {
  const location = useLocation();

  React.useEffect(() => {
    // Simple page view tracking (replace with GA4 later)
    console.log('Page view:', location.pathname);
  }, [location]);

  return (
    <>
      <Helmet>
        <title>V SIGN Premium Signage</title>
      </Helmet>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
      <PhoneFloat />
    </>
  );
};

export default Layout;
