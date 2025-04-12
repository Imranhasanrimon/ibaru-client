import { Parallax } from "react-scroll-parallax";
import imageUrl from "@/assets/buildings/IBA_dron_view.jpg";
import { useTheme } from "@/hooks/useTheme";

const Banner = () => {
    const { theme } = useTheme()
    return (
        <div className="relative h-screen flex items-center justify-center text-center overflow-hidden">
            <Parallax
                className="absolute inset-0"
                style={{
                    backgroundImage: `linear-gradient(to bottom,${theme !== 'light' ? " rgba(15, 23, 42,0.7), rgba(15, 23, 42, 0.4), rgba(15, 23, 42,0.7)" : " rgba(248, 250, 252,0.7), rgba(248, 250, 252, 0.0), rgba(248, 250, 252,0.5)"}), url(${imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                }}
                speed={-200}>

            </Parallax>

            <div className="z-10 bg-muted/50 p-6 rounded-lg">
                <h1 className="text-2xl md:text-4xl font-bold">Hello</h1>
                <p className="text-md md:text-lg mt-2 ">Welcome to our platform</p>
            </div>
        </div>
    );
};

export default Banner;
