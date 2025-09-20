// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { Menu, X, Phone, Mail } from "lucide-react"
// import blacklogo from './Images/blacklogo.png'
// import { Link, useLocation } from "react-router-dom"


// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)
//    const location = useLocation()

//   const menuItems = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { name: "Resources", href: "#" },
//     { name: "Company", href: "#" },
//     { name: "Contact", href: "#" },
//   ]

//   return (
//     <div className="sticky top-0 left-0 right-0 z-50">

//       {/* Main Navigation - Slide in from left */}
//       <motion.nav
//         initial={{ x: -100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="bg-background border-b border-border shadow-sm "
//       >
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between h-16">
//             {/* Logo */}
//             <motion.div  className="flex items-center space-x-3 cursor-pointer">
//                <div className="w-10 h-10  flex items-center justify-center">
//                <img src={blacklogo} alt="" />
//              </div>
//               <div>
//                 <h3 className="text-xl font-bold text-foreground">Ru-Brama</h3>
//                 <div className="text-xs text-muted-foreground">Retail Pvt Ltd</div>
//               </div>
//             </motion.div>

//             {/* Desktop Menu */}
//           <div className="hidden lg:flex items-center space-x-8">
//               {menuItems.map((item, index) => {
//                 const isActive = location.pathname === item.href
//                 return (
//                   <motion.div
//                     key={item.name}
//                     initial={{ opacity: 0, x: -30 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{
//                       delay: index * 0.15 + 0.3,
//                       type: "spring",
//                       stiffness: 100,
//                     }}
//                     whileHover={{ scale: 1.05 }}
//                   >
//                     <Link
//                       to={item.href}
//                       className={`relative font-medium transition-all duration-300 py-1 
//                         ${isActive ? "text-primary" : "text-foreground hover:text-primary"}
//                         before:content-[''] before:absolute before:bottom-0 before:left-0 
//                         before:w-0 before:h-0.5 before:bg-primary before:transition-all before:duration-300
//                         ${isActive ? "before:w-full" : "hover:before:w-full"}
//                       `}
//                     >
//                       {item.name}
//                     </Link>
//                   </motion.div>
//                 )
//               })}
//             </div>

//             {/* CTA Buttons */}
//             <div className="hidden md:flex items-center space-x-4">
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.9, type: "spring" }}
//               >
//                 <Button variant="outline" size="sm">
//                   Login
//                 </Button>
//               </motion.div>
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 1.0, type: "spring" }}
//               >
//                 <Button size="sm">Get Demo</Button>
//               </motion.div>
//             </div>

//             {/* Mobile Menu Button */}
//             <motion.button
//               whileTap={{ scale: 0.9, rotate: 180 }}
//               onClick={() => setIsOpen(!isOpen)}
//               className="lg:hidden p-2"
//             >
//               {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </motion.button>
//           </div>

//           {/* Mobile Menu - Fixed: Changed motion.link to motion.a */}
//           <AnimatePresence>
//             {isOpen && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 exit={{ opacity: 0, height: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="lg:hidden border-t border-border overflow-hidden"
//               >
//                 <div className="py-4 space-y-2">
//                 {menuItems.map((item, index) => {
//                     const isActive = location.pathname === item.href
//                     return (
//                     <motion.div
//                         key={item.name}
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: index * 0.1 }}
//                         whileHover={{
//                         x: 8,
//                         color: "hsl(var(--primary))",
//                         transition: { duration: 0.2 },
//                         }}
//                     >
//                         <Link
//                         to={item.href}
//                         onClick={() => setIsOpen(false)} // ✅ closes sidebar
//                         className={`block px-4 py-3 rounded transition-colors font-medium ${
//                             isActive
//                             ? "text-primary bg-muted" // ✅ active styling
//                             : "text-foreground hover:text-primary hover:bg-muted"
//                         }`}
//                         >
//                         {item.name}
//                         </Link>
//                     </motion.div>
//                     )
//                 })}
//                 <div className="flex flex-col space-y-2 px-4 pt-4">
//                     <Button variant="outline" size="sm" onClick={() => setIsOpen(false)}>
//                     Login
//                     </Button>
//                     <Button size="sm" onClick={() => setIsOpen(false)}>
//                     Get Demo
//                     </Button>
//                 </div>
//             </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </motion.nav>
//     </div>
//   )
// }

// export default Navbar


"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import blacklogo from './Images/blacklogo.png'
import { GetStartedDialog } from "../GetStarted/GetStarted"


function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Manufacturing", href: "/jewelry-manufacturing-process" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      <div className="sticky top-0 left-0 right-0 z-50 ">
        {/* Main Navigation - Slide in from left */}
        <motion.nav
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-background border-b border-border shadow-sm py-[2px]"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <motion.div className="flex items-center space-x-3 cursor-pointer" onClick={()=>navigate("/")}>
                <div className="w-10 h-10 flex items-center justify-center">
                  <img src={blacklogo} alt="Ru-Brama Logo" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Ru-Brama</h3>
                  <div className="text-xs text-muted-foreground">Retail Pvt Ltd</div>
                </div>
              </motion.div>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center space-x-8">
                {menuItems.map((item, index) => {
                  const isActive = location.pathname === item.href
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.15 + 0.3,
                        type: "spring",
                        stiffness: 100,
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Link
                        to={item.href}
                        className={`relative font-medium transition-all duration-300 py-1 
                          ${isActive ? "text-primary" : "text-foreground hover:text-primary"}
                          before:content-[''] before:absolute before:bottom-0 before:left-0 
                          before:w-0 before:h-0.5 before:bg-primary before:transition-all before:duration-300
                          ${isActive ? "before:w-full" : "hover:before:w-full"}
                        `}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  )
                })}
              </div>

              {/* CTA Buttons */}
              <div className="hidden md:flex items-center space-x-4">
                {/* <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, type: "spring" }}
                >
                  <Button variant="outline" size="sm" className="cursor-pointer">
                    Login
                  </Button>
                </motion.div> */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.0, type: "spring" }}
                >
                  <GetStartedDialog>

                  <Button size="lg" className="cursor-pointer px-4">Get Started</Button>
                  </GetStartedDialog>
                </motion.div>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.9, rotate: 180 }}
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 relative z-50"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </motion.nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 left-0 h-full  w-full sm:w-96 bg-background border-r border-border shadow-xl z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Sidebar Header */}
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <img src={blacklogo} alt="Ru-Brama Logo" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">Ru-Brama</h3>
                      <div className="text-xs text-muted-foreground">Retail Pvt Ltd</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="p-2">
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 py-6">
                  <nav className="space-y-2 px-4">
                    {menuItems.map((item, index) => {
                      const isActive = location.pathname === item.href
                      return (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.1 }}
                        >
                          <Link
                            to={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                              isActive
                                ? "text-primary bg-primary/10 border-l-4 border-primary"
                                : "text-foreground hover:text-primary hover:bg-muted"
                            }`}
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      )
                    })}
                  </nav>
                </div>

                {/* CTA Buttons */}
                <div className="p-4 border-t border-border space-y-3">
                  {/* <Button variant="outline" className="w-full bg-transparent" onClick={() => setIsOpen(false)}>
                    Login
                  </Button> */}
                  <Button className="w-full" onClick={() => setIsOpen(false)}>
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
