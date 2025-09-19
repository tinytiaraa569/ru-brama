// import React from 'react'
// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import aboutsec1img from './about1img.jpg'
// const fadeInUp = {
//   initial: { opacity: 0, y: 60 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.6, ease: "easeOut" },
// }

// const staggerContainer = {
//   animate: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// }

// const scaleIn = {
//   initial: { opacity: 0, scale: 0.8 },
//   animate: { opacity: 1, scale: 1 },
//   transition: { duration: 0.5, ease: "easeOut" },
// }


// const Aboutsection1 = () => {
//   return (
//     <div className="min-h-[55vh] sm:min-h-[65vh]md:min-h-[75vh] lg:min-h-[85vh] bg-background">
//           <motion.section
//         className="relative min-h-[55vh] sm:min-h-[65vh] md:min-h-[75vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
//         <img
//           src={aboutsec1img}
//           alt="Luxury jewelry craftsmanship"
//           className="absolute inset-0 w-full h-full object-cover opacity-30"
//         />

//         <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 100 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <Badge variant="secondary" className="mb-2 sm:mb-4 text-sm font-medium">
//               Premium Jewelry Production
//             </Badge>
//             <h1 className="text-2xl md:text-5xl font-bold mb-2 sm:mb-4 text-balance bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//               Craftsmanship You Can Trust
//             </h1>
//             <p className="text-md md:text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
//               Your diamonds, your metal, our expertise. We transform your precious materials into extraordinary jewelry
//               pieces with unmatched precision and artistry.
//             </p>
//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Button  className="cursor-pointer text-sm sm:text-lg px-3 py-3 sm:px-6 sm:py-5">
//                 Discover Our Process
//               </Button>
//             </motion.div>
//           </motion.div>
//         </div>

//         <motion.div
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
//         >
//           <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-primary rounded-full mt-2" />
//           </div>
//         </motion.div>
//       </motion.section>
//     </div>
//   )
// }

// export default Aboutsection1

"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import aboutsec1img from './about1img.jpg'


// Variant 1: Smooth Fade with Sliding Overlay
const Aboutsection1 = () => {
  return (
    <div className="min-h-[55vh] sm:min-h-[65vh] md:min-h-[75vh] lg:min-h-[85vh] bg-background">
      <motion.section
        className="relative min-h-[55vh] sm:min-h-[65vh] md:min-h-[75vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Background Image with Fade Animation */}
        <motion.img
          src={aboutsec1img}
          alt="Luxury jewelry craftsmanship"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Animated Black Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />

        {/* Sliding Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1.8, delay: 0.5, ease: "easeInOut" }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Badge variant="secondary" className="mb-2 sm:mb-4 text-sm font-medium">
              Premium Jewelry Production
            </Badge>
            <h1 className="text-2xl md:text-5xl font-bold mb-2 sm:mb-4 text-balance text-white">
              Craftsmanship You Can Trust
            </h1>
            <p className="text-md md:text-xl text-gray-200 mb-8 text-pretty max-w-3xl mx-auto">
              Your diamonds, your metal, our expertise. We transform your precious materials into extraordinary jewelry
              pieces with unmatched precision and artistry.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="cursor-pointer text-sm sm:text-md px-3 py-3 sm:px-6 sm:py-5 bg-white text-black hover:bg-white/80 ">
                Discover Our Process
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default Aboutsection1
