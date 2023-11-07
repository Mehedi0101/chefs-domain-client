import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import FoodItems from "../pages/FoodItems";
import FoodDetails from "../pages/FoodDetails";
import axios from "axios";
import Order from "../pages/Order";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../pages/MyProfile";
import UserInfo from "../pages/UserInfo";
import MyRecipes from "../pages/MyRecipes";
import Cart from "../pages/Cart";
import AddRecipe from "../pages/AddRecipe";
import Update from "../pages/Update";

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
            },
            {
                path: '/order/:id',
                loader: ({params}) => axios(`http://localhost:5000/foods/${params.id}`),
                element: <PrivateRoute><Order></Order></PrivateRoute>
            },
            {
                path: '/update/:id',
                loader: ({params}) => axios(`http://localhost:5000/foods/${params.id}`),
                element: <PrivateRoute><Update></Update></PrivateRoute>
            },
            {
                path: '/user-profile',
                element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>,
                children: [
                    {
                        path: '/user-profile/',
                        element: <PrivateRoute><UserInfo></UserInfo></PrivateRoute>
                    },
                    {
                        path: '/user-profile/my-recipes',
                        element: <PrivateRoute><MyRecipes></MyRecipes></PrivateRoute>
                    },
                    {
                        path: '/user-profile/my-orders',
                        element: <PrivateRoute><Cart></Cart></PrivateRoute>
                    },
                    {
                        path: '/user-profile/add-recipe',
                        element: <PrivateRoute><AddRecipe></AddRecipe></PrivateRoute>
                    }
                ]
            }
        ]
    }
])

export default routes;