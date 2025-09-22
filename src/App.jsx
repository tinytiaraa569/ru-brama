import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Navbar from "./Pages/Navbar/Navbar"
import TopBar from "./Pages/Navbar/TopBar"
import { useEffect } from "react"
import JewelryManufacturing from "./Pages/JewelryManufacturing/JewelryManufacturing"
import ScrollToTopButton from "./Pages/ScrollToTopButton/ScrollToTopButton"
import Footer from "./Pages/Footer/Footer"
import Contact from "./Pages/Contact/Contact"
import Gallery from "./Pages/Gallery/Gallery"
import NotFound from "./Pages/NotFound/NotFound"


function App() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    })
  }, [])

  return (
    <>
    <TopBar />
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gallery" element={<Gallery />} />



      <Route path="/jewelry-manufacturing-process" element={<JewelryManufacturing />} />


      <Route path="*" element={<NotFound />} />



      
        
    </Routes>
    <ScrollToTopButton />

    <Footer />
    
    </>
  )
}

export default App
