import { createBrowserRouter } from "react-router-dom"
import IntroPage from "../pages/introPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <IntroPage />,
  },

  {
    path: "*",
    element: <> PAGINA NAO ENCONTRADA! </>,
  },
])

export default routes;
