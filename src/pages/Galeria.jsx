import Footer from "../components/Footer"
import Card from "../components/Card"
import Header from "../components/Header";

const bonsais = [
  { id: 1, nombre: "Arce Japonés" },
  { id: 2, nombre: "Pino Negro" },
  { id: 3, nombre: "Ficus Retusa" },
  { id: 4, nombre: "Olmo Chino" },
  { id: 5, nombre: "Enebro" },
  { id: 6, nombre: "Azalea" },
];

const Galeria = () => {
  return (
    <main>
      <Header />
      <div>
        <h3>Nuestra Colección</h3>
        <p>Un vistazo a algunos de los ejemplares en los que hemos trabajado. Cada árbol cuenta una historia de tiempo y paciencia.</p>
        <section>
          {bonsais.map((bonsai) => (
            <Card
              key={bonsai.id}
              nombre={bonsai.nombre}

            />
          ))}

        </section>
      </div>
      <Footer />
    </main>
  )
}

export default Galeria