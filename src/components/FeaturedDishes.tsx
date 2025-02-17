"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const dishes = [
  {
    name: "Pasta al Tartufo",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    name: "Osso Buco",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    name: "Tiramisu",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80",
  },
]

export default function FeaturedDishes() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={ref} className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">I Nostri Piatti in Evidenza</h2>
        <div className="flex flex-wrap -mx-4">
          {dishes.map((dish) => (
            <motion.div
              key={dish.name}
              className="w-full md:w-1/3 px-4 mb-8"
              style={{
                y: y,
              }}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src={dish.image || "/placeholder.svg"}
                    alt={dish.name || "Immagine di un piatto"}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{dish.name}</h3>
                  <p className="text-gray-600">Una deliziosa specialità della casa</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

