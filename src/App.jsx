import React, { useEffect } from 'react';
import { useRoutes, useNavigate, useLocation } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import routes from './components/Router';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    const redirectPath = sessionStorage.getItem('redirect');
    if (redirectPath && redirectPath !== location.pathname) {
      sessionStorage.removeItem('redirect');
      navigate(redirectPath);
    }
  }, [navigate, location.pathname]);

  const path = (() => {
    const p = window.location.search;
    if (p) {
      const params = new URLSearchParams(p);
      return params.get('p');
    }
    return null;
  })();

  let router = useRoutes(routes);

  return (
    <>
      {(router.props.match.pathname === "/" || router.props.match.pathname === "/sinshin" || router.props.match.pathname === "/sinshin/") ? "" : <Header />}
      {router}
      <Footer />
      <ScrollToTop />
    </>
  )
}
