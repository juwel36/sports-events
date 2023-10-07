import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LogIn/Login";
import Showdetails from "../Pages/Showdetails";
import Bloges from "../Pages/Bloges/Bloges";


  const router = createBrowserRouter([
    {

      path: "/",
      element: <Root></Root>,
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
  path: '/seedetails/:id',
  element:<Showdetails></Showdetails> ,
  loader : ()=> fetch('../Data.json')
},
{
  path: '/blogs',
  element: <Bloges></Bloges>,
loader: ()=> fetch('Blog.json')
}

      ]
    },
  ]);

export default router;