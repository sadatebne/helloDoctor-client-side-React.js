import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Components/Layouts/Main";
import Home from "../Components/Pages/Home/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import AllDoctor from "../Components/Pages/Doctors/AllDoctor/AllDoctor";
import Doctors from "../Components/Pages/Doctors/Doctors";
import Payment from "../Components/Pages/Payment/Payment";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Components/Pages/ErrorPage/ErrorPage";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/doctors",
          element: <Doctors></Doctors>,
        },
        {
          path: "/doctor/:id",
          element: <PrivateRoute><AllDoctor></AllDoctor></PrivateRoute>,
        },
        {
          path: "/payment/:id",
          element: <PrivateRoute><Payment></Payment></PrivateRoute>,
        },
      ],
    },
  ]);

  export default router