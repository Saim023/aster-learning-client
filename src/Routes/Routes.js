import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Footer from "../Shared/Footer/Footer";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/all-courses'),
                element: <Home></Home>
            },
            {
                path: '/footer',
                element: <Footer></Footer>
            }
        ]
    }
]);