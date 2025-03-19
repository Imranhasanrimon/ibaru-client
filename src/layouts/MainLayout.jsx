import Footer from "@/myComponents/Footer";
import Navbar from "@/myComponents/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;