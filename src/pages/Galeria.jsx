import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'

const bonsais = [
  { id: 1, nombre: 'Arce Japonés' },
  { id: 2, nombre: 'Pino Negro' },
  { id: 3, nombre: 'Ficus Retusa' },
  { id: 4, nombre: 'Olmo Chino' },
  { id: 5, nombre: 'Enebro' },
  { id: 6, nombre: 'Azalea' },
]

const Galeria = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f3ee]">
      <Header />
      <div className="flex-1 px-12 py-16">
        <h3 className="text-4xl font-light text-gray-800 text-center mb-4">Nuestra Colección</h3>
        <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
          Un vistazo a algunos de los ejemplares en los que hemos trabajado.
          Cada árbol cuenta una historia de tiempo y paciencia.
        </p>
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {bonsais.map((bonsai) => (
            <Card key={bonsai.id} nombre={bonsai.nombre} />
          ))}
        </section>
      </div>
      <Footer />
    </div>
  )
}
export default Galeria