import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableFooter } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import building from "@/assets/buildings/building3.png";
import { useTheme } from "@/hooks/useTheme";
import Typography from "@/components/ui/typography";

const MBA = () => {
    const { theme } = useTheme();
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
                    MBA Admission
                </Typography>
            </div>
            <div className="max-w-5xl mx-auto mt-10">
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-2xl font-semibold">Admission Guidelines</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p><strong>1. Admission:</strong> The objective of the admission policy is to select students on a competitive basis for the MBA program. A student is selected for admission on the basis of past academic records, performance in admission test and interview. The admission into the program is held only once a year.</p>
                        <Separator />
                        <p><strong>1.1 Academic Qualifications:</strong> Applicants must be BBA graduates from recognized private and public universities with at least a 2.5 CGPA on a 4.0 scale. Equivalence for other certificates is determined by the Institute.</p>
                        <Separator />
                        <p><strong>1.2 Selection:</strong> The selection process consists of two stages:</p>
                        <ul className="list-disc list-inside">
                            <li>Written admission test covering English, Mathematics, and Aptitude. Candidates with a GMAT score of 400 or more (minimum 25 percentile in verbal and 40 percentile in quantitative) are exempt from the test and should apply for an interview.</li>
                            <li>Successful candidates from the written test will be interviewed. Final selection is based on past academic records and performance in both the written test and interview.</li>
                        </ul>
                        <Separator />
                        <p><strong>1.3 Application Procedure:</strong> A candidate should apply for written admission test in the prescribed form available MBA program Office on payment of fees of Tk. 800/- only. These can be obtained by mail from MBA program Office by sending- <br /> (i) a bank draft for Tk. 800/- drawn in favour of Director, IBA, R.U. and <br />(ii) a 10² x 8² size self addressed envelope with postage stamp of Tk. 35/-. The filled-in application form should be submitted to MBA Program Office within dates notified in the press.
                        </p>
                        <p>Further information can be obtained from MBA Program Office, IBA, Rajshahi University, Rajshahi-6205, Phone: +88-0721 711167, 751508. <strong>E-mail: info@iba-ru.ac.bd</strong></p>
                        <Separator />
                        <p><strong>1.4 Registration:</strong> Applicants finally accepted for the program should obtain the prescribed registration form from the MBA Program Office of the Institute and submit it to the same office, duly filled in along with 2 passport size photographs, 2 stamp size photograph and other requisite documents within the scheduled time. Candidates who have completed the above formalities must pay the requisite fees. Enrollment in the Institute and admittance into classes are conditional upon completion of all admission formalities including payment of fees.</p>
                        <Separator />
                        <h2 className="text-xl font-semibold mt-6">Fee Structure</h2>
                        <Table className="mt-4 border max-w-lg mx-auto">
                            <TableHeader>
                                <TableRow>
                                    <TableHead >Fee Description</TableHead>
                                    <TableHead >Amount (BDT)</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Registration Fee (once)</TableCell>
                                    <TableCell>Included</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Program Coordination Fee </TableCell>
                                    <TableCell>Included</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Examination Fee (per course)</TableCell>
                                    <TableCell>Included</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Tuition Fee (per course)</TableCell>
                                    <TableCell>Included</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Semester Fee (per course)</TableCell>
                                    <TableCell>Included</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Computer Lab Fee (per course)</TableCell>
                                    <TableCell>Included</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Library  Fee (per course)</TableCell>
                                    <TableCell>Included</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Internship  Fee </TableCell>
                                    <TableCell>Included</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Original Certificate Fee</TableCell>
                                    <TableCell>Included</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Building Construction Fee (once)</TableCell>
                                    <TableCell>Included</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Semester Development Fee</TableCell>
                                    <TableCell>Included</TableCell>
                                </TableRow>
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableCell>Total</TableCell>
                                    <TableCell>96,200/-</TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                        <Separator />
                        <p>In addition, the students are to bear the cost of reading materials to be supplied by the Institute. Further to the payment of above fees to the University, the students of the MBA program are required to deposit as security a sum of Tk. 200/- (Two hundred) only per book issued from the IBA library for a semester. The amount is refundable on return of all books in good condition after the student completes or withdraws from the program. There is a user fee of Tk. 20/- per book per semester.  All fees and charges are subject to revision.</p>
                        <p>Selected candidates who have completed the above mentioned requirements for admission to the university will be enrolled in classes of the Institute. No student shall be eligible for enrollment in the Institute or be permitted to attend any class unless the person has completed the above admission procedure and has paid all fees.</p>
                        <Separator />
                        <p><strong>2. Foreign Students:</strong> Foreign applicants can apply if they meet the admission requirements via IBA Admission Test or GMAT (400+ score, at least 25 percentile in verbal). English proficiency is required. Estimated cost for tuition and living is US$ 2,000 per academic year. Admission queries for foreign students are processed throughout the year.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default MBA;
