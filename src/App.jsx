import React,{ useState } from 'react'
import { useRoutes,ScrollRestoration  } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import routes from './components/Router'
import ScrollToTop from './components/ScrollToTop'

export default function App() {


  let router = useRoutes(routes);

  return (
    <>
      {(router.props.match.pathname === "/home" || router.props.match.pathname === "/" || router.props.match.pathname === "/sinshin" || router.props.match.pathname === "/sinshin/home")? "" : <Header/>}
      {router}
      <Footer />
      <ScrollToTop/>
    </>
  )
}
