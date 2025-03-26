import { Card, CardContent } from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import building from "@/assets/buildings/decorated.jpg";
import { useTheme } from "@/hooks/useTheme";

const Vision = () => {
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
                    Our Vision
                </Typography>
            </div>
            <div>
                <Card className="shadow-lg rounded-2xl w-full text-justify mt-6">
                    <CardContent className="p-4">
                        <Typography variant="p" className=" leading-relaxed">
                            Our vision is to create a world-class educational institution that nurtures leaders with a global perspective. We aim to empower our students to excel in their careers while contributing to the betterment of society. With a focus on innovation, research, and holistic development, we strive to equip future generations with the skills they need to succeed in a rapidly changing world.
                        </Typography>
                        <Typography variant="p" className="mt-4 leading-relaxed">
                            As a leading institution in business education, we envision a future where our students become pioneers in various fields, addressing global challenges and driving impactful change. We aim to build a vibrant, inclusive community that values diversity, collaboration, and excellence. Our vision is to remain at the forefront of academic excellence, producing graduates who are not only skilled professionals but also socially responsible individuals.
                        </Typography>
                        <Typography variant="p" className="mt-4 leading-relaxed">
                            Our commitment to academic excellence goes beyond just offering high-quality education. We aim to develop a network of globally minded leaders who are well-equipped to adapt to and influence a rapidly changing world. We envision a university that actively engages with global challenges and collaborates with other institutions and organizations to find sustainable solutions to complex issues. By emphasizing ethical practices and social responsibility, we aspire to create leaders who are committed to making a positive difference in the world.
                        </Typography>
                        <Typography variant="p" className="mt-4 leading-relaxed">
                            In the future, we see our university becoming a hub for innovation and collaboration, where students, faculty, and the community come together to explore new ideas and solutions. We will continue to build on our legacy of excellence, ensuring that every student who graduates from our institution is not only professionally prepared but also equipped to contribute to the betterment of the world. Our vision is clear: to empower our students to shape the future through leadership, knowledge, and a commitment to social good.
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Vision;
