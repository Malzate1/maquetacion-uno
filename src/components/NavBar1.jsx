import { Link, useLocation } from 'react-router-dom'

function NavBar1() {
  const { pathname } = useLocation()
  const linkClass = (path) =>
    `text-sm tracking-wide transition-colors ${
      pathname === path
        ? 'text-gray-400 border-b border-gray-400 pb-0.5'
        : 'text-gray-800 hover:text-gray-500'
    }`
  return (
    <nav className="flex gap-8">
      <Link to="/filosofia" className={linkClass('/filosofia')}>Filosofía</Link>
      <Link to="/galeria" className={linkClass('/galeria')}>Galería</Link>
      <Link to="/reservas" className={linkClass('/reservas')}>Reservas</Link>
    </nav>
  )
}
export default NavBar1