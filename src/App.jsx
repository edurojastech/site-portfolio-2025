import './assets/css/global.css'
import { RouterProvider } from "react-router-dom";
import routes from './routers';

const App = () => <RouterProvider router={routes} />
export default App