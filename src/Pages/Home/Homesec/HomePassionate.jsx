import React from 'react'

const HomePassionate = () => {
  return (
    <div className='w-full h-[90vh] flex justify-center items-center min-h-auto bg-gradient-to-br from-muted/50 via-white/60 to-muted/40 dark pb-10'>

        <div className='w-[200px] h-[200px] rounded-full bg-black flex justify-center items-center flex-col text-white'>
            <img src="/favicon-light.png" alt="" className='w-20 h-20 object-contain'/>
            <p>Ru-Brama Pvt Ltd</p>
        </div>
    </div>
  )
}

export default HomePassionate


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
//                               <div className="background-rectangle">
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
//                                       <h1><CountUp start={0} end={2000} duration={3} />+</h1>
//                                       <p className='text-xs'>Designs per Month</p>
//                                     </motion.div>
//                                   </div>

//                                   <div className="small-circle bottom">
//                                     <motion.div className='smabottom' whileHover={{ scale: 1.1 }}>
//                                       <h1 className='text-center'><CountUp start={0} end={50000} duration={3} />+</h1>
//                                       <p className="text-center extrap">Sq. Ft</p>
//                                       <p className='text-center'> Manufacturing Area </p>
//                                     </motion.div>
//                                   </div>

//                                   <div className="small-circle left">
//                                     <motion.div className='smaleft text-center' whileHover={{ scale: 1.1 }}>
//                                       <h1><CountUp start={0} end={100} duration={3} />+</h1>
//                                       <p> Clients Globally</p>
//                                     </motion.div>
//                                   </div>

//                                   <div className="small-circle right">
//                                     <motion.div className='smaright' whileHover={{ scale: 1.1 }}>
//                                       <h1><CountUp start={0} end={1000} duration={3} />+</h1>
//                                       <p>Team Members</p>
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
