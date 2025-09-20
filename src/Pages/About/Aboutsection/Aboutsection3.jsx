import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {  ArrowRight, CheckCircle } from "lucide-react"
import aboutsec2img from "./aboutsec2.jpg"
import { useNavigate } from "react-router-dom"


const Aboutsection3 = () => {
  const navigate = useNavigate()
 

  const features = [
    "Advanced CAD/CAM Technology",
    "Precision Casting Equipment",
    "Multi-stage Quality Control",
    "Export Documentation",
    "Custom Design Capabilities",
    "Sustainable Practices",
  ]

  return (
    <div className='py-8 sm:py-16 bg-gradient-to-br from-background via-card to-muted overflow-hidden'>
      <div className="container mx-auto px-4 pb-5">

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img
                src={aboutsec2img || "/placeholder.svg"}
                alt="Modern Manufacturing Facility"
                className="rounded-2xl shadow-2xl w-full h-[50vh] sm:h-[60vh] md:h-[70vh] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-foreground">Export Quality Standards</h3>
            <p className="text-lg text-muted-foreground text-pretty">
              Every piece undergoes rigorous quality control processes, ensuring our jewelry meets international export
              standards and exceeds customer expectations worldwide.
            </p>

            <div className="grid grid-cols-1 gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Button size="lg" className="mt-8 group cursor-pointer" onClick={()=>{navigate("/jewelry-manufacturing-process")}}>
              Explore Our Process
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>

    </div>
  )
}

export default Aboutsection3