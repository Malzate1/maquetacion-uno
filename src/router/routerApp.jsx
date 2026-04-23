import Filosofia from "../pages/Filosofia";
import Galeria from "../pages/Galeria";
//import Reservas
import Index from "../pages/Index";

export let routerApp=[
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
        element:<Galeria/>
    },
    {
        path:"/reservas",
        element:<Reservas/>,
    }
]