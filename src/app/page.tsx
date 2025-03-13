import About from '@/components/About'
import Contact from '@/components/Contact'
import Faq from '@/components/Faq'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Liveticker from '@/components/Liveticker'
import Service from '@/components/Service'
import Topbar from '@/components/Topbar'
import Work from '@/components/Work'

const Home = () => {
  return (
    <div>
      <Topbar />
      <Header />
      <Hero />
      <About />
      <Liveticker />
      <Service />
      <Work />
      <Contact />
      <Faq />
    </div>
  )
}

export default Home