import { Card, CardContent } from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import building from "@/assets/buildings/decorated.jpg";
import { useTheme } from "@/hooks/useTheme";

const Mission = () => {
    const { theme } = useTheme();
    return (
        <div className="py-8 px-4 lg:px-6 max-w-7xl mx-auto">
            <div
                className="relative inset-0 rounded-xl overflow-hidden"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0, 0.7)), url(${building})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <Typography
                    variant="h1"
                    className={`text-center py-12 sm:py-20 md:py-24 lg:py-36 md:backdrop-blur-[3px] text-white ${theme === 'dark' ? "" : "text-white"}`}
                >
                    Our Mission
                </Typography>
            </div>
            <div>
                <Card className="shadow-lg rounded-2xl w-full text-justify mt-6">
                    <CardContent className="p-4">
                        <Typography variant="p" className=" leading-relaxed">
                            Its aim is to provide and promote facilities for graduates and post graduates study and research in Business Administration. In addition to these, IBA of Rajshahi University has been established to provide off-the-job training for business people, post graduate diploma program for graduates engaged in business and Executive Development Program (EDP) for top management as well as senior executives. Moreover, the institute has the objective of providing consultancy services and assistances as required by the business community.
                        </Typography>
                        <Typography variant="p" className="mt-4  leading-relaxed">
                            We are dedicated to fostering a culture of innovation and excellence, where students have access to cutting-edge resources, faculty expertise, and real-world experiences that will prepare them to thrive in a constantly evolving world. Our mission is also to build strong partnerships with industry leaders, creating opportunities for students to engage in internships, collaborative research, and hands-on learning that will bridge the gap between academic theory and practical application.
                        </Typography>
                        <Typography variant="p" className="mt-4  leading-relaxed">
                            Our commitment to diversity, equity, and inclusion is at the heart of our mission. We strive to create an inclusive environment where all students, regardless of their background or identity, feel supported and empowered to succeed. By nurturing a diverse student body and fostering cross-cultural understanding, we aim to produce graduates who are not only academically strong but also culturally aware and globally minded.
                        </Typography>
                        <Typography variant="p" className="mt-4  leading-relaxed">
                            Ultimately, our mission is to make a lasting impact on our students, our communities, and the world by providing an education that is both transformative and relevant. We are committed to being a leading institution that shapes the next generation of professionals who will go on to make meaningful contributions in their fields and positively influence society.
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Mission;
