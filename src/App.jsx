import './assets/css/global.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { RouterProvider } from "react-router-dom";
import routes from './routers';

const App = () => <RouterProvider router={routes} />
export default App