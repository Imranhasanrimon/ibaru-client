import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Typography from "@/components/ui/typography";
import { useTheme } from "@/hooks/useTheme";
import building from "@/assets/buildings/building3.png";

const MBAExecutive = () => {
    const { theme } = useTheme();
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
                    Executive <br /> MBA Admission
                </Typography>
            </div>
            <Card>
                <CardContent className="space-y-6">

                    <Typography variant="h3">1. Admission</Typography>
                    <Typography>
                        The objective of the admission policy is to select students on a
                        competitive basis for the EMBA program. A student is selected for
                        admission on the basis of past academic records, performance in the
                        admission test, and interview. The admission into the program is
                        held only once a year.
                    </Typography>

                    <Typography variant="h3">Eligibility Criteria:</Typography>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Minimum 2 years’ professional work experience.</li>
                        <li>At least a 2nd Class or CGPA of 2.5 (4.0 basis) in the Bachelor degree.</li>
                        <li>Equivalence for all other certificates will be determined by the Institute.</li>
                    </ul>

                    <Typography variant="h3">1.2 Selection</Typography>
                    <Typography>
                        The selection of students is accomplished in two stages:
                    </Typography>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>
                            Candidates appear at the written admission test of IBA on English and aptitude.
                            Candidates with a GMAT score of 400+ (minimum 25 percentile in verbal and 40 percentile in quantitative)
                            are exempt from the written test and should apply for an interview.
                        </li>
                        <li>
                            Successful candidates from stage 1 appear for an interview.
                        </li>
                    </ol>

                    <Typography variant="h3">1.3 Application Procedure</Typography>
                    <Typography>
                        Candidates should apply in the prescribed form available in the EMBA
                        program office by paying a fee of Tk. 800/-. Forms can also be
                        obtained by mail with a bank draft for Tk. 800/- and a self-addressed
                        stamped envelope.
                    </Typography>

                    <Typography>
                        Further information: MBA Program Office, IBA, Rajshahi University,
                        Rajshahi-6205, Phone: 0721-711167, 0721-751508 Ext. 102. Email:
                        info@iba-ru.ac.bd
                    </Typography>

                    <Typography variant="h3">1.4 Registration</Typography>
                    <Typography>
                        Accepted applicants should obtain the registration form and submit it
                        with 4 passport-sized photos, a stamp-sized photo, and necessary
                        documents. Enrollment and class attendance require the completion of
                        all formalities and fee payments.
                    </Typography>

                    <Typography variant="h3">1.5 Fees for Part-time EMBA Students</Typography>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Enrollment Fee (once)</li>
                        <li>Tuition Fee (per credit) - 45 credits</li>
                        <li>Examination Fee (per course)</li>
                        <li>Library Fee (per semester)</li>
                        <li>Computer Lab Fee (per semester)</li>
                        <li>Building Construction Fee (once)</li>
                        <li>Management Project Fee - 3 credits (once)</li>
                        <li>Management Project Evaluation & Defence Fee (once)</li>
                        <li>Program Office Support Fee (after completion of major courses)</li>
                        <li>Program Coordination Fee (per semester)</li>
                        <li>Original Certificate & Convocation Fee (last semester)</li>
                        <li>Semester Development Fee</li>
                    </ul>

                    <Typography className="font-bold">Grand Total: Tk. 1,31,000/-</Typography>
                    <Typography>
                        Students must also bear the cost of reading materials. A refundable
                        security deposit of Tk. 200/- per book is required for library usage.
                    </Typography>

                    <Typography variant="h3">2. Foreign Students</Typography>
                    <Typography>
                        Foreign students may apply if they meet the admission requirements
                        through IBA Admission Test or GMAT (score 400+). English proficiency
                        is required. Estimated tuition and living costs: USD 2,000 per year.
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default MBAExecutive;