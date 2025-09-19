

// "use client"

// import { motion } from "framer-motion"
// import { useEffect, useState } from "react"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"

// const galleryImages = [
//   {
//     src: "https://images.pexels.com/photos/33154633/pexels-photo-33154633.jpeg",
//     alt: "Diamond engagement ring on display",
//     title: "Engagement Ring",
//     category: "Rings",
//   },
//   {
//     src: "https://images.pexels.com/photos/32039109/pexels-photo-32039109.jpeg",
//     alt: "Luxury gold necklace with pendant",
//     title: "Gold Necklace",
//     category: "Necklaces",
//   },
//   {
//     src: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg",
//     alt: "Pair of elegant diamond earrings",
//     title: "Diamond Earrings",
//     category: "Earrings",
//   },
//   {
//     src: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg",
//     alt: "Stack of bangles in gold and silver",
//     title: "Bangles",
//     category: "Bracelets",
//   },
//   {
//     src: "https://images.pexels.com/photos/6858599/pexels-photo-6858599.jpeg",
//     alt: "Pearl necklace on display stand",
//     title: "Pearl Necklace",
//     category: "Necklaces",
//   },
//   {
//     src: "https://images.pexels.com/photos/6263143/pexels-photo-6263143.jpeg",
//     alt: "Luxury watch on leather strap",
//     title: "Luxury Watch",
//     category: "Watches",
//   },
//   {
//     src: "https://images.pexels.com/photos/4544816/pexels-photo-4544816.jpeg",
//     alt: "Elegant gemstone bracelet",
//     title: "Gemstone Bracelet",
//     category: "Bracelets",
//   },
//   {
//     src: "https://images.pexels.com/photos/1841546/pexels-photo-1841546.jpeg",
//     alt: "Choker necklace with diamonds",
//     title: "Diamond Choker",
//     category: "Necklaces",
//   },
//   {
//     src: "https://images.pexels.com/photos/6567673/pexels-photo-6567673.jpeg",
//     alt: "Stud earrings with emeralds",
//     title: "Emerald Studs",
//     category: "Earrings",
//   },
//   {
//     src: "https://images.pexels.com/photos/3640960/pexels-photo-3640960.jpeg",
//     alt: "Gold chain bracelet",
//     title: "Gold Chain",
//     category: "Bracelets",
//   },
//   {
//     src: "https://images.pexels.com/photos/3023668/pexels-photo-3023668.jpeg",
//     alt: "Minimalist platinum band",
//     title: "Platinum Band",
//     category: "Rings",
//   },
//   {
//     src: "https://images.pexels.com/photos/3972217/pexels-photo-3972217.jpeg",
//     alt: "Designer cocktail ring",
//     title: "Cocktail Ring",
//     category: "Rings",
//   },
//   {
//     src: "https://images.pexels.com/photos/9428788/pexels-photo-9428788.jpeg",
//     alt: "Luxury diamond-studded watch",
//     title: "Diamond Watch",
//     category: "Watches",
//   },
//   {
//     src: "https://images.pexels.com/photos/16935587/pexels-photo-16935587.jpeg",
//     alt: "Ruby pendant necklace",
//     title: "Ruby Pendant",
//     category: "Necklaces",
//   },
//   {
//     src: "https://images.pexels.com/photos/10976653/pexels-photo-10976653.jpeg",
//     alt: "Silver charm bracelet",
//     title: "Charm Bracelet",
//     category: "Bracelets",
//   },
//   {
//     src: "https://images.pexels.com/photos/16113887/pexels-photo-16113887.jpeg",
//     alt: "Traditional wedding jewelry set",
//     title: "Bridal Set",
//     category: "Collections",
//   },
// ]


// export default function MasonryGalleryVariant1() {
//   const [selectedImage, setSelectedImage] = useState(null)
//   const [showAll, setShowAll] = useState(false)
//   const [isMobile, setIsMobile] = useState(false)
//   const [shimmerIndex, setShimmerIndex] = useState(null);



//   // Check if mobile on mount
//   useEffect(() => {
//   const checkMobile = () => setIsMobile(window.innerWidth < 768)
//   checkMobile()
//   window.addEventListener("resize", checkMobile)
//   return () => window.removeEventListener("resize", checkMobile)
// }, [])

//   const displayImages =
//   isMobile ? (showAll ? galleryImages : galleryImages.slice(0, 8)) : galleryImages

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: {
//       opacity: 0,
//       y: 50,
//       rotateX: -15,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       rotateX: 0,
//       transition: {
//         type: "spring",
//         damping: 20,
//         stiffness: 100,
//       },
//     },
//   }

//  useEffect(() => {
//   if (galleryImages.length > 0) {
//     setShimmerIndex(Math.floor(Math.random() * galleryImages.length));
//   }
// }, []);

//   return (
//     <div className="w-full px-4 md:px-10 py-4 sm:py-10">
//         <div className="flex justify-center mt-4 mb-8">


//         <div className="text-center max-w-4xl">

//       <motion.h2
//         className="text-3xl font-bold text-center "
//         initial={{ opacity: 0, y: -30, scale: 0.8 }}
//         whileInView={{ opacity: 1, y: 0, scale: 1 }}
//         viewport={{ once: false, amount: 0.3 }}
//         transition={{
//           duration: 0.8,
//           type: "spring",
//           damping: 15,
//         }}
//       >
//         The Art of Jewelry Making
//       </motion.h2>

//        <motion.p
//             className="text-sm sm:text-lg text-muted-foreground !text-center text-pretty"
//             initial={{ opacity: 0, y: -30, scale: 0.8 }}
//         whileInView={{ opacity: 1, y: 0, scale: 1 }}
//         viewport={{ once: false, amount: 0.3 }}
//         transition={{
//           duration: 0.8,
//           type: "spring",
//           damping: 15,
//         }}
//           >
//             From sketching unique designs to polishing the final masterpiece, our production gallery showcases the artistry, precision, and passion behind every jewelry creation.
//           </motion.p>
//         </div>
//         </div>



//       <motion.div
//         className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false, amount: 0.1 }}
//       >
//         {displayImages.map((image, index) => (
//           <motion.div
//             key={index}
//             className="break-inside-avoid relative group cursor-pointer"
//             variants={itemVariants}
//             whileHover={{
//               transition: { duration: 0.3 },
//             }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setSelectedImage(index)}
//           >
//            <div className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer">
//                 {/* Image */}
//                 <motion.img
//                     src={image.src}
//                     alt={image.alt}
//                     className="w-full h-auto object-cover"
//                     loading="lazy"
//                     whileHover={{ filter: "brightness(1.1)" }}
//                     transition={{ duration: 0.4 }}
//                 />
//                  {/* Multi-layer Shimmer Effect */}
//                 {index === shimmerIndex && (
//                     <motion.div
//                         className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
//                         initial={{ x: "-150%" }}
//                         animate={{ x: "250%" }}
//                         transition={{
//                         duration: 2.5,
//                         repeat: Number.POSITIVE_INFINITY,
//                         repeatDelay: 4,
//                         ease: "easeInOut",
//                         }}
//                     />
//                     )}


//                 {/* Black Overlay */}
//                 <div
//                     className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent 
//                             opacity-0 group-hover:opacity-100 flex flex-col justify-end p-4 
//                             transition-opacity duration-300"
//                 >
//                     {/* Content */}
//                     <div
//                     className="transform translate-y-6 opacity-0 
//                                 group-hover:translate-y-0 group-hover:opacity-100 
//                                 transition-all duration-300 delay-100"
//                     >
//                     <Badge variant="secondary" className="mb-0.5 w-fit">
//                         {image.category}
//                     </Badge>
//                     <h3 className="text-white text-lg font-semibold">{image.title}</h3>
//                     </div>
//                 </div>
//                 </div>

//           </motion.div>
//         ))}
//       </motion.div>

//       {/* View More Button for Mobile */}
//     {isMobile && !showAll && galleryImages.length > 8 && (
//         <motion.div
//             className="flex justify-center mt-8"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: false }}
//             transition={{ delay: 0.5 }}
//         >
//             <Button onClick={() => setShowAll(true)} className="px-8 py-3 text-lg" size="lg">
//             View More ({galleryImages.length - 8} more images)
//             </Button>
//         </motion.div>
//         )}


//       {/* Modal for selected image */}
//       {selectedImage !== null && (
//         <motion.div
//           className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={() => setSelectedImage(null)}
//         >
//           <motion.div
//             className="relative !max-w-6xl h-[85vh]"
//             initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
//             animate={{ scale: 1, opacity: 1, rotateY: 0 }}
//             exit={{ scale: 0.5, opacity: 0, rotateY: 90 }}
//             transition={{ type: "spring", damping: 20, stiffness: 200 }}
//           >
//             <img
//               src={galleryImages[selectedImage].src || "/placeholder.svg"}
//               alt={galleryImages[selectedImage].alt}
//               className="w-full h-full object-contain rounded-lg"
//             />
//             <button
//               className="cursor-pointer absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center text-xl hover:bg-black/70 transition-colors"
//               onClick={() => setSelectedImage(null)}
//             >
//               ×
//             </button>
//           </motion.div>
//         </motion.div>
//       )}
//     </div>
//   )
// }


"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    src: "https://images.pexels.com/photos/33154633/pexels-photo-33154633.jpeg",
    alt: "Diamond engagement ring on display",
    title: "Engagement Ring",
    category: "Rings",
  },
  {
    src: "https://images.pexels.com/photos/32039109/pexels-photo-32039109.jpeg",
    alt: "Luxury gold necklace with pendant",
    title: "Gold Necklace",
    category: "Necklaces",
  },
  {
    src: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg",
    alt: "Pair of elegant diamond earrings",
    title: "Diamond Earrings",
    category: "Earrings",
  },
  {
    src: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg",
    alt: "Stack of bangles in gold and silver",
    title: "Bangles",
    category: "Bracelets",
  },
  {
    src: "https://images.pexels.com/photos/6858599/pexels-photo-6858599.jpeg",
    alt: "Pearl necklace on display stand",
    title: "Pearl Necklace",
    category: "Necklaces",
  },
  {
    src: "https://images.pexels.com/photos/6263143/pexels-photo-6263143.jpeg",
    alt: "Luxury watch on leather strap",
    title: "Luxury Watch",
    category: "Watches",
  },
  {
    src: "https://images.pexels.com/photos/4544816/pexels-photo-4544816.jpeg",
    alt: "Elegant gemstone bracelet",
    title: "Gemstone Bracelet",
    category: "Bracelets",
  },
  {
    src: "https://images.pexels.com/photos/1841546/pexels-photo-1841546.jpeg",
    alt: "Choker necklace with diamonds",
    title: "Diamond Choker",
    category: "Necklaces",
  },
  {
    src: "https://images.pexels.com/photos/6567673/pexels-photo-6567673.jpeg",
    alt: "Stud earrings with emeralds",
    title: "Emerald Studs",
    category: "Earrings",
  },
  {
    src: "https://images.pexels.com/photos/3640960/pexels-photo-3640960.jpeg",
    alt: "Gold chain bracelet",
    title: "Gold Chain",
    category: "Bracelets",
  },
  {
    src: "https://images.pexels.com/photos/3023668/pexels-photo-3023668.jpeg",
    alt: "Minimalist platinum band",
    title: "Platinum Band",
    category: "Rings",
  },
  {
    src: "https://images.pexels.com/photos/3972217/pexels-photo-3972217.jpeg",
    alt: "Designer cocktail ring",
    title: "Cocktail Ring",
    category: "Rings",
  },
  {
    src: "https://images.pexels.com/photos/9428788/pexels-photo-9428788.jpeg",
    alt: "Luxury diamond-studded watch",
    title: "Diamond Watch",
    category: "Watches",
  },
  {
    src: "https://images.pexels.com/photos/16935587/pexels-photo-16935587.jpeg",
    alt: "Ruby pendant necklace",
    title: "Ruby Pendant",
    category: "Necklaces",
  },
  {
    src: "https://images.pexels.com/photos/10976653/pexels-photo-10976653.jpeg",
    alt: "Silver charm bracelet",
    title: "Charm Bracelet",
    category: "Bracelets",
  },
  {
    src: "https://images.pexels.com/photos/16113887/pexels-photo-16113887.jpeg",
    alt: "Traditional wedding jewelry set",
    title: "Bridal Set",
    category: "Collections",
  },
]

export default function MasonryGalleryVariant1() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [showAll, setShowAll] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [shimmerIndex, setShimmerIndex] = useState(null)

  // Check if mobile on mount
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])
  

  const displayImages = isMobile ? (showAll ? galleryImages : galleryImages.slice(0, 8)) : galleryImages

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      y: 50,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  }

  useEffect(() => {
    if (galleryImages.length > 0) {
      setShimmerIndex(Math.floor(Math.random() * galleryImages.length))
    }
  }, [])

  return (
    <div className="w-full  px-4 md:px-10 py-4 sm:py-10">
      <div className="flex justify-center mt-4 mb-8">
        <div className="text-center max-w-4xl">
          <motion.h2
            className="text-3xl font-bold text-center "
            initial={{ opacity: 0, y: -30, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              type: "spring",
              damping: 15,
            }}
          >
            The Art of Jewelry Making
          </motion.h2>

          <motion.p
            className="text-sm sm:text-lg text-muted-foreground !text-center text-pretty"
            initial={{ opacity: 0, y: -30, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              type: "spring",
              damping: 15,
            }}
          >
            From sketching unique designs to polishing the final masterpiece, our production gallery showcases the
            artistry, precision, and passion behind every jewelry creation.
          </motion.p>
        </div>
      </div>

      <motion.div
        className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {displayImages.map((image, index) => {
          const originalIndex = galleryImages.findIndex((img) => img.src === image.src)
          return (
            <motion.div
              key={`image-${originalIndex}`}
              className="break-inside-avoid relative group cursor-pointer"
              variants={itemVariants}
              initial={{ opacity: 1, y: 50, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 100,
                delay: index * 0.1,
              }}
              layout
              whileHover={{
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedImage(originalIndex)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer">
                {/* Image */}
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  whileHover={{ filter: "brightness(1.1)" }}
                  transition={{ duration: 0.4 }}
                />
                {/* Multi-layer Shimmer Effect */}
                {originalIndex === shimmerIndex && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
                    initial={{ x: "-150%" }}
                    animate={{ x: "250%" }}
                    transition={{
                      duration: 2.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 4,
                      ease: "easeInOut",
                    }}
                  />
                )}

                {/* Black Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent 
                            opacity-0 group-hover:opacity-100 flex flex-col justify-end p-4 
                            transition-opacity duration-300"
                >
                  {/* Content */}
                  <div
                    className="transform translate-y-6 opacity-0 
                                group-hover:translate-y-0 group-hover:opacity-100 
                                transition-all duration-300 delay-100"
                  >
                    <Badge variant="secondary" className="mb-0.5 w-fit">
                      {image.category}
                    </Badge>
                    <h3 className="text-white text-lg font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* View More Button for Mobile */}
      {isMobile && !showAll && galleryImages.length > 8 && (
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Button onClick={() => setShowAll(true)} className="px-8 py-3 text-lg" size="lg">
            View More ({galleryImages.length - 8} more images)
          </Button>
        </motion.div>
      )}

      {/* Modal for selected image */}
      {selectedImage !== null && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative !max-w-6xl h-[85vh]"
            initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            exit={{ scale: 0.5, opacity: 0, rotateY: 90 }}
            transition={{ type: "spring", damping: 20, stiffness: 200 }}
          >
            <img
              src={galleryImages[selectedImage].src || "/placeholder.svg"}
              alt={galleryImages[selectedImage].alt}
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              className="cursor-pointer absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center text-xl hover:bg-black/70 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

