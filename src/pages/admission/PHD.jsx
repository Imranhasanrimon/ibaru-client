import { Card, CardContent } from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import { useTheme } from "@/hooks/useTheme";
import building from "@/assets/buildings/building3.png";

const PHD = () => {
    const { theme } = useTheme()
    return (
        <div className="py-8 px-4 lg:px-6 max-w-7xl mx-auto text-justify">
            <div
                className="relative inset-0 rounded-xl overflow-hidden mb-6"
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
                    M.Phil Admission
                </Typography>
            </div>
            <Card>
                <CardContent className="p-6">
                    <Typography variant="h2" className="mb-4">
                        1. Admission
                    </Typography>
                    <Typography variant="p" className="mb-4">
                        The PhD program is designed for individuals seeking advanced research and academic careers. Admission is competitive and based on academic excellence, research aptitude, and interview performance.
                    </Typography>

                    <Typography variant="h3" className="mt-6 mb-2">
                        Eligibility Criteria:
                    </Typography>
                    <ul className="list-disc pl-6">
                        <li>Master’s degree in a relevant field with a minimum CGPA of 3.0 (on a 4.0 scale) or equivalent.</li>
                        <li>Research proposal approved by the academic committee.</li>
                        <li>Proficiency in English (IELTS/TOEFL may be required).</li>
                    </ul>

                    <Typography variant="h3" className="mt-6 mb-2">
                        2. Selection Process
                    </Typography>
                    <ol className="list-decimal pl-6">
                        <li>Submission of application with necessary documents.</li>
                        <li>Evaluation of academic background and research proposal.</li>
                        <li>Interview with the academic committee.</li>
                    </ol>

                    <Typography variant="h3" className="mt-6 mb-2">
                        3. Application Procedure
                    </Typography>
                    <Typography variant="p" className="mb-4">
                        Applicants must submit the prescribed application form along with supporting documents to the PhD admission office. Details on deadlines and fees are announced on the official university website.
                    </Typography>

                    <Typography variant="h3" className="mt-6 mb-2">
                        4. Fees & Registration
                    </Typography>
                    <Typography variant="p" className="mb-4">
                        The PhD program fee includes tuition, research facilities, and administrative costs. Additional fees may apply for thesis submission and defense.
                    </Typography>

                    <Typography variant="h3" className="mt-6 mb-2">
                        5. Foreign Students
                    </Typography>
                    <Typography variant="p" className="mb-4">
                        International applicants must meet the admission criteria and may be required to demonstrate English proficiency. Visa assistance and accommodation facilities are available upon request.
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default PHD;