import React, { useEffect } from 'react'
import GallerySection1 from './GallerySection1'
import GallerySection2 from './GallerySection2'

const Gallery = () => {
   useEffect(() => {
        window.scrollTo({
          top: 0
          
        })
      }, [])
  return (
    <>
    {/* <GallerySection1 /> */}
    <GallerySection2 />

    </>
  )
}

export default Gallery