"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">La Nostra Storia</h2>
          <p className="text-xl text-gray-700 mb-8">
            Da oltre 30 anni, il nostro ristorante offre un'esperienza culinaria unica, combinando tradizione e
            innovazione. I nostri chef esperti utilizzano solo ingredienti freschi e di alta qualità per creare piatti
            che delizieranno il vostro palato.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-8 py-3 rounded-full font-semibold text-lg"
          >
            Scopri di più
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

