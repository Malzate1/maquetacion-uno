import { Route, Routes } from "react-router-dom";
import Filosofia from "./pages/Filosofia";
import Index from "./pages/Index";
import Galeria from "./pages/Galeria";
import Reservas from "./pages/Reservas";



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/filosofia" element={<Filosofia/>} />
      <Route path="/galeria" element={<Galeria/>} />
      <Route path="/reservas" element={<Reservas/>} />
    </Routes>
    
  )
}

export default App
