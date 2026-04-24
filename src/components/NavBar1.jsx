import { Link } from 'react-router-dom'

function NavBar1() {
  return (
    <nav>
      <Link to="/filosofia">Filosofia</Link>
      <Link to="/galeria">Galeria</Link>
      <Link to="/reservas">Reservas</Link>
    </nav>
  )
}

export default NavBar1