import { createBrowserRouter } from "react-router-dom";
import CourseDetails from "../CourseDetails/CourseDetails";
import Main from "../layouts/Main/Main";
import Blogs from "../Pages/Blogs/Blogs";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Courses from "../Pages/Courses/Courses";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Footer from "../Shared/Footer/Footer";
import PrivateRout from "./PrivateRout";

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
                path: '/courses',
                loader: () => fetch('http://localhost:5000/courses'),
                element: <Courses></Courses>
            },
            {
                path: '/course/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`),
                element: <PrivateRout><CourseDetails></CourseDetails></PrivateRout>
            },
            {
                path: '/checkout',
                element: <CheckOut></CheckOut>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/footer',
                element: <Footer></Footer>
            }
        ]

    },
]);