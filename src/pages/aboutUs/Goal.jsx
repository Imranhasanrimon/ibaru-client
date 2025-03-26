import { Card, CardContent } from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import { useTheme } from "@/hooks/useTheme";
import building from "@/assets/buildings/decorated.jpg";

const Goal = () => {
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
                    Our Goals
                </Typography>
            </div>
            <div>
                <Card className="shadow-lg rounded-2xl w-full text-justify mt-6">
                    <CardContent className="p-4">
                        <Typography variant="p">
                            Our university is committed to achieving a set of ambitious goals that reflect our dedication to providing a transformative education, fostering innovation, and contributing positively to society. Our goals align with the changing needs of students, faculty, and the global community, and they reflect our core values of academic excellence, sustainability, inclusivity, and global collaboration.
                        </Typography>
                        <Typography variant="p" className="mt-4">
                            We have identified the following key goals to guide our development and impact:
                        </Typography>
                        <ul className="list-disc list-inside text-left mt-4">
                            <li>Academic Excellence: Ensure the highest standards of education and foster intellectual curiosity among students.</li>
                            <li>Research and Innovation: Support groundbreaking research that addresses global challenges and creates real-world impact.</li>
                            <li>Community Engagement: Actively contribute to the local and global communities through social programs and initiatives.</li>
                            <li>Global Collaboration: Build partnerships with institutions, industries, and organizations worldwide to promote cross-cultural exchange and knowledge sharing.</li>
                            <li>Sustainability: Promote sustainable practices within the university and across all our operations, ensuring a positive environmental impact.</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Goal;
