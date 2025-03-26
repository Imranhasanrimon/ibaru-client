import Page from "@/pages/dashboard/page";
import MainLayout from "@/layouts/MainLayout";
import LoadingSpinner from "@/myComponents/LoadingSpinner";
import ErrorPage from "@/pages/error/ErrorPage";
import Home from "@/pages/home/Home";
import Login from "@/pages/login/Login";
import Register from "@/pages/register/Register";
import { createBrowserRouter } from "react-router-dom";
import DefaultPage from "@/pages/dashboard/DefaultPage";
import History from "@/pages/aboutUs/History";
import Vision from "@/pages/aboutUs/Vision";
import Mission from "@/pages/aboutUs/Mission";
import Goal from "@/pages/aboutUs/Goal";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <Home />
            },
            //about us
            {
                path: "history",
                element: <History />
            },
            {
                path: "vision",
                element: <Vision />
            },
            {
                path: "mission",
                element: <Mission />
            },
            {
                path: "goal",
                element: <Goal />
            },
            {
                path: "message-of-director",
                element: <Mission />
            },
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/dashboard",
        element: <Page />,
        children: [
            {
                path: "",
                element: <DefaultPage />
            },
            {
                path: "my-account",
                element: <h1>my account</h1>
            },
        ]
    },
    //delete
    {
        path: "/spinner",
        element: <LoadingSpinner />
    },
]);