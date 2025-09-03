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
import MyListingsPage from "../Pages/MyListingsPage";
import UpdateFindPostPage from "../Pages/UpdateFindPostPage";


const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children:[
            {
                index: true,
                loader: () => fetch("https://roommate-finder-server-red.vercel.app/featured-listings"),
                hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
                Component: Home
            },
            {
                path: "listings",
                loader: () => fetch("https://roommate-finder-server-red.vercel.app/all-listings"),
                hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
                Component: BrowseListingsPage
            },
            {
                path: "/my-listings",
                element: <PrivateRoute><MyListingsPage></MyListingsPage></PrivateRoute>
            },
            {
                path: "/update/:id",
                loader: ({params}) => fetch(`https://roommate-finder-server-red.vercel.app/listings/${params.id}`),
                hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
                element: <PrivateRoute><UpdateFindPostPage></UpdateFindPostPage></PrivateRoute>
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
                loader: ({params}) => fetch(`https://roommate-finder-server-red.vercel.app/listings/${params.id}`),
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