"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail } from "lucide-react"

const revealVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const slideReveal = {
    hidden: {
      opacity: 0,
      x: -100,
      clipPath: "inset(0 100% 0 0)",
    },
    visible: {
      opacity: 1,
      x: 0,
      clipPath: "inset(0 0% 0 0)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }



const ContactInformation = () => {
  return (
    <div className="pb-10">
         {/* Contact Information */}
        <motion.section 
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
         className="py-6 sm:py-8 md:py-12 px-6">
          <div className="text-center mb-8 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5 }}
            className="text-lg sm:text-2xl md:text-4xl font-bold text-foreground mb-1"
          >
            {"Information".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>
          
          <motion.p variants={slideReveal} className="text-sm sm:text-md text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover exceptional service with our dedicated team. We're committed to providing you with outstanding
            support and solutions.
          </motion.p>
        </div>

          <motion.div 
        variants={revealVariants} className="grid md:grid-cols-3 gap-12 text-center">
          <motion.div
            variants={slideReveal}
           
            className="relative bg-card rounded-xl p-6  overflow-hidden group cursor-pointer"
          >
            <a href="tel:+918657062519">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 "
              transition={{ duration: 0.3 }}
            />
            <motion.div
              
              transition={{ duration: 0.3 }}
            >
              <Phone className="w-8 h-8 mx-auto mb-4 text-primary relative z-10" />
            </motion.div>
            <h3 className="text-lg font-light text-foreground mb-2 relative z-10">Phone</h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-muted-foreground font-light relative z-10"
            >
              +91 86570 62519
            </motion.p>
            </a>
          </motion.div>

          <motion.div
            variants={slideReveal}
           
            className="relative bg-card rounded-xl p-6  overflow-hidden group cursor-pointer"
          >
          <a href="mailto:sanjay@ru_brama.com">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 "
              transition={{ duration: 0.3 }}
            />

            <motion.div
              
              transition={{ duration: 0.3 }}
            >
              <Mail className="w-8 h-8 mx-auto mb-4 text-primary relative z-10" />
            </motion.div>
            <h3 className="text-lg font-light text-foreground mb-2 relative z-10">Email</h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-muted-foreground font-light relative z-10"
            >
              sanjay@ru_brama.com
            </motion.p>
            </a>
          </motion.div>


          <motion.div
            variants={slideReveal}
           
            className="relative bg-card rounded-xl p-6  overflow-hidden group cursor-pointer"
          >
              <a
              href="https://www.google.com/maps?q=Administration+Building,+WICEL,+Plot+No+F-11%2612,+MIDC+Central+Rd,+opposite+SEEPZ,+Andheri+East,+Mumbai,+Maharashtra+400093"
              target="_blank"
              rel="noopener noreferrer"
            >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 "
              transition={{ duration: 0.3 }}
            />
            <motion.div
             
              transition={{ duration: 0.3 }}
            >
              <MapPin className="w-8 h-8 mx-auto mb-4 text-primary relative z-10" />
            </motion.div>
            <h3 className="text-lg font-light text-foreground mb-2 relative z-10">Location</h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-muted-foreground font-light text-sm leading-relaxed relative z-10"
            >
              MIDC Marol, Andheri East, Mumbai
            </motion.p>
            </a>
          </motion.div>
        </motion.div>
        </motion.section>

       
    </div>
  )
}

export default ContactInformation