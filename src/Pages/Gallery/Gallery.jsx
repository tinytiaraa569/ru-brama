import React, { useEffect } from 'react'

const Gallery = () => {
   useEffect(() => {
        window.scrollTo({
          top: 0
          
        })
      }, [])
  return (
    <div className='w-full h-[70vh] flex justify-center items-center'>Gallery</div>
  )
}

export default Gallery