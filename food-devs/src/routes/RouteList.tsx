import { useState } from "react";
import { useRoutes } from "react-router";
import {Login} from "../components/Login";
import {PrivateRoute} from "../components/PrivateRoute/PrivateRoute";
import { Home } from "../pages/Home";
import { Orders } from "../pages/Orders";
import { Profile } from "../pages/Profile";

export function RouteList(){
   const [idItem, setId] = useState<number>(0);
   return useRoutes([
      {path: '/', element: <Home/>},
      {path: '/login', element: <Login/>},
      {path: '/orders', element: <PrivateRoute><Orders/></PrivateRoute>},
      {path: '/profile', element: <PrivateRoute><Profile/></PrivateRoute>}
   ])
   
}