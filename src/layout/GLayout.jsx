import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/Footer/Footer'

const GLayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default GLayout;