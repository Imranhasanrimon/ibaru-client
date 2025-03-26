import { Card, CardContent } from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import building from "@/assets/buildings/decorated.jpg"
import { useTheme } from "@/hooks/useTheme";

const History = () => {
    const { theme } = useTheme();
    return (
        <div className="py-8 px-4 lg:px-6 max-w-7xl mx-auto">
            <div
                className="relative inset-0 rounded-xl overflow-hidden "
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0, 0.7)), url(${building})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <Typography variant="h1" className={`text-center py-12 sm:py-20 md:py-24 lg:py-36 md:backdrop-blur-[3px] ${theme === 'dark' ? "" : "text-white"}`}>
                    Our History
                </Typography>
            </div>
            <div>
                <Card className="shadow-lg rounded-2xl w-full text-justify mt-6">
                    <CardContent className="p-4">
                        <Typography variant="p">
                            In Bangladesh, the business education in the North American style began during the 1960s with the collaboration of some North American universities. With the same enthusiasm, the Institute of Business Administration (IBA) of Rajshahi University was established under the 7th statute of the University in the North-South region of Bangladesh.
                        </Typography>
                        <Typography variant="p" className=" mt-4">
                            The Institute of Business Administration is one of the five institutes of Rajshahi University. It started its journey in the year 2000, and academic activities began with an MBA (Evening) Program in 2002. In response to the increasing demand for business education, three more MBA programs—MBA (Day) Program, Executive MBA Program, and MBA for BBA Graduates Program—have been launched by the institute. Additionally, the Ph.D. and M. Phil. programs were introduced in 2006.
                        </Typography>
                        <Typography variant="p" className=" mt-4">
                            Each program consists of a sweet combination of fresh students and professionals at mid and top-level executives in the private sector and state-owned organizations. The MBA program is well-structured, based on a time frame, and completely free from session jams.
                        </Typography>
                    </CardContent>
                </Card>
            </div>

        </div>
    );
};

export default History;