"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import contactsec1img from './workshop.png'
import { useNavigate } from "react-router-dom"
import { GetStartedDialog } from "@/Pages/GetStarted/GetStarted"

const ContactSection1 = () => {
  const navigate = useNavigate()

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
          src={contactsec1img}
          alt="Luxury jewelry production workshop"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Animated Black Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />

        {/* Sliding Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1.8, delay: 0.5, ease: "easeInOut" }}
        />

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Badge
              variant="secondary"
              className="mb-2 sm:mb-4 text-sm font-medium bg-white/10 text-white border-white/20"
            >
              Get In Touch
            </Badge>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance text-white">
              Let's Create Something
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Extraordinary
              </span>
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-gray-200 mb-8 text-pretty max-w-3xl mx-auto">
              Ready to transform your precious materials into stunning jewelry? Contact our master craftsmen to discuss
              your custom jewelry production needs.
            </p>

            {/* Contact Info Cards */}
            <motion.div
              className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 hidden lg:grid"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              {[
                { icon: Phone, title: "Call Us", info: "+91 8657062519", delay: 0 },
                { icon: Mail, title: "Email", info: "sanjay@ru_brama.com", delay: 0.1 },
                { icon: MapPin, title: "Visit Us", info: "Andheri East, Mumbai", delay: 0.2 },
                { icon: Clock, title: "Hours", info: "Mon-Fri 9AM-6PM", delay: 0.3 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.5 + item.delay }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                >
                  <item.icon className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                  <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-300 text-xs">{item.info}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <GetStartedDialog>

                <Button className="cursor-pointer text-sm sm:text-md px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600 font-semibold">
                  Start Your Project
                </Button>
                </GetStartedDialog>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                onClick={()=>{navigate("/gallery")}}
                  variant="outline"
                  className="cursor-pointer text-sm sm:text-md px-6 py-3 sm:px-8 sm:py-4 border-white/30 text-white hover:bg-white/80 bg-transparent"
                >
                  View Our Work
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements Animation */}
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full opacity-60"
          animate={{
            y: [0, -20, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 right-16 w-3 h-3 bg-yellow-300 rounded-full opacity-40"
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.section>
    </div>
  )
}

export default ContactSection1
