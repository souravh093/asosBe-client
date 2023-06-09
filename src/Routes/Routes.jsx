import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ProductDetails from "../components/Collection/Product/ProductDetails/ProductDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Cart from "../Pages/Cart/Cart";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/product/:id',
                element: <ProductDetails />,
                loader: ({params}) => fetch(`http://localhost:3000/products/${params.id}`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/cart',
                element: <PrivateRoute><Cart /></PrivateRoute>
            }
        ]
    }
])

export default router;