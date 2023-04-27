import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ProductDetails from "../components/Collection/Product/ProductDetails/ProductDetails";

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
            }
        ]
    }
])

export default router;