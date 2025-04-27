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

            <div className="z-10  md:text-left absolute 2xl:left-96 md:left-28  w-full md:w-auto">
                <GraduationCap size={60} className="dark:text-red-400 text-red-500 absolute top-1/2 -translate-y-33 md:-translate-y-0 left-1/2 -translate-x-1/2 md:-translate-x-0  md:-top-14 md:-left-14 md:-rotate-20 animate-pulse " />


                <Separator className="hidden md:block border-2 md:border-3 rounded-full dark:border-red-400 border-red-500  absolute -left-4 shrink-0" orientation="vertical" />

                <h1 className="text-5xl md:text-8xl dark:text-sky-500 text-sky-600 font-bold md:-mt-2">IBA</h1>

                <h2 className="italianno-regular text-2xl md:text-5xl font-semibold md:leading-14">A Gate To  <br /> The Never Ending <br /> Journey Of <span className="dark:text-sky-500 text-sky-600">Excellence</span> </h2>
                {/* <p className="">Welcome to our platform</p> */}
            </div>

            <div className="absolute flex md:flex-col justify-between items-center gap-4 z-10 2xl:right-96 md:right-20 bottom-1/2 translate-y-32 left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-auto border-0 md:border-3 dark:border-red-400 border-red-500 rounded-lg md:px-1 md:py-2 md:h-68">
                <Link to="https://www.facebook.com/IBA.RajshahiUniversity">
                    <IconBrandFacebookFilled
                        className="border-3 md:border-4 dark:border-white border-black rounded-md p-[3px] cursor-pointer w-8 h-8"
                    />
                </Link>

                <Mail
                    className="border-3 md:border-4 dark:border-white border-black rounded-md p-[3px]  cursor-pointer w-8 h-8 ml-1 md:ml-0"
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
                        className="border-3 md:border-4 dark:border-white border-black rounded-md p-[3px]  cursor-pointer w-8 h-8"
                    />
                </Link>

            </div>


        </div>
    );
};

export default Banner;
