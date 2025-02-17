"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Maria Rossi",
    text: "Un'esperienza culinaria straordinaria! I piatti sono deliziosi e il servizio è impeccabile.",
  },
  {
    id: 2,
    name: "Luca Bianchi",
    text: "Atmosfera accogliente e cibo fantastico. Tornerò sicuramente!",
  },
  {
    id: 3,
    name: "Giulia Verdi",
    text: "Il miglior ristorante della città. Ogni visita è un piacere per il palato.",
  },
]

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0)

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Cosa Dicono i Nostri Clienti</h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevReview}
              className="mr-6 bg-black text-white p-3 rounded-full shadow-lg transition-colors duration-300 hover:bg-gray-800 focus:outline-none"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="flex-grow bg-white p-8 rounded-lg shadow-lg"
              >
                <p className="text-xl mb-4">{reviews[currentReview].text}</p>
                <p className="font-semibold">{reviews[currentReview].name}</p>
              </motion.div>
            </AnimatePresence>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextReview}
              className="ml-6 bg-black text-white p-3 rounded-full shadow-lg transition-colors duration-300 hover:bg-gray-800 focus:outline-none"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

