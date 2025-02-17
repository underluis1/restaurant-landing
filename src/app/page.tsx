"use client"

import { motion } from "framer-motion"
import Hero from "@/components/Hero"
import About from "@/components/About"
import FeaturedDishes from "@/components/FeaturedDishes"
import Menu from "@/components/Menu"
import Reviews from "@/components/Reviews"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      <Hero />
      <About />
      <FeaturedDishes />
      <Menu />
      <Reviews />
      <Contact />
      <Footer />
    </motion.main>
  )
}

