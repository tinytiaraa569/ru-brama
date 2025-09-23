// // import React from 'react'

// // const HomePassionate = () => {
// //   return (
// //     <div className='w-full h-[90vh] flex justify-center items-center min-h-auto bg-gradient-to-br from-muted/50 via-white/60 to-muted/40 dark pb-10'>

// //         <div className='w-[200px] h-[200px] rounded-full bg-black flex justify-center items-center flex-col text-white'>
// //             <img src="/favicon-light.png" alt="" className='w-20 h-20 object-contain'/>
// //             <p>Ru-Brama Pvt Ltd</p>
// //         </div>
// //     </div>
// //   )
// // }

// // export default HomePassionate


// import React from 'react';
// import CountUp from 'react-countup';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import './homepassionate.css';
// import { useNavigate } from 'react-router-dom';

// const Homecount = () => {
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
//   const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.5 });
//   const navigate = useNavigate()


//   const containerVariant = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } },
//   };

//   return (
//     <>
//       <div className='counterwraper font-poppins laptop-view '>
        
//         <div className='eb-wrapper-outer eb-wrapper-75wa70h '>
//           <div className='eb-wrapper-inner'>
//             <div className='eb-wrapper-inner-blocks eb-wrapper-align-center'>
//               <div className='counterwraper eb-parent-eb-row-3dthkuo'>
//                 <div className='eb-row-wrapper'>
//                   <div className='eb-row-inner'>
//                     <motion.div
//                       ref={ref}
//                       className='counterwraper eb-parent-eb-column-ezqpu3j wp-block-essential-blocks-column'
//                       initial="hidden"
//                       animate={inView ? "visible" : "hidden"}
//                       variants={containerVariant}
//                     >
//                       <div className="space-y-4">
//                         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
//                           <h1 className="text-4xl font-extrabold text-gray-800 leading-tight uppercase">
//                             Over 5 <span>Lakh+ </span> Design's
//                           </h1>
//                           <h1 className="text-4xl font-extrabold text-orange-500 leading-tight uppercase">
//                             Completed
//                           </h1>
//                         </motion.div>

//                         <motion.p className="text-lg text-gray-600 leading-relaxed text-justify" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
//                         At Unity Jewels, every piece is a testament to timeless craftsmanship. Our artisans blend traditional techniques with modern finesse, handcrafting each jewel with unmatched detail, passion, and precision. Because true beauty lies in the hands that create it.
//                         </motion.p>

//                          {/* <motion.button
//                                   className="mt-6 sm:mt-8 px-6 sm:px-8 py-2 sm:py-3 bg-black cursor-pointer text-white font-semibold text-base sm:text-lg rounded-full shadow-lg hover:bg-gray-900 transition duration-300"
//                                   whileHover={{ scale: 1.05 }}
//                                   whileTap={{ scale: 0.95 }}
//                                   onClick={()=>{navigate("/products")}}
//                                 >
//                                   Explore Collection
//                           </motion.button> */}
//                           <motion.button
//                                  className="cursor-pointer px-8 py-3 bg-gradient-to-r from-[#3C746A] to-[#135A9A] text-white font-semibold text-lg rounded-full shadow-lg hover:from-[#246675] hover:to-[#3C746A] transition duration-300 ease-in-out"

//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={() => {
//                           navigate("/products");
//                         }}
//                       >
//                         Explore Collection
//                       </motion.button>
//                       </div>
//                     </motion.div>

//                     <div className='counterwraper eb-parent-eb-column-zrlittl flex justify-end wp-block-essential-blocks-column'>
//                       <div className='eb-column-wrapper eb-column-zrlittl'>
//                         <div className='eb-column-inner'>
//                           <div className='wp-block-essential-blocks-wrapper alignfull'>
//                             <div className='eb-wrapper-outer circle-wrapper eb-wrapper-1e3s2rc'>
//                               <div className='blue-circle'></div>

//                               {/* Background Rectangle */}
//                               <div className="background-rectangle !bg-black">
//                                 <motion.div
//                                   initial={{ scale: 0 }}
//                                   animate={inView ? { scale: 1 } : { scale: 0 }}
//                                   transition={{ duration: 0.6 }}
//                                   className='flex justify-center items-center'
//                                 >
//                                   <div className='w-20 h-20  bg-black flex justify-center items-center flex-col text-white'>
//                                     <img src="/favicon-light.png" alt="" className='w-10 h-10 object-contain'/>
//                                     <p className='text-xs text-center'>Ru-Brama <br /> Pvt Ltd</p>
//                                 </div>
//                                 </motion.div>
//                               </div>

//                               {/* Animated circles with counters */}
//                               {inView && (
//                                 <>
//                                   <div className="small-circle top">
//                                     <motion.div className='w-full h-full adjustsndm' whileHover={{ scale: 1.1 }}>
//                                       {/* <h1><CountUp start={0} end={2000} duration={3} />+</h1> */}
//                                       <p className='!text-lg'>Diamond Collection</p>
//                                       <p className='!text-xs'>Natural Diamond /</p> 
//                                       <p className='!text-xs'>LabGrown Diamond</p>

//                                     </motion.div>
//                                   </div>

//                                   <div className="small-circle bottom">
//                                     <motion.div className='smabottom' whileHover={{ scale: 1.1 }}>
//                                       {/* <h1 className='text-center'><CountUp start={0} end={50000} duration={3} />+</h1> */}
                                      
//                                       <p className='text-center'> ColorStones </p>
//                                     </motion.div>
//                                   </div>

//                                   <div className="small-circle left">
//                                     <motion.div className='smaleft text-center' whileHover={{ scale: 1.1 }}>
                                     
//                                       <p>Metals</p>
//                                     </motion.div>
//                                   </div>

//                                   <div className="small-circle right">
//                                     <motion.div className='smaright' whileHover={{ scale: 1.1 }}>
                                     
//                                       <p>Enamel</p>
//                                     </motion.div>
//                                   </div>
//                                 </>
//                               )}

//                               {/* New decorative circles */}
//                               <div className="small-circle new-circle-1"></div>
//                               <div className="small-circle new-circle-2"></div>
//                               <div className="small-circle new-circle-3"></div>
//                               <div className="small-circle new-circle-4"></div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* For Tablets and Mobile Devices */}
//       <div className="counterwraper-mobile font-poppins flex items-center justify-center ">
//       <div 
//       className="eb-wrapper-outer eb-wrapper-75wa70hmob w-full max-w-4xl flex items-center justify-center p-5 bg-gradient-to-r from-[#FCFEFF] to-[#EAF8FF] relative"
//       ref={ref2}
//       >
//         <div className="absolute inset-0 bg-[url('obj.png')] bg-top-left bg-no-repeat opacity-50"></div>

//         <div className="space-y-4 text-center relative z-10 p-4 lg:px-8">
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
//             <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-800 leading-tight uppercase">
//               Over 5 Lakh+ Design's
//             </h1>
//             <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-orange-500 leading-tight uppercase">
//               Completed
//             </h1>
//           </motion.div>

//           <motion.p
//             className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//           >
//              At Unity Jewels, every piece is a testament to timeless craftsmanship. Our artisans blend traditional techniques with modern finesse, handcrafting each jewel with unmatched detail, passion, and precision. Because true beauty lies in the hands that create it.
//           </motion.p>

//           {/* Grid Section */}
//           <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 mt-8">
//           {inView2 && (
//               <>
//                 {/* Counter Card 1 */}
//                 <motion.div
//                   className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center"
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <h2 className="text-4xl font-bold text-[#ff7785]">
//                     <CountUp start={0} end={2000} duration={2} separator="," />+
//                   </h2>
//                   <p className="text-gray-600 mt-2">Designs per Month</p>
//                 </motion.div>

//                 {/* Counter Card 2 */}
//                 <motion.div
//                   className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center"
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ duration: 0.7 }}
//                 >
//                   <h2 className="text-4xl font-bold text-[#36d9ff]">
//                     <CountUp start={0} end={100} duration={2} separator="," />+
//                   </h2>
//                   <p className="text-gray-600 mt-2 text-md">Clients Globally</p>
//                 </motion.div>

//                 {/* Counter Card 3 */}
//                 <motion.div
//                   className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center"
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ duration: 0.9 }}
//                 >
//                   <h2 className="text-4xl font-bold text-[#22883f]">
//                     <CountUp start={0} end={100} duration={2} separator="," />+
//                   </h2>
//                   <p className="text-gray-600 mt-2 text-md">Team Members</p>
//                 </motion.div>

//                 {/* Counter Card 4 */}
//                 <motion.div
//                   className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center"
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ duration: 1.1 }}
//                 >
//                   <h2 className="text-4xl font-bold text-[#6f36ff]">
//                     <CountUp start={0} end={50000} duration={2} separator="," />+
//                   </h2>
//                   <p className="text-center extrap">Sq. Ft</p>

//                   <p className="text-gray-600 text-sm mt-2">Manufacturing Area</p>
//                 </motion.div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>



//     </>
//   );
// };

// export default Homecount;

"use client"
import { useState, useEffect, useRef } from "react"
import "./homepassionate.css"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { useNavigate } from "react-router-dom"
import { useInView , motion } from "framer-motion"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const HomePassionate = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isVisible2, setIsVisible2] = useState(false)
  const [hoveredCircle, setHoveredCircle] = useState(null)
  const navigate = useNavigate()

   const ref = useRef(null);
  const isInView = useInView(ref, { once: false , amount: 0.3 }); // triggers when 30% visible, runs once

  const [openDialog, setOpenDialog] = useState(null); // 'diamond', 'cvd', 'metals', 'enamel'
const isMobile = window.innerWidth <= 768; // simple mobile check


  const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.6 } },
  hover: { scale: 1.05, rotate: 2, boxShadow: "0px 8px 20px rgba(0,0,0,0.2)" },
};

const dotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (customDelay) => ({
      opacity: 0.6,
      scale: 1,
      transition: { duration: 0.6, delay: customDelay, ease: "easeOut" },
    }),
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    const timer2 = setTimeout(() => setIsVisible2(true), 500)
    return () => {
      clearTimeout(timer)
      clearTimeout(timer2)
    }
  }, [])

  

  const materialData = {
  diamond: {
    title: "Diamond",
    subtitle: "Natural Diamonds",
    details:
      "Formed deep within the Earth over billions of years, natural diamonds are treasured for their unmatched rarity, brilliance, and timeless value. Available in round, princess, oval, cushion, and other popular cuts.",
    color: "from-blue-50 to-blue-100",
    textColor: "text-blue-900",
    borderColor: "border-blue-200",
  },
   colorstone: {
    title: "CVD",
    subtitle: "LabGrown Diamond",
    details:
      "A spectrum of vivid gemstones—fiery rubies, royal sapphires, lush emeralds, mystical amethysts, oceanic topaz, and rare tanzanites—each telling its own story of color and energy.",
    color: "from-emerald-50 to-emerald-100",
    textColor: "text-emerald-900",
    borderColor: "border-emerald-200",
  },
    metals: {
      title: "Metals",
      subtitle: "Gold • Platinum • Silver",
      details:
        "<b>Gold:</b> Available in 18K & 22K, offering a perfect balance of purity and strength, with yellow, white, and rose finishes.<br /><b>Platinum:</b> A rare, naturally white metal known for its durability, hypoallergenic properties, and timeless elegance.<br /><b>Silver:</b> Crafted from sterling silver, offering versatile designs with rhodium finishes for enhanced brilliance and tarnish resistance.<br />Each metal is ethically sourced and hallmarked for authenticity.",
      color: "from-yellow-50 to-yellow-100",
      textColor: "text-yellow-900",
      borderColor: "border-yellow-200",
    },
  enamel: {
    title: "Colorstones",
    subtitle: "Natural Colorstones",
    details:
    "<b>Emerald:</b> Known for its deep green hue, symbolizing growth, renewal, and luxury.<br /><b>Ruby:</b> Vibrant red stone representing passion, strength, and timeless elegance.<br /><b>Sapphire:</b> Ranging from royal blue to pastel shades, prized for wisdom, loyalty, and durability.<br /><b>Other Colorstones:</b> Traditional meenakari and contemporary enamel artistry bring bold reds, serene blues, deep greens, and pastel hues to life. Durable, glossy, and timelessly colorful.",
    color: "from-purple-50 to-purple-100",
    textColor: "text-purple-900",
    borderColor: "border-purple-200",
  },
}


  return (
    <>
      <div className="counterwraper font-sans laptop-view">
        <div className="relative min-h-[90vh] bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 opacity-20">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute border border-slate-300 animate-spin-slow ${
                    isVisible ? "opacity-30" : "opacity-0"
                  } transition-all duration-1000`}
                  style={{
                    width: Math.random() * 150 + 60,
                    height: Math.random() * 150 + 60,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    borderRadius: i % 3 === 0 ? "50%" : i % 3 === 1 ? "20%" : "0%",
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${Math.random() * 20 + 15}s`,
                  }}
                />
              ))}
            </div>

            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle, #475569 1px, transparent 1px)`,
                backgroundSize: "30px 30px",
              }}
            />

            <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute bg-gradient-to-r from-slate-200/30 to-slate-300/30 backdrop-blur-sm animate-float ${
                    isVisible ? "opacity-60" : "opacity-0"
                  } transition-all duration-1000`}
                  style={{
                    width: Math.random() * 80 + 40,
                    height: Math.random() * 80 + 40,
                    left: `${(i * 20) % 100}%`,
                    top: `${(i * 15) % 100}%`,
                    borderRadius: i % 2 === 0 ? "50%" : "12px",
                    border: "1px solid rgba(148, 163, 184, 0.3)",
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: `${Math.random() * 8 + 6}s`,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="eb-wrapper-outer eb-wrapper-75wa70h">
            <div className="eb-wrapper-inner">
              <div className="eb-wrapper-inner-blocks eb-wrapper-align-center">
                <div className="counterwraper eb-parent-eb-row-3dthkuo">
                  <div className="eb-row-wrapper">
                    <div className="eb-row-inner">
                      <div
                        className={`counterwraper eb-parent-eb-column-ezqpu3j wp-block-essential-blocks-column transform transition-all duration-1000 ${
                          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}
                      >
                          <motion.div
                          ref={ref}
                          className="space-y-6"
                          variants={containerVariants}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                        >
                          {/* Heading */}
                          <motion.div variants={itemVariants}>
                            <h1 className="text-4xl font-extrabold text-slate-800 leading-tight uppercase">
                              Design To <span className="text-slate-600">Jewelry</span> 
                            </h1>
                            <h1 className="text-4xl font-extrabold text-slate-900 leading-tight uppercase">
                              Perfection
                            </h1>
                          </motion.div>

                          {/* Paragraph */}
                          <motion.p variants={paragraphVariants} className="text-lg text-slate-600 leading-relaxed text-justify">
                            We at Ru-Brama specialize in working with natural diamonds, CVD-lab grown, natural colored stones, gold, platinum & silver.  All you need to do - share reference images, diamonds lot details & We deliver it all – from sketch to finished jewellery. Let us spark a little and make your brand shine brighter.
                          </motion.p>

                          {/* Button */}
                          <motion.button
                            variants={buttonVariants}
                            className="cursor-pointer px-8 py-3 bg-gradient-to-r from-slate-800 to-slate-900 text-white font-semibold text-lg rounded-full shadow-lg transition-all duration-300 ease-in-out transform"
                            onClick={() => navigate("/jewelry-manufacturing-process")}
                          >
                            Explore Collection
                          </motion.button>
                        </motion.div>
                      </div>

                      <div className="counterwraper eb-parent-eb-column-zrlittl flex justify-end wp-block-essential-blocks-column">
                        <div className="eb-column-wrapper eb-column-zrlittl">
                          <div className="eb-column-inner">
                            <div className="wp-block-essential-blocks-wrapper alignfull">
                              <div className="eb-wrapper-outer circle-wrapper eb-wrapper-1e3s2rc">
                                <div
                                  className={`blue-circle !bg-slate-100 !border-slate-300 transform transition-all duration-1200 ${
                                    isVisible ? "scale-100 rotate-0" : "scale-0 -rotate-180"
                                  }`}
                                />

                                <div
                                  className={`background-rectangle !bg-slate-900 transform transition-all duration-800 delay-300 ${
                                    isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
                                  }`}
                                >
                                  <div className="flex justify-center items-center animate-pulse">
                                    <div className="w-30 h-20 bg-slate-900 flex justify-center items-center flex-col text-white">
                                      <img
                                        src="/favicon-light.png"
                                        alt="Logo"
                                        className="w-10 h-10 object-contain hover:rotate-360 transition-transform duration-500"
                                      />
                                      <p className="text-sm text-center text-slate-200 my-1">
                                        Passionate About 
                                      </p>
                                    </div>
                                  </div>
                                </div>

                                {isVisible && (
                                  <>
                                  <Tooltip>
                                    <TooltipTrigger asChild>


                                    <div
                                      className={`small-circle top !bg-white !border-slate-200 relative transform transition-all duration-800 delay-400 hover:scale-110 hover:rotate-1 hover:shadow-lg cursor-pointer animate-float ${
                                        isVisible ? "scale-100 opacity-100 rotate-0" : "scale-0 opacity-0 -rotate-180"
                                      }`}
                                      
                                      onMouseEnter={() => setHoveredCircle("diamond")}
                                      onMouseLeave={() => setHoveredCircle(null)}
                                    >
                                      <div className="w-full h-full adjustsndm">
                                        <p className="!text-lg !text-slate-800 font-semibold">Diamond </p>
                                        <p className="!text-xs !text-slate-500">Natural Diamond </p>
                                        {/* <p className="!text-xs !text-slate-500">LabGrown Diamond</p> */}
                                      </div>
                                    </div>

                                    </TooltipTrigger>



                                      <TooltipContent className="max-w-xs p-4 ">
                                        <div className="space-y-2">
                                          <h3 className="font-bold text-sm ">
                                            {materialData.diamond.title}
                                          </h3>
                                          <p className="text-xs  opacity-80">
                                            {materialData.diamond.subtitle}
                                          </p>
                                          <p className="text-xs  opacity-70">
                                            {materialData.diamond.details}
                                          </p>
                                        </div>
                                      </TooltipContent>

                                  </Tooltip>

                                    <Tooltip> 
                                      <TooltipTrigger asChild>

                                    <div
                                      className={`small-circle bottom !bg-white !border-slate-200 relative transform transition-all duration-800 delay-600 hover:scale-110 hover:-rotate-1 hover:shadow-lg cursor-pointer animate-float ${
                                        isVisible ? "scale-100 opacity-100 rotate-0" : "scale-0 opacity-0 -rotate-180"
                                      }`}
                                      onMouseEnter={() => setHoveredCircle("colorstone")}
                                      onMouseLeave={() => setHoveredCircle(null)}
                                    >
                                      <div className="smabottom">
                                        <p className="!text-md text-center !text-slate-800 font-semibold">CVD</p>
                                         <p className="!text-xs !text-slate-500 text-center">LabGrown Diamond </p>
                                        
                                      </div>
                                    </div>
                                      </TooltipTrigger>


                                      <TooltipContent className="max-w-xs p-4 ">
                                        <div className="space-y-2">
                                          <h3 className="font-bold text-sm">
                                            {materialData.colorstone.title}
                                          </h3>
                                          <p className="text-xs opacity-80">
                                            {materialData.colorstone.subtitle}
                                          </p>
                                          <p className="text-xs opacity-70" dangerouslySetInnerHTML={{ __html: materialData.colorstone.details }}>
                                            
                                          </p>
                                        </div>
                                      </TooltipContent>
                                      
                                    </Tooltip>
                                      
                                    <Tooltip> 
                                       <TooltipTrigger asChild>



                                    <div
                                      className={`small-circle !flex-col left !bg-white !border-slate-200 relative transform transition-all duration-800 delay-800 hover:scale-110 hover:rotate-1 hover:shadow-lg cursor-pointer animate-float ${
                                        isVisible ? "scale-100 opacity-100 rotate-0" : "scale-0 opacity-0 -rotate-180"
                                      }`}
                                      onMouseEnter={() => setHoveredCircle("metals")}
                                      onMouseLeave={() => setHoveredCircle(null)}
                                    >
                                      <p className="!text-slate-800 font-semibold text-center !text-md">Metals</p>
                                     <div className="flex flex-wrap justify-center gap-x-2 mt-1">
                                      <p className="!text-xs !text-slate-500 flex items-center gap-0.5">
                                        <span className="w-1 h-1 bg-slate-500 rounded-full"></span> Gold
                                      </p>
                                      
                                      <p className="!text-xs !text-slate-500 flex items-center gap-0.5">
                                        <span className="w-1 h-1 bg-slate-500 rounded-full"></span> Platinum
                                      </p>
                                      <p className="!text-xs !text-slate-500 flex items-center gap-0.5">
                                        <span className="w-1 h-1 bg-slate-500 rounded-full"></span> Silver
                                      </p>
                                    </div>
                                    </div>

                                       </TooltipTrigger>



                                         <TooltipContent className="max-w-xs p-4 ">
                                        <div className="space-y-2">
                                          <h3 className="font-bold text-sm ">
                                            {materialData.metals.title}
                                          </h3>
                                          <p className="text-xs  opacity-80">
                                            {materialData.metals.subtitle}
                                          </p>
                                          <p
                                          className="text-xs opacity-70"
                                          dangerouslySetInnerHTML={{ __html: materialData.metals.details }}
                                        ></p>
                                        </div>
                                      </TooltipContent>
                                      
                                      </Tooltip>

                                         <Tooltip> 
                                       <TooltipTrigger asChild>

                                    <div
                                      className={`small-circle right !bg-white !border-slate-200 relative transform transition-all duration-800 delay-1000 hover:scale-110 hover:-rotate-1 hover:shadow-lg cursor-pointer animate-float ${
                                        isVisible ? "scale-100 opacity-100 rotate-0" : "scale-0 opacity-0 -rotate-180"
                                      }`}
                                      onMouseEnter={() => setHoveredCircle("enamel")}
                                      onMouseLeave={() => setHoveredCircle(null)}
                                    >
                                      <div className="smaright">
                                        <p className="!text-slate-800 font-semibold text-center !text-md">Natural</p>
                                        <p className="!text-xs !text-slate-500 text-center">ColorStones</p>
                                      </div>
                                    </div>
                                        </TooltipTrigger>



                                      <TooltipContent className="max-w-xs p-4 ">
                                        <div className="space-y-2">
                                          <h3 className="font-bold text-sm ">
                                            {materialData.enamel.title}
                                          </h3>
                                          <p className="text-xs  opacity-80">
                                            {materialData.enamel.subtitle}
                                          </p>
                                          <p className="text-xs  opacity-70" dangerouslySetInnerHTML={{ __html: materialData.enamel.details }}>
                                            
                                          </p>
                                        </div>
                                      </TooltipContent>
                                        </Tooltip>

                                  </>
                                )}

                                <motion.div
                                variants={dotVariants}
                                custom={0}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.3, once: false }}
                                  className={`small-circle new-circle-1 !bg-slate-300 transform transition-all duration-600 delay-1200 ${
                                    isVisible ? "scale-100 opacity-60" : "scale-0 opacity-0"
                                  }`}
                                />
                                <motion.div
                                  variants={dotVariants}
                                  custom={0.2}
                                  initial="hidden"
                                  whileInView="visible"
                                  viewport={{ amount: 0.3, once: false }}
                                  className={`small-circle new-circle-2 !bg-slate-400 transform transition-all duration-600 delay-1400 ${
                                    isVisible ? "scale-100 opacity-60" : "scale-0 opacity-0"
                                  }`}
                                />
                                <motion.div
                                 variants={dotVariants}
                                  custom={0.4}
                                  initial="hidden"
                                  whileInView="visible"
                                  viewport={{ amount: 0.3, once: false }}
                                  className={`small-circle new-circle-3 !bg-slate-500 transform transition-all duration-600 delay-1600 ${
                                    isVisible ? "scale-100 opacity-60" : "scale-0 opacity-0"
                                  }`}
                                />
                                <motion.div
                                  variants={dotVariants}
                                  custom={0.6}
                                  initial="hidden"
                                  whileInView="visible"
                                  viewport={{ amount: 0.3, once: false }}
                                  className={`small-circle new-circle-4 !bg-slate-600 transform transition-all duration-600 delay-1800 ${
                                    isVisible ? "scale-100 opacity-60" : "scale-0 opacity-0"
                                  }`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

       <div className="counterwraper-mobile font-sans flex items-center justify-center">
        <div className="eb-wrapper-outer eb-wrapper-75wa70hmob w-full max-w-4xl flex items-center justify-center p-5 bg-gradient-to-r from-slate-50 to-slate-100 relative">
          <div className="space-y-6 text-center relative z-10 p-4 lg:px-8">
            <div
              className={`transform transition-all duration-800 delay-300 ${
                isVisible2 ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
              }`}
            >
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-800 leading-tight uppercase">
               Design To Jewelry
             </h1>
             <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-black leading-tight uppercase">
               Perfection
             </h1>
            </div>

            <p
              className={`text-sm sm:text-base lg:text-lg xl:text-xl text-slate-600 leading-relaxed transform transition-all duration-800 delay-500 ${
                isVisible2 ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
              }`}
            >
             We at Ru-Brama specialize in working with natural diamonds, CVD-lab grown, natural colored stones, gold, platinum & silver.  All you need to do - share reference images, diamonds lot details & We deliver it all – from sketch to finished jewellery. Let us spark a little and make your brand shine brighter.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8 mb-8">
              {isVisible2 && (
                <>
                 {/* Diamond */}
                <div
                  className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center border border-slate-200 transform transition-all duration-600 delay-200 hover:scale-105 hover:shadow-xl cursor-pointer"
                  onClick={() => isMobile && setOpenDialog("diamond")}
                >
                  <h3 className="text-md sm:text-xl font-bold text-slate-800 mb-2">Diamond</h3>
                  <p className="text-xs sm:text-sm text-slate-500 text-center">Natural Diamond</p>
                </div>

            {/* CVD */}
              <div
                className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center border border-slate-200 transform transition-all duration-600 delay-400 hover:scale-105 hover:shadow-xl cursor-pointer"
                onClick={() => isMobile && setOpenDialog("cvd")}
              >
                <h3 className="text-md sm:text-xl font-bold text-slate-800 mb-2">CVD</h3>
                <p className="text-xs sm:text-sm text-slate-500 text-center">LabGrown Diamond</p>
              </div>

              {/* Metals */}
              <div
                className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center border border-slate-200 transform transition-all duration-600 delay-600 hover:scale-105 hover:shadow-xl cursor-pointer"
                onClick={() => isMobile && setOpenDialog("metals")}
              >
                <h3 className="text-md sm:text-xl font-bold text-slate-800 mb-2">Metals</h3>
                <div className="flex gap-1.5">
                  <p className="!text-xs !text-slate-500 flex items-center gap-0.5"><span className="w-1 h-1 bg-slate-500 rounded-full"></span> Gold</p>
                  <p className="!text-xs !text-slate-500 flex items-center gap-0.5"><span className="w-1 h-1 bg-slate-500 rounded-full"></span> Platinum</p>
                  <p className="!text-xs !text-slate-500 flex items-center gap-0.5"><span className="w-1 h-1 bg-slate-500 rounded-full"></span> Silver</p>
                </div>
              </div>

            {/* Enamel */}
                <div
                  className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center border border-slate-200 transform transition-all duration-600 delay-800 hover:scale-105 hover:shadow-xl cursor-pointer"
                  onClick={() => isMobile && setOpenDialog("enamel")}
                >
                  <h3 className="text-md sm:text-xl font-bold text-slate-800 mb-2">Natural</h3>
                  <p className="text-xs sm:text-sm text-slate-500 text-center">ColorStones</p>
                </div>
                      </>
                    )}
                  </div>

                  <button
                    className={`cursor-pointer px-8 py-3 bg-gradient-to-r from-slate-800 to-slate-900 text-white font-semibold text-lg rounded-full shadow-lg hover:from-slate-700 hover:to-slate-800 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out transform ${
                      isVisible2 ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                    }`}
                    style={{ transitionDelay: "1000ms" }}
                    onClick={()=>{navigate("/jewelry-manufacturing-process")}}
                  >
                    Explore Manufacturing
                  </button>
                  {isMobile && openDialog && (
                  <Dialog open={true} onOpenChange={() => setOpenDialog(null)}>
                    <DialogContent className="p-4 rounded-lg max-w-sm mx-auto  bg-white shadow-xl">
                      <h3 className="font-bold text-lg mb-2">
                        {openDialog === "diamond" && "Diamond"}
                        {openDialog === "cvd" && "CVD"}
                        {openDialog === "metals" && "Metals"}
                        {openDialog === "enamel" && "Natural ColorStones"}
                      </h3>
                      <p
                        className="text-sm"
                        dangerouslySetInnerHTML={{
                          __html:
                            openDialog === "diamond"
                              ? materialData.diamond.details
                              : openDialog === "cvd"
                              ? materialData.colorstone.details
                              : openDialog === "metals"
                              ? materialData.metals.details
                              : materialData.enamel.details,
                        }}
                      ></p>

                      <Button
                        className="mt-4 px-4 py-2 cursor-pointer"
                        onClick={() => setOpenDialog(null)}
                      >
                        Close
                      </Button>
                    </DialogContent>
                  </Dialog>
                )}
                </div>
              </div>
        

      </div>
    </>
  )
}

export default HomePassionate
