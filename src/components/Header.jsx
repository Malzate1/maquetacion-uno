import Logo from './Logo'
import NavBar1 from './NavBar1'

function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-5 border-b border-gray-100 bg-white">
      <Logo />
      <NavBar1 />
    </header>
  )
}
export default Header