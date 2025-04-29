import { Parallax } from "react-scroll-parallax";
import imageUrl from "@/assets/buildings/IBA_dron_view.jpg";
import { Separator } from "@/components/ui/separator";
import { ChartNoAxesCombinedIcon, DollarSign, Facebook, GraduationCap, HandCoins, Linkedin, LucideLinkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconBrandFacebook, IconBrandFacebookFilled, IconBrandLinkedin, IconBrandLinkedinFilled, IconMessage2, IconMessageDots } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="h-screen -mt-13 relative flex items-center justify-center text-center overflow-hidden">
            <Parallax
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                }}
                speed={-200}>

            </Parallax>

            <div className="absolute inset-0 dark:bg-background/60 bg-background/50 backdrop-blur-[3px]">
            </div>

            <div className="z-10   absolute  w-full md:w-auto">
                <GraduationCap size={60} className="dark:text-red-400 text-red-500 absolute top-1/2 -translate-y-38  left-1/2 -translate-x-1/2   animate-pulse " />

                <h1 className="text-5xl sm:text-7xl  dark:text-sky-500 text-sky-600 font-bold ">IBA</h1>

                <h2 className="italianno-regular text-2xl sm:text-4xl  font-semibold ">A Gate To  <br /> The Never Ending <br /> Journey Of <span className="dark:text-sky-500 text-sky-600">Excellence</span> </h2>
                {/* <p className="">Welcome to our platform</p> */}
            </div>

            <div className="absolute flex  justify-between items-center gap-4 z-10   bottom-1/2 translate-y-29 sm:translate-y-36 left-1/2 -translate-x-1/2   border-0  dark:border-red-400 border-red-500 rounded-lg ">
                <Link to="https://www.facebook.com/IBA.RajshahiUniversity">
                    <IconBrandFacebookFilled
                        className="border-3  dark:border-white border-black rounded-md p-[3px] cursor-pointer w-8 h-8"
                    />
                </Link>

                <Mail
                    className="border-3  dark:border-white border-black rounded-md p-[3px]  cursor-pointer w-8 h-8 ml-1 "
                    onClick={() => {
                        window.location.href = `mailto:ibaru.ac.bd@gmail.com`
                    }}
                />
                <Link to="https://www.linkedin.com/school/institute-of-business-administration-university-of-rajshahi/">
                    <IconBrandLinkedin
                        className="  cursor-pointer w-10 h-10"
                    />
                </Link>

                <Link>
                    <IconMessageDots
                        className="border-3  dark:border-white border-black rounded-md p-[3px]  cursor-pointer w-8 h-8"
                    />
                </Link>

            </div>


        </div>
    );
};

export default Banner;
