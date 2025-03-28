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
import MessageOfDirector from "@/pages/aboutUs/MessageOfDirector";
import BBA from "@/pages/admission/BBA";
import MBA from "@/pages/admission/MBA";
import MBAEvening from "@/pages/admission/MBAEvening";
import MPhil from "@/pages/admission/MPhil";
import MBAExecutive from "@/pages/admission/MBAExecutive";
import PHD from "@/pages/admission/PHD";

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
                element: <MessageOfDirector />
            },
            // admission
            {
                path: "admission-bba",
                element: <BBA />
            },
            {
                path: "admission-mba",
                element: <MBA />
            },
            {
                path: "admission-mba-evening",
                element: <MBAEvening />
            },
            {
                path: "admission-mba-executive",
                element: <MBAExecutive />
            },
            {
                path: "admission-m-phil",
                element: <MPhil />
            },
            {
                path: "admission-phd",
                element: <PHD />
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
            {
                path: "my-fees",
                element: <h1>my fees</h1>
            },
            {
                path: "my-result",
                element: <h1>my result</h1>
            },
        ]
    },
    //delete
    {
        path: "/spinner",
        element: <LoadingSpinner />
    },
]);