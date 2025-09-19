import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Navbar from "./Pages/Navbar/Navbar"
import TopBar from "./Pages/Navbar/TopBar"
import { useEffect } from "react"
import JewelryManufacturing from "./Pages/JewelryManufacturing/JewelryManufacturing"
import ScrollToTopButton from "./Pages/ScrollToTopButton/ScrollToTopButton"
import Footer from "./Pages/Footer/Footer"


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

      <Route path="/jewelry-manufacturing-process" element={<JewelryManufacturing />} />


      
        
    </Routes>
    <ScrollToTopButton />

    <Footer />
    
    </>
  )
}

export default App
