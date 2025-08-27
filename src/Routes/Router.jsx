import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children:[
            {
                index: true,
                Component: Home
            },
            {
                path: "login",
                Component: LogIn
            },
            {
                path: "register",
                Component: Register
            },
            
        ]
    },

    {
        path: "/*",
        Component: ErrorPage
    }
])


export default router;