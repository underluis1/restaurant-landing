import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-4">Ristorante XYZ</h3>
            <p className="max-w-xs mx-auto">Un&apos;esperienza culinaria indimenticabile nel cuore della città.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contatti</h4>
            <p>Via Roma 123, 00100 Roma</p>
            <p>Tel: +39 06 1234567</p>
            <p>Email: info@ristorantexyz.com</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Seguici</h4>
            <div className="flex justify-center space-x-4">
              <a href="#" className="hover:text-gray-400 transition-colors duration-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors duration-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors duration-300">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p>&copy; {new Date().getFullYear()} Ristorante XYZ. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  )
}

