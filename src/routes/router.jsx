import MainLayout from "@/layouts/MainLayout";
import ErrorPage from "@/pages/error/ErrorPage";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <Home />
            }
        ]
    },
]);