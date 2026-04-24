import Filosofia from "../pages/Filosofia";
import Galeria from "../pages/Galeria";
import Reservas from "../pages/Reservas";
import Index from "../pages/Index";
import { createBrowserRouter } from "react-router-dom";

export const routerApp=createBrowserRouter([
    {
        path:"/",
        element:<Index/>,
    },
    {
        path:"/filosofia",
        element:<Filosofia/>,
    },
    {
        path:"/galeria",
        element:<Galeria/>,
    },
    {
        path:"/reservas",
        element:<Reservas/>,
    }
])