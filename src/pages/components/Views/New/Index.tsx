import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Articles from './Articles'
import Header from './Header'
import Images from './Images'
import Vedio from './Vedio'

const Index = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Vedio />
            <Articles />
            <Images />
            <Footer />
        </div>
    )
}

export default Index