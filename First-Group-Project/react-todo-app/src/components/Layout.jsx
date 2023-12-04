import React from 'react'
import Header from './Header/header'
import Footer from './Footer/footer'

export const Layout = ({children}) => {
  return (
    <>
        <Header></Header>
        {children}
        <Footer></Footer>
    </>
  )
}
