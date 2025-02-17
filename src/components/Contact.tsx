"use client"

import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Contattaci</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg h-full flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6">Informazioni</h3>
                <p className="mb-4">
                  <strong className="block mb-1">Indirizzo:</strong>
                  Via Roma 123, 00100 Roma
                </p>
                <p className="mb-4">
                  <strong className="block mb-1">Telefono:</strong>
                  +39 06 1234567
                </p>
                <p className="mb-4">
                  <strong className="block mb-1">Email:</strong>
                  info@ristorantexyz.com
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Orari di Apertura</h4>
                <p className="mb-2">
                  <strong className="block">Pranzo:</strong>
                  Lun-Dom: 12:00-15:00
                </p>
                <p>
                  <strong className="block">Cena:</strong>
                  Lun-Dom: 19:00-23:00
                </p>
              </div>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg h-full"
            >
              <h3 className="text-2xl font-semibold mb-6">La Nostra Posizione</h3>
              <div className="aspect-w-16 aspect-h-9 h-[calc(100%-3rem)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11880.492291371422!2d12.4829321!3d41.9027835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61b6532013ad%3A0x28f1c82e908503c4!2sColosseo!5e0!3m2!1sit!2sit!4v1645454332141!5m2!1sit!2sit"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

