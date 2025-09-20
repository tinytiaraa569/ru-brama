"use client"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"
import whitelogo from './whilelogo.png'

const Footer = () => {
  const navigate = useNavigate()

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Manufacturing", href: "/jewelry-manufacturing-process" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <footer className="relative overflow-hidden bg-black text-white">

        {/* Animated background shapes */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-gray-500 opacity-20 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-gray-500 opacity-20"
          animate={{
            borderRadius: ["0%", "50%", "0%"],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>
      <motion.div
        className="max-w-7xl mx-auto px-6 py-12  relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {/* Section 1: Logo and Description */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <motion.div
              className="flex items-center space-x-3 cursor-pointer mb-4"
              onClick={() => navigate("/")}
              
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <div className="w-10 h-10  rounded-full flex items-center justify-center">
                  <img src={whitelogo} alt="" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Ru-Brama</h3>
                <div className="text-xs text-gray-300">Retail Pvt Ltd</div>
              </div>
            </motion.div>
            <p className="text-gray-300 text-sm leading-relaxed">
              From design to final polish, each stage of creation is perfected with precision, passion, and artistry.
            </p>
          </motion.div>

          {/* Section 2: Menu Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <motion.li key={item.name} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <a href={item.href} className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Section 3: Company Details */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <div className="space-y-3">
              <motion.div
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                    Plot F-11 & 12-1, Second Floor,
                     <br />
                     Admin Bldg.,  MIDC (Marol),
                     <br />

                    Opp. Seepz Main Gate,
                     <br />

                    WICEL, Andheri(East), Mumbai-400093.
                 
                </p>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <a href="mailto:sanjay@ru_brama.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                  sanjay@ru_brama.com
                </a>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <a href="tel:+918657062519" className="text-gray-300 hover:text-white transition-colors text-sm">
                  +91 86570 62519
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Section 4: Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
            <div className="space-y-3">
              <motion.a
                href="#"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                whileHover={{ x: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm">Instagram</span>
              </motion.a>

              <motion.a
                href="#"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                whileHover={{ x: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Facebook className="w-5 h-5" />
                <span className="text-sm">Facebook</span>
              </motion.a>

              <motion.a
                href="mailto:sanjay@ru_brama.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                whileHover={{ x: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">Email</span>
              </motion.a>

              <motion.a
                href="tel:+918657062519"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                whileHover={{ x: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm">Call Us</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Section 5: Copyright */}
        <motion.div variants={itemVariants} className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Ru-Brama Retail Pvt Ltd. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer
