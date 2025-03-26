import { Card, CardContent } from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import { useTheme } from "@/hooks/useTheme";
import building from "@/assets/buildings/decorated.jpg";
import director from "@/assets/director/fbProfile.jpg";
import { Avatar } from "@/components/ui/avatar";

const MessageOfDirector = () => {
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
                    className={`text-center py-10 sm:py-16 md:py-20 lg:py-32 md:backdrop-blur-[3px] text-white ${theme === 'dark' ? "" : "text-white"}`}
                >
                    Message from the <br /> Director
                </Typography>
            </div>

            <div>
                <Card className="shadow-lg rounded-2xl w-full text-justify mt-6">
                    <CardContent className="p-4">
                        <Typography variant="p" className=" leading-relaxed">
                            It is an immense pleasure for me to welcome all of you to the website of the Institute of Business Administration (IBA), University of Rajshahi. IBA, University of Rajshahi is one of the most reputed business schools in Bangladesh. This institute was founded in 2000 and started its academic journey in 2002 with the aims to ensure the innovative approach towards quality teaching and research for its students as a proven leader in the arena of business. Since the inception of this institute, it became an apex institution for excellence which plays a significant role in providing educated and skilled human resources in accordance with the requirements of employers organization and the needs of modern business world.
                        </Typography>
                        <Typography variant="p" className="mt-4  leading-relaxed">
                            We are continuously attempting to bring distinction and uniqueness by designing the modern and updated course curriculum compatibility with international and global standards, strictly maintaining the regular class schedule, arranging on time exams, publishing results within the stipulated deadline announced before the commencement of every semester and continuing a session jam free education system. IBA, University of Rajshahi, is truly an academically elite institute which offers some wide spectrum of distinguished programs like BBA for regular students, MBA (Evening), MBA (Executive), MBA for BBA graduates and M.Phil and P.hD for the interested and suitable candidates to cultivate the scholars and leaders of tomorrow. The most of our highly qualified and dedicated faculties hold a foreign degree from various reputed universities of abroad.
                        </Typography>
                        <Typography variant="p" className="mt-4  leading-relaxed">
                            We facilitate the students with all types of logistic and infrastructural supports which encompasses our own building (IBA Bhaban), well-equipped computer labs, air-conditioned class rooms with gallery system, library with curated collection of resources, multimedia, internet and WiFi facilities in a safe, secured, quiet, intellectually vibrant and high technology based dynamic learning environment. And we are now planning for wonderful hostel facilities for our students so that they can utilize their time in the campus for their advancement. We regularly organize and arrange seminars, symposiums, business talks and experience sharing programs with corporate leaders, workshops and various career-oriented competitions among the students that will enable the learners to be creative, innovative, confident, adaptive and self-motivated. Our alumni make our institute dignified and proud by their amazing and noteworthy achievements in their profession. They are upholding the prestige of our institute. Co-curricular activities are on a regular basis premeditated and balanced with academic curriculum in order to develop every student’s skills beyond the knowledge of subjects.
                        </Typography>
                        <Typography variant="p" className="mt-4  leading-relaxed">
                            We emphasize more on developing and maintaining strong collaborative relationships and mutually beneficial partnerships with all the stakeholders at home and abroad. I take pride in and feel honored to be the part of this esteemed institute.
                        </Typography>

                        <div className="mt-6 text-center flex flex-col items-center">
                            <img
                                src={director}
                                alt="Prof. Dr. Md. Shariful Islam"
                                className={`w-24 h-24 rounded-full border-4 ${theme === "dark" ? "border-white" : "border-black"} mb-4`}
                            />
                            <Typography variant="h3" className="font-bold text-2xl sm:text-3xl md:text-4xl">
                                Prof. Dr. Md. Shariful Islam
                            </Typography>
                            <Typography variant="h4" className="text-xl sm:text-2xl mt-2">
                                Director, Institute of Business Administration (IBA),
                                University of Rajshahi
                            </Typography>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default MessageOfDirector;
