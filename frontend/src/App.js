import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
  Outlet,
} from "react-router-dom";

import SingleCustomer from "./pages/SingleCustomer";
import SingleActor from "./pages/SingleActor";
import Actor from "./pages/Actor";
import SingleFilm from "./pages/SingleFilm";
import Add from "./pages/Add";
import Update from "./pages/Update";
import Film from "./pages/Film";
import "./style.scss"
import Home from "./pages/Home";
import Customer from "./pages/Customer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Rent from "./pages/Rent";
import History from "./pages/History";

const Layout = () =>{
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  );
};

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/customer",
        element:<Customer/>
      },
      {
        path:"/film",
        element:<Film/>
      },
      {
        path:"/actor",
        element:<Actor/>
      },
      {
        path:"/film/:film_id",
        element:<SingleFilm/>
      },
      {
        path:"/actor/:actor_id",
        element:<SingleActor/>
      },
      {
        path:"/customer/:customer_id",
        element:<SingleCustomer/>
      },
      {
        path:"/rent",
        element:<Rent/>
      },
      {
        path:"/add",
        element:<Add/>,
      },
      {
        path:"/update",
        element:<Update/>,
      },
      {
        path:"/history/:customer_id",
        element:<History/>
      }
    ]
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}


export default App;
