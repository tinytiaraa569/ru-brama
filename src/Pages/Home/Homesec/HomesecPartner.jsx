

// "use client"

// import { motion } from "framer-motion"

// const partners = [
//   {
//     name: "Miraki",
//     logo: "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/66e1c5c567e01b00bab15ec2/miraki-logo-480x480.png",
//   },
//   { name: "Unity Jewels", logo: "https://unityjewels.co/assets/logo-DnOBWlpj.webp" },
//   { name: "Suraj", logo: "https://www.su-rajintergold.com/assets/setting/66ebecdaecdec.png" },
//   { name: "TinyTiaraa", logo: "https://admin.tinytiaraa.com/uploads/images/logowebsite/pgqpod1dbwdxo4kudbjl.webp" },
//   {
//     name: "Miraki",
//     logo: "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/66e1c5c567e01b00bab15ec2/miraki-logo-480x480.png",
//   },
//   { name: "Unity Jewels", logo: "https://unityjewels.co/assets/logo-DnOBWlpj.webp" },
//   { name: "Suraj", logo: "https://www.su-rajintergold.com/assets/setting/66ebecdaecdec.png" },
//   { name: "TinyTiaraa", logo: "https://admin.tinytiaraa.com/uploads/images/logowebsite/pgqpod1dbwdxo4kudbjl.webp" },
// ]

// function HomesecPartner() {
//   return (
//     <section className="py-4 sm:py-10 bg-white">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-4"
//         >
//           <h2 className="text-md md:text-2xl font-bold text-gray-900 ">Our Trusted Partners</h2>
         
//         </motion.div>

//         <div className="relative overflow-hidden">
//           <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white via-white/60 to-transparent z-10" />
//           <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white via-white/60 to-transparent z-10" />

//           <motion.div
//             className="flex gap-8 items-center"
//             animate={{
//               x: [0, -1400],
//             }}
//             transition={{
//               x: {
//                 repeat: Number.POSITIVE_INFINITY,
//                 repeatType: "loop",
//                 duration: 25,
//                 ease: "linear",
//               },
//             }}
//           >
//             {[...partners, ...partners, ...partners].map((partner, index) => (
//               <motion.div
//                 key={`${partner.name}-${index}`}
//                 whileHover={{ scale: 1.1, y: -5 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                 className="flex-shrink-0 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
//               >
//                 <img
//                   src={partner.logo || "/placeholder.svg"}
//                   alt={partner.name}
//                   className={`object-contain cursor-pointer transition-all duration-300 ${
//                     partner.name === "TinyTiaraa"
//                       ? "h-16 w-auto max-w-[180px]" // Better scaling for TinyTiaraa
//                       : "h-12 w-auto max-w-[180px]"
//                   }`}
//                 />
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default HomesecPartner

"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const partners = [
  {
    name: "Miraki Jewels",
    logo: "https://www.mirakijewels.com/s/64e6f45eeac997e94ec94eb1/66e1c5c567e01b00bab15ec2/miraki-logo-480x480.png",
    description: "Premium jewelry collection with craftsmanship",
    website: "https://www.mirakijewels.com",
    
  },
  {
    name: "Unity Jewels",
    logo: "https://unityjewels.co/assets/logo-DnOBWlpj.webp",
    description: "Modern jewelry designs for contemporary lifestyle",
    website: "https://unityjewels.co",
   
  },
  {
    name: "Suraj InterGold",
    logo: "https://www.su-rajintergold.com/assets/setting/66ebecdaecdec.png",
    description: "Traditional gold jewelry with modern touch",
    website: "https://www.su-rajintergold.com",
   
  },
  {
    name: "Tiny Tiaraa",
    logo: "https://admin.tinytiaraa.com/uploads/images/logowebsite/pgqpod1dbwdxo4kudbjl.webp",
    description: "Infants & Kids Jewelry",
    website: "https://tinytiaraa.com",
    
  },
]

function HomesecPartner() {
  const [isHovered, setIsHovered] = useState(false)

  const handlePartnerClick = (website) => {
    window.open(website, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="py-4 sm:py-10 bg-white ">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-md md:text-2xl font-bold text-gray-900">We Sparkle in their Shine</h2>

           <div className="flex justify-center mt-3">
            <motion.div
              className="h-0.5 bg-gradient-to-r from-transparent via-black to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: "140px" }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>
        </motion.div>

        <div className="relative overflow-hidden select-none">
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white via-white/60 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white via-white/60 to-transparent z-10" />

          <TooltipProvider>
            <motion.div
              className="flex gap-8 items-center"
              animate={isHovered ? {} : { x: [0, -1400] }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <Tooltip key={`${partner.name}-${index}`}>
                  <TooltipTrigger asChild>
                    <motion.div
                      whileHover={{ scale: 1.1, y: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="flex-shrink-0 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
                      onClick={() => handlePartnerClick(partner.website)}
                    >
                      <img
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        className={` transition-all duration-300 ${
                          partner.name === "Tiny Tiaraa" ? "h-16  max-w-[220px]" : "h-12 w-auto max-w-[180px] object-contain"
                        }`}
                      />
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <div className="space-y-1 py-1">
                      <h3 className="font-semibold text-sm">{partner.name}</h3>
                      <p className="text-xs text-gray-50 mb-2">{partner.description}</p>
                     
                    </div>
                  </TooltipContent>
                </Tooltip>
              ))}
            </motion.div>
          </TooltipProvider>
        </div>
      </div>
    </section>
  )
}

export default HomesecPartner
