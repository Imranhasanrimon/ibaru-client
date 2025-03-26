import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableFooter } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import building from "@/assets/buildings/building3.png";
import { useTheme } from "@/hooks/useTheme";
import Typography from "@/components/ui/typography";

const BBA = () => {
    const { theme } = useTheme()
    return (
        <div className="py-8 px-4 lg:px-6 max-w-7xl mx-auto text-justify">
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
                    BBA Admission
                </Typography>
            </div>
            {/* Admission Rules Content */}
            <div className="max-w-5xl mx-auto mt-10">
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-2xl font-semibold">Admission Guidelines</CardTitle>
                    </CardHeader>
                    <CardContent className=" space-y-4">
                        <p><strong>1.1 General Requirements:</strong> Every applicant, without exception, must fulfill the admission requirements as laid down by Institute of Business Administration (IBA), Rajshahi University (R.U.). The admission test is held once in a year for admission into the first semester, as decided by Academic Committee of IBA. No interim or supplementary admission test or interview is arranged.</p>
                        <Separator />
                        <p><strong>1.2 Applicants Eligibility:</strong> To apply for admission, an applicant must have completed the Higher Secondary Certificate (HSC) or its equivalent and the Secondary School Certificate (SSC) or its equivalent in any field of study, with a minimum of total 6 (six) qualifying points. However, if an applicant appears at O level exam, s/he must pass at least five subjects (including mathematics). In case of A’ level exam, an applicant must pass at least two subjects.</p>


                        {/* Eligibility Table */}
                        <h2 className="text-xl font-semibold mt-6">Eligibility Criteria</h2>
                        <Table className=" max-w-xl mx-auto border  text-center">
                            <TableHeader>
                                <TableRow>
                                    <TableHead>SSC (GPA/Div)</TableHead>
                                    <TableHead>HSC (GPA/Div)</TableHead>
                                    <TableHead>O’ Level (GPA)</TableHead>
                                    <TableHead>A’ Level (GPA)</TableHead>
                                    <TableHead>Qualifying Points</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>{">="} 4.0 / 1st</TableCell>
                                    <TableCell>{">="} 4.0 / 1st</TableCell>
                                    <TableCell>{">="} 3.0</TableCell>
                                    <TableCell>{">="} 2.5</TableCell>
                                    <TableCell>3</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>{">="} 3.5 / 2nd</TableCell>
                                    <TableCell>{">="} 3.5 / 2nd</TableCell>
                                    <TableCell>{">="} 2.5</TableCell>
                                    <TableCell>{">="} 2.0</TableCell>
                                    <TableCell>3</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>

                        <Separator />

                        <p><strong>1.3 Admission Test:</strong> All applicants (except foreign students) will be required to appear at an admission test which is administered by IBA in Rajshahi. The applicants’ aptitude will be tested in the following three areas:</p>
                        <ul className="list-disc list-inside">
                            <li>English Language and Communication.</li>
                            <li>Analytical Ability.</li>
                            <li>Basics of Science / Basics of Business / Basics of Humanities</li>
                        </ul>

                        <Separator />

                        <p><strong>1.4 Final Selection:</strong> Final selection is based on the marks obtained in the admission test.</p>

                        <Separator />

                        <p><strong>1.5 Foreign Applicants:</strong> A foreign applicant’s eligibility to apply for admission is the same as mentioned in section 1.2. However, a foreign applicant having a score of 1200 or more (with at least 400 in verbal) in SAT may be exempted from the admission test. IBA authority will make the decision of exemption on a case-by-case basis. In case of exemption, the evaluation of the applicant will be made on the basis of SAT score, academic references, and writing assignments provided by IBA. The tuition fees for a foreign student to be paid to the University of Rajshahi is US$ 1,200 per year. However, students from SAARC countries (India, Pakistan, Nepal, Bhutan, Maldives, Sri Lanka and Afghanistan) will be charged an annual tuition fees US$ 500 or equivalent Bangladeshi Taka.</p>

                        <Separator />
                        <p><strong>1.6 Registration:</strong> Applicants finally accepted for the program should obtain the prescribed form of application for admission from the BBA program office of the Institute. The form should be duly filled in and submitted to the office along with 4 passport size photographs, and one stamp size photograph and other requisite documents within the scheduled time. Candidates who have completed the above formalities must then pay the requisite fees as determined by IBA. Enrollment in the Institute and admittance into classes are conditional upon completion of all admission formalities including payment of fees.</p>

                        <Separator />

                        {/* Fee Structure Table */}
                        <h2 className="text-xl font-semibold mt-6">Fee Structure</h2>
                        <Table className="mt-4 border text-center">
                            <TableHeader >
                                <TableRow >
                                    <TableHead className="text-center">Semester</TableHead>
                                    <TableHead className="text-center">Development Fee</TableHead>
                                    <TableHead className="text-center">Computer Lab Fee</TableHead>
                                    <TableHead className="text-center">Library Fee</TableHead>
                                    <TableHead className="text-center">Examination Fee</TableHead>
                                    <TableHead className="text-center">Total (BDT)</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>1st Semester</TableCell>
                                    <TableCell>5000</TableCell>
                                    <TableCell>3000</TableCell>
                                    <TableCell>1000</TableCell>
                                    <TableCell>5000</TableCell>
                                    <TableCell>14000</TableCell>
                                </TableRow>
                                {[...Array(7)].map((_, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{`${index + 2}nd Semester`}</TableCell>
                                        <TableCell>-</TableCell>
                                        <TableCell>3000</TableCell>
                                        <TableCell>1000</TableCell>
                                        <TableCell>5000</TableCell>
                                        <TableCell>9000</TableCell>
                                    </TableRow>
                                ))}

                            </TableBody>
                            <TableFooter>
                                <TableRow className="font-bold">
                                    <TableCell colSpan={5} className="text-right">Total Fee</TableCell>
                                    <TableCell>87,000 BDT</TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>

                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default BBA;