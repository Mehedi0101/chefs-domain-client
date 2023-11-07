import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import FoodItems from "../pages/FoodItems";
import FoodDetails from "../pages/FoodDetails";
import axios from "axios";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <SignIn></SignIn>
            },
            {
                path: '/register',
                element: <SignUp></SignUp>
            },
            {
                path: '/food-items',
                element: <FoodItems></FoodItems>
            },
            {
                path: '/food-details/:id',
                loader: ({params}) => axios(`http://localhost:5000/foods/${params.id}`),
                element: <FoodDetails></FoodDetails>
            }
        ]
    }
])

export default routes;