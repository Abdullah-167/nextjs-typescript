import React from 'react'
import Navbar from '../Navbar'
import Editors from './Editors'
import Explore from './Explore'
import Header from './Header'
import LatestPost from './LatestPost'
import Newsletter from './Newsletter'
import Popular from './Popular'

const Index = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Explore />
      <Editors />
      <Popular />
      <LatestPost />
      <Newsletter />
    </div>
  )
}

export default Index