import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/Footer/Footer'

const Mainlayout = (
    { children, withoutNavbar, withoutFooter }) => {
    withoutNavbar = false;
    withoutFooter = false;
    return (
        <>
            {!withoutNavbar && <Header />}
            {children}
            {!withoutFooter && <Footer />}
        </>
    )
}

export default Mainlayout