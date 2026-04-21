import Footer from "../components/Footer"
import Card from "../components/Card"


const Galeria = () => {
  return (
    <main>
        <Header/>
        <div>
            <h3>Nuestra Colección</h3>
            <p>Un vistazo a algunos de los ejemplares en los que hemos trabajado. Cada árbol cuenta una historia de tiempo y paciencia.</p>
            <section>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </section>
        </div>
        <Footer/>
    </main>
  )
}

export default Galeria