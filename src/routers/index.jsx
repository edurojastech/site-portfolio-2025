import { createBrowserRouter } from "react-router-dom"
import IntroPage from "../pages/introPage";
import Projetos from "../pages/projetos";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <IntroPage />,
  },

  {
    path: "/projetos",
    element: <Projetos />,
  },

  {
    path: "*",
    element: <> PAGINA NAO ENCONTRADA! </>,
  },
])

export default routes;
