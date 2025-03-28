import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableFooter } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import building from "@/assets/buildings/building3.png";
import { useTheme } from "@/hooks/useTheme";
import Typography from "@/components/ui/typography";

const MBAEvening = () => {
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
                    Evening <br /> MBA Admission
                </Typography>
            </div>
            <div className="max-w-5xl mx-auto mt-10">
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-2xl font-semibold">Admission Guidelines</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p><strong>1.1 Requirements:</strong> A bachelor degree or its equivalent in any field including engineering, agriculture, or medicine is the minimum educational requirement. Minimum qualifying points for eligibility is 6 (six), calculated based on prior academic performance.</p>
                        <Separator />
                        <p><strong>1.2 Selection:</strong> Candidates must take the IBA written admission test covering Mathematics, English, and Aptitude. Candidates with a GMAT score of 400 or more with at least 25 percentile in verbal and 40 percentile in quantitative are exempt from the test and can apply for an interview directly.</p>
                        <Separator />
                        <p><strong>1.3 Application Procedure:</strong> Application forms are available at the MBA Program Office for Tk. 800/- or by mail with a bank draft and self-addressed envelope. Completed applications must be submitted within the notified dates.</p>
                        <Separator />
                        <p><strong>1.4 Registration:</strong> Selected candidates must complete registration by submitting required documents and photographs along with fee payments. Enrollment is conditional on completing these formalities.</p>
                        <Separator />
                        <h2 className="text-xl font-semibold mt-6">Fee Structure</h2>
                        <Table className="mt-4 border text-center">
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Fee Description</TableHead>
                                    <TableHead>Amount (BDT)</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Program Coordination Fee (per semester)</TableCell>
                                    <TableCell>-</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Registration Fee (once)</TableCell>
                                    <TableCell>-</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Examination Fee (per course)</TableCell>
                                    <TableCell>-</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Tuition Fee (per course)</TableCell>
                                    <TableCell>-</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Semester Fee (per semester)</TableCell>
                                    <TableCell>-</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Computer Lab Fee (per semester)</TableCell>
                                    <TableCell>-</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Library Fee (per semester)</TableCell>
                                    <TableCell>-</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Internship Fee</TableCell>
                                    <TableCell>-</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Original Certificate Fee with Convocation Fee</TableCell>
                                    <TableCell>-</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Building Construction Fee (once)</TableCell>
                                    <TableCell>-</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Semester Development Fee</TableCell>
                                    <TableCell>-</TableCell>
                                </TableRow>
                            </TableBody>
                            <TableFooter>
                                <TableRow className="font-bold">
                                    <TableCell className="text-right">Total Fee</TableCell>
                                    <TableCell>1,51,000 BDT</TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                        <Separator />
                        <p><strong>2. Foreign Students:</strong> Foreign students can apply with a minimum GMAT score of 400 (25 percentile in verbal). Knowledge of English is required. Estimated tuition and living costs are USD 1,500 per year.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default MBAEvening;
