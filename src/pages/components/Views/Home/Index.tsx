import Footer from '../Footer'
import Navbar from '../Navbar'
import Editors from './Editors'
import Explore from './Explore'
import Header from './Header'
import Inspiration from './Inspiration'
import LatestPost from './LatestPost'
import Newsletter from './Newsletter'
import Popular from './Popular'
import Trend from './Trend'
const Index = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Explore />
      <Editors />
      <Popular />
      <Trend />
      <LatestPost />
      <Newsletter />
      <Inspiration />
      <Footer />
    </div>
  )
}

export default Index