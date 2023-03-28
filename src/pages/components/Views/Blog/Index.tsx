import React from 'react'
import Footer from '../Footer'
import Inspiration from '../Home/Inspiration'
import Newsletter from '../Home/Newsletter'
import Navbar from '../Navbar'
import ExploreLatest from './ExploreLatest'
import Header from './Header'
import ImageGalery from './ImageGalery'

const Index = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <ImageGalery />
      <Newsletter />
      <ExploreLatest />
      <Inspiration />
      <Footer />
    </div>
  )
}

export default Index