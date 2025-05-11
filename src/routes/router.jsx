import { createBrowserRouter } from "react-router-dom";
import Page from "@/pages/dashboard/page";
import MainLayout from "@/layouts/MainLayout";
import LoadingSpinner from "@/myComponents/LoadingSpinner";
import ErrorPage from "@/pages/error/ErrorPage";
import Home from "@/pages/home/Home";
import Login from "@/pages/login/Login";
import Register from "@/pages/register/Register";
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
import OfficersAndStaffs from "@/pages/view/OfficersAndStaffs";
import Faculties from "@/pages/view/Faculties";
import MyAccount from "@/pages/dashboard/myAccount/MyAccount";
import Feeds from "@/pages/feeds/Feeds";
import StudentProfile from "@/pages/studentProfile/StudentProfile";
import MyAllPosts from "@/pages/dashboard/myAccount/MyAllPosts";
import StudentFeeds from "@/pages/feeds/StudentFeeds";
import Gallery from "@/pages/view/Gallery";
import Batch from "@/pages/view/Batch";
import OurBatch from "@/pages/dashboard/ourBatch/OurBatch";

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
            //view
            {
                path: "officers-and-staffs",
                element: <OfficersAndStaffs />
            },
            {
                path: "faculties",
                element: <Faculties />
            },
            {
                path: "gallery",
                element: <Gallery />
            },
            {
                path: "batches/:batchNo",
                element: <Batch />
            },
            //news feeds
            {
                path: "feeds",
                element: <Feeds />
            },
            {
                path: "all-feeds/:id",
                element: <StudentFeeds />
            },
            {
                path: "student-profile/:id",
                element: <StudentProfile />
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
                element: <MyAccount />
            },
            {
                path: "my-fees",
                element: <h1>my fees</h1>
            },
            {
                path: "my-result",
                element: <h1>my result</h1>
            },
            {
                path: "my-all-posts/:id",
                element: <MyAllPosts />
            },
            {
                path: "our-batch",
                element: <OurBatch />
            },
        ]
    },
    //delete
    {
        path: "/spinner",
        element: <LoadingSpinner />
    },
]); 