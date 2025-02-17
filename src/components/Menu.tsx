"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const menuCategories = ["Antipasti", "Primi", "Secondi", "Dessert"]

const menuItems = {
  Antipasti: [
    { name: "Bruschetta", price: "€8" },
    { name: "Caprese", price: "€10" },
  ],
  Primi: [
    { name: "Spaghetti alla Carbonara", price: "€14" },
    { name: "Risotto ai Funghi", price: "€16" },
  ],
  Secondi: [
    { name: "Filetto di Manzo", price: "€24" },
    { name: "Branzino al Forno", price: "€22" },
  ],
  Dessert: [
    { name: "Tiramisu", price: "€8" },
    { name: "Panna Cotta", price: "€7" },
  ],
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0])

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Il Nostro Menu</h2>
        <div className="flex justify-center mb-8">
          {menuCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`mx-2 px-4 py-2 rounded-full ${
                activeCategory === category ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            {menuItems[activeCategory].map((item) => (
              <div key={item.name} className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-lg">{item.price}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

