import Filosofia from "../pages/Filosofia";
import Galeria from "../pages/Galeria";
//import Reservas

export let routerApp=[
    {
        path:"/",
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