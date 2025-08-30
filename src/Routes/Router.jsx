import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import DetailsPage from "../Pages/DetailsPage";
import AddToFindRoommate from "../Pages/AddToFindRoommate";
import ErrorPage from "../Pages/ErrorPage";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import LoadingSpinner from "../components/LoadingSpinner";
import BrowseListingsPage from "../Pages/BrowseListingsPage";


const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children:[
            {
                index: true,
                loader: () => fetch("http://localhost:3000/featured-listings"),
                hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
                Component: Home
            },
            {
                path: "listings",
                loader: () => fetch("http://localhost:3000/listings"),
                hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
                Component: BrowseListingsPage
            },
            {
                path: "login",
                Component: LogIn
            },
            {
                path: "register",
                Component: Register
            },
            {
                path: "add-to-find",
                element: <PrivateRoute><AddToFindRoommate></AddToFindRoommate></PrivateRoute>
            },
            {
                path: "details/:id",
                loader: ({params}) => fetch(`http://localhost:3000/listings/${params.id}`),
                hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
                element: <PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>
            }
            
        ]
    },

    {
        path: "/*",
        Component: ErrorPage
    }
])


export default router;