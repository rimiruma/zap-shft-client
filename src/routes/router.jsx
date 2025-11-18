import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../pages/Home/Home";
import Coverage from "../pages/Coverage";
import AuthLayout from "../AuthLayout/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import Rider from "../pages/Rider/Rider";
import PrivateRoute from "./PrivateRoute";
import SendParcel from "../pages/SendParcel/SendParcel";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
        {
            index:true,
            Component: Home
            
        },
        {
          path: '/rider',
          element: <PrivateRoute>
            <Rider></Rider>
          </PrivateRoute>
        },
        {
          path: '/send-parcel',
          element: <PrivateRoute>
            <SendParcel></SendParcel>
          </PrivateRoute>
        },
        {
          path: '/coverage',
          Component: Coverage,
          loader: () => fetch('/warehouses.json')
          .then(res => res.json())
        },
    ]
  },
  {
    path: '/',
    Component: AuthLayout,
    children: [
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/register',
        Component: Register,
      }
    ]
  }
]);


