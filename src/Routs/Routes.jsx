import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LogIn/Login";
import Showdetails from "../Pages/Showdetails";
import Bloges from "../Pages/Bloges/Bloges";
import Contact from "../Pages/Contact";
import Regestraion from "../Pages/Regestraion/Regestraion";
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes";
import ErrorPage from "../Components/ErrorPage";


  const router = createBrowserRouter([
    {

      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>  ,
      children:[
{
path: '/',
element: <Home></Home>,
loader: ()=> fetch('/Data.json')
},
{
  path:'/login',
  element: <Login></Login> 
},
{
  path:'/regestraion',
  element: <Regestraion></Regestraion> 
},
{
  path: '/seedetails/:id',
  element:<PrivetRoutes><Showdetails></Showdetails></PrivetRoutes> ,
  loader : ()=> fetch('../Data.json')
},
{
  path: '/blogs',
  element: <PrivetRoutes><Bloges></Bloges></PrivetRoutes> ,
loader: ()=> fetch('Blog.json')
},
{
  path: '/contact',
  element: <PrivetRoutes><Contact></Contact></PrivetRoutes>
}

      ]
    },
  ]);

export default router;