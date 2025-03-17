"use client"
import { useEffect, useState } from 'react'

//components
import About from '@/components/About'
import Contact from '@/components/Contact'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { Liveticker } from '@/components/Liveticker'
import Service from '@/components/Service'
import Topbar from '@/components/Topbar'
import Work from '@/components/Work'



const Home = () => {

  const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 200);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, [])



  return (
    <div>
      <Topbar />
      {/**static header */}
      <div className='relative z-10'>
        <Header />
      </div>
      {/**animated header */}
      <div className={`w-full transition-transform duration-500 fixed top-0 left-0 z-50 ${headerActive ? "translate-y-0" : "-translate-y-full"}`}>
        <Header />
      </div>
      <Hero />
      <About />
      <Liveticker />
      <Service />
      <Work />
      <Contact />
      <Faq />
      <Footer />
    </div>
  )
}

export default Home