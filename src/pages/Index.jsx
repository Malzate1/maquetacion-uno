import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f3ee]">
      <Header />
      <section className="flex-1 flex flex-col justify-center px-12 py-20 max-w-2xl mx-auto w-full">
        <h2 className="text-5xl font-light text-gray-800 leading-tight mb-6">
          El arte de la paciencia
        </h2>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Descubre la serenidad a través del cuidado y diseño de árboles Bonsái.
          Un espacio para reconectar con la naturaleza.
        </p>
        <Link to="/reservas">
          <button className="bg-[#2d3a2e] text-white px-6 py-3 rounded text-sm hover:bg-[#1e2a1f] transition-colors w-fit">
            Reserva un taller
          </button>
        </Link>
      </section>
      <Footer />
    </div>
  )
}
export default Index