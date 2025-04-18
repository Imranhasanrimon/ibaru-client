import { useTheme } from "@/hooks/useTheme";
import { getStudentId } from "@/utils";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EllipsisVertical, HeartPulse, LucideFacebook, LucideLinkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const AllBatchStudents = ({ allStudents, user, batchNo }) => {
    const { theme } = useTheme();

    return (
        <div className="py-6">

            <h3 className={`text-2xl sm:text-3xl text-center font-semibold mb-1`}>All Students</h3>
            <p className={`text-center text-slate-${theme == "dark" ? "400" : "600"} px-4 mb-8`}>These are the students from {batchNo}<sup>{batchNo == 1 ? "st" : batchNo == 2 ? "nd" : batchNo == 3 ? "rd" : "th"}</sup> batch who have registered in this platform.</p>

            {allStudents.length == 0 ? <div className="bg-card shadow-sm p-4 rounded-lg text-xl text-center border"><p>No students registered yet.</p></div> :
                <div className="grid md:grid-cols-2 gap-2  rounded-md">
                    {
                        allStudents.map(student => <Card key={student.studentId} className="p-2">
                            <CardContent className="p-0 relative ">
                                <div className="flex items-center gap-2 p-0">
                                    <Avatar className="h-16 w-16 rounded-lg">
                                        <AvatarImage src={student.image} />
                                        <AvatarFallback>{student.name.split(" ")[1]}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h2 className={`md:text-lg font-semibold`}>{student.name}</h2>
                                        <p className="text-gray-500">{student.studentId}</p>
                                    </div>
                                </div>

                                <div >
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline" className="w-8 h-9 absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer"><EllipsisVertical /></Button>
                                        </PopoverTrigger>
                                        <PopoverContent side="left" className="w-auto max-w-69 p-2">
                                            <div className="grid gap-4">
                                                <div className="space-y-2">
                                                    <h4 className="font-semibold leading-none">{student.name}</h4>

                                                    {
                                                        student?.district || student?.bloodGroup ? <div className={`${student?.district.length > 16 ? "flex flex-col" : "flex items-center gap-3"}`}>

                                                            {student?.district && <h5 className=" text-muted-foreground"><MapPin className="inline-block mb-1 mr-1" size={18} />{student?.district}</h5>}

                                                            {student?.bloodGroup && <h5 className=" text-muted-foreground"><HeartPulse className="inline-block mb-1 mr-1" size={18} />BG :  {`${student?.bloodGroup[0]} ${student?.bloodGroup[1]}`} </h5>}

                                                        </div>
                                                            : ""
                                                    }

                                                    {student?.bio && <p className="text-sm text-muted-foreground">
                                                        {student.bio}
                                                    </p>}
                                                </div>
                                            </div>

                                            <div className="flex items-center  gap-2 mt-4">
                                                <Link to={`${user && getStudentId(user?.email) == student.studentId ? '/dashboard/my-account' : `/student-profile/${student.studentId}`}`}>
                                                    <Button variant="outline" className="h-8 px-2 cursor-pointer "> Profile</Button>
                                                </Link>
                                                <Button variant="outline" className="h-8 cursor-pointer" onClick={() => window.location.href = `tel:${student?.phoneNo}`}>
                                                    < Phone />
                                                </Button>

                                                <Button variant="outline" className="h-8 cursor-pointer" onClick={() => {
                                                    window.location.href = `mailto:s${student.studentId}@ru.ac.bd`
                                                }}>
                                                    < Mail />
                                                </Button>

                                                <Button variant="outline" className="h-8 cursor-pointer" >
                                                    < LucideFacebook />
                                                </Button>

                                                <Button variant="outline" className="h-8 cursor-pointer" >
                                                    < LucideLinkedin />
                                                </Button>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </CardContent>
                        </Card>)
                    }
                </div>
            }
        </div>
    );
};

export default AllBatchStudents;