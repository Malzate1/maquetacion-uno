import Header from '../components/Header'
import Footer from '../components/Footer'

const Filosofia = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f3ee]">
      <Header />
      <section className="flex-1 px-12 py-16 max-w-2xl mx-auto w-full">
        <h2 className="text-5xl font-light text-gray-800 mb-8">Menos es más</h2>
        <p className="text-gray-500 leading-relaxed mb-6">
          Nuestra filosofía se centra en la observación y el respeto por los ritmos naturales.
          Creemos que cultivar un Bonsái no es solo jardinería, sino una meditación activa.
        </p>
        <p className="text-gray-500 leading-relaxed">
          En nuestro estudio, te enseñamos a escuchar al árbol, entendiendo que cada corte y
          cada alambrado debe tener un propósito. Buscamos el equilibrio perfecto entre la
          intervención humana y la expresión salvaje de la naturaleza.
        </p>
      </section>
      <Footer />
    </div>
  )
}
export default Filosofia