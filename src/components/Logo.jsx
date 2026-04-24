import { Link } from 'react-router-dom'
import logoPng from '../assets/Logo.png'


function Logo() {
  return (
    <Link to="/">
      <img src={logoPng} alt="Logo" />
    </Link>
  )
}

export default Logo