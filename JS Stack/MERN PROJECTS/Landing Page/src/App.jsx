import { useState } from 'react'
import About from './components/About/about.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import Gallery from './components/Gallery/Gallery.jsx'
import Hero from './components/Hero Section/hero.jsx'
import Navbar from './components/Navbar/navbar.jsx'
import Program from './components/Programs/Program.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Title from './components/Title/title.jsx'
import Video from './components/Video Player/Video.jsx'
// import Title from './components/Title/Title.jsx'

function App() {
  const [video, setVideo] = useState(false)

  return (
    <>
      <div className='Landing_page'>
        <Navbar />
        <Video video = {video} setVideo = {setVideo} />
        <Hero />
        <div className='container'>
          <Title title = "OUR PROGRAM" subTitle = "What We Offer" />
          <Program />
          <About setVideo = {setVideo}/>
          <Title title = "GALLERY" subTitle = "Campus Photos" />
          <Gallery />
          <Title title = "TESTIMONIALS" subTitle = "What Student Says" />
          <Testimonials />
          <Title title = "CONTACT US" subTitle = "Get in Touch" />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
