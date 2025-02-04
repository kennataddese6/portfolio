"use client"
import { LampContainer } from "@/components/ui/lamp"
import { motion } from "framer-motion"
import "../globals.css"

export default function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Bring ideas to life <br /> in no time
      </motion.h1>
    </LampContainer>
  )
}
