
"use client"

import { motion } from "framer-motion"
import { Crown, Rocket, Shield, Clock } from "lucide-react"

const benefits = [
  {
    icon: Crown,
    title: "Focus on Growth",
    description:
      "You concentrate on building your brand, marketing, and sales while we manage the rest.",
  },
  {
    icon: Rocket,
    title: "No Production Hassles",
    description:
      "Free yourself from manufacturing worries, team coordination, and operational complexity.",
  },
  {
    icon: Shield,
    title: "Trusted Professional Team",
    description:
      "Work with our experienced professionals who ensure uniform quality and customer satisfaction.",
  },
  {
    icon: Clock,
    title: " On-Time Delivery",
    description:
      "We guarantee timely delivery, consistent standards, and the ability to handle customer orders.",
  },
]


 function HomeBenefits() {
  return (
    <section className="relative py-4 lg:py-10 bg-white overflow-hidden">
      {/* Black SVG Background Shapes */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 opacity-5"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            fill="#000000"
            d="M25.2,-41.8C32.4,-35.2,37.8,-27.4,42.1,-18.8C46.4,-10.2,49.6,-0.8,48.9,8.2C48.2,17.2,43.6,25.8,37.2,32.8C30.8,39.8,22.6,45.2,13.8,47.4C5,49.6,-4.4,48.6,-13.2,45.8C-22,43,-30.2,38.4,-36.8,31.8C-43.4,25.2,-48.4,16.6,-49.8,7.4C-51.2,-1.8,-49,-11.6,-44.6,-20.2C-40.2,-28.8,-33.6,-36.2,-25.8,-42.4C-18,-48.6,-9,-53.6,0.2,-53.9C9.4,-54.2,18.8,-49.8,25.2,-41.8Z"
            transform="translate(50 50)"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 opacity-3"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            fill="#1f2937"
            d="M39.4,-67.8C50.7,-60.5,59.4,-48.4,65.8,-35.2C72.2,-22,76.3,-7.7,75.9,6.4C75.5,20.5,70.6,34.4,62.4,46.2C54.2,58,42.7,67.7,29.8,73.2C16.9,78.7,2.6,80,-12.1,79.8C-26.8,79.6,-41.9,78,-54.4,71.8C-66.9,65.6,-76.8,54.8,-82.4,42.2C-88,29.6,-89.3,15.2,-86.8,1.8C-84.3,-11.6,-78,-24,-68.9,-34.8C-59.8,-45.6,-47.9,-54.8,-35.2,-61.4C-22.5,-68,-9.1,-72,5.2,-80.2C19.5,-88.4,28.1,-75.1,39.4,-67.8Z"
            transform="translate(50 50)"
          />
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-4 sm:mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-xl sm:text-3xl font-bold text-balance">Jewelry Excellence</h2>
          <p className="text-sm sm:text-lg text-muted-foreground text-pretty">
            Transform your jewelry business with our premium manufacturing partnership
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column - 2 Cards */}
          <div className="lg:col-span-3 space-y-5">
            {benefits.slice(0, 2).map((benefit, index) => (
              <motion.div
                key={index}
                className="cursor-pointer group relative p-6 bg-white border-2 border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl hover:border-black/20 transition-all duration-500"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-black/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Image Section */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div
              className="relative w-full max-w-md h-96 lg:h-[500px]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
            >
              {/* Background SVG Shape */}
              <motion.div
                className="absolute inset-0 -z-10 scale-110"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <svg viewBox="0 0 200 200" className="w-full h-full opacity-8">
                  <path
                    fill="#374151"
                    d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16,88.1,-0.2C86.2,15.6,79.8,30.6,70.8,43.2C61.8,55.8,50.2,66,36.8,72.8C23.4,79.6,8.2,83,-7.8,83.8C-23.8,84.6,-40.6,82.8,-54.2,76.2C-67.8,69.6,-78.2,58.2,-84.4,44.6C-90.6,31,-92.6,15.2,-89.8,0.6C-87,-14,-79.4,-27.8,-69.8,-39.4C-60.2,-51,-48.6,-60.4,-35.8,-68.2C-23,-76,-9,-82.2,4.2,-89.4C17.4,-96.6,30.6,-83.6,44.7,-76.4Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </motion.div>

              {/* Overlapping Images */}
              <motion.div
                className="cursor-pointer absolute top-0 left-0 w-3/4 h-3/5 rounded-3xl overflow-hidden shadow-2xl border-4 border-black/80"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://cdn.shopaccino.com/kosh/images/polishing1-679907.jpg"
                  alt="Jewelry display"
                  className="w-full h-full object-cover"
                />
                 {/* Multi-layer Shimmer Effect */}
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
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/20 to-transparent -skew-x-12"
                    initial={{ x: "-150%" }}
                    animate={{ x: "250%" }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 5,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  />
              </motion.div>

              <motion.div
                className="cursor-pointer absolute bottom-0 right-0 w-3/4 h-3/5 rounded-3xl overflow-hidden shadow-2xl border-4 border-black/80"
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://cdn.shopaccino.com/kosh/images/polishing2-951042.jpg"
                  alt="Jewelry crafting"
                  className="w-full h-full object-cover"
                />

                 {/* Multi-layer Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
                    initial={{ x: "-150%" }}
                    animate={{ x: "250%" }}
                    transition={{
                      duration: 2.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 6,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-300/20 to-transparent -skew-x-12"
                    initial={{ x: "-150%" }}
                    animate={{ x: "250%" }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 7,
                      ease: "easeInOut",
                      delay: 1.5,
                    }}
                  />
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - 2 Cards */}
          <div className="lg:col-span-3 space-y-5">
            {benefits.slice(2, 4).map((benefit, index) => (
              <motion.div
                key={index + 2}
                className="cursor-pointer group relative p-6 bg-white border-2 border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl hover:border-black/20 transition-all duration-500"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-black/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


export default HomeBenefits