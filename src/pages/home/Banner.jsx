import { Parallax } from "react-scroll-parallax";
import imageUrl from "@/assets/buildings/IBA_dron_view.jpg";
import { Separator } from "@/components/ui/separator";
import { ChartNoAxesCombinedIcon, DollarSign, GraduationCap, HandCoins } from "lucide-react";

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
                {/* <ChartNoAxesCombinedIcon size={60} className="text-red-400 absolute top-20 right-14  animate-pulse opacity-40 " />
                <DollarSign size={60} className="text-red-400 absolute top-20 left-14  opacity-40 " />
                <HandCoins size={60} className="text-red-400 absolute top-20 left-40  animate-pulse opacity-40 " /> */}
            </div>

            <div className="z-10 text-left absolute 2xl:left-96 left-20">
                <GraduationCap size={60} className="dark:text-red-400 text-red-500 absolute -top-14 -left-14 -rotate-20 animate-pulse " />


                <Separator className="border-3 rounded-full dark:border-red-400 border-red-500  absolute -left-4 h-12 shrink-0" orientation="vertical" />

                <h1 className="text-3xl md:text-8xl dark:text-sky-500 text-sky-600 font-bold -mt-2">IBA</h1>

                <h2 className="italianno-regular text-xl md:text-5xl font-semibold md:leading-14">A Gate To  <br /> The Never Ending <br /> Journey Of <span className="dark:text-sky-500 text-sky-600 font-bold">Excellence</span> </h2>
                {/* <p className="">Welcome to our platform</p> */}
            </div>


        </div>
    );
};

export default Banner;
