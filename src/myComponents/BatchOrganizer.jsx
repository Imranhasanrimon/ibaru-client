import { getStudentId } from "@/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, } from "lucide-react";

const BatchOrganizer = ({ programChairman, coordinator, CRInfo, user }) => {
    return (
        <div className="grid md:grid-cols-2 gap-4">
            {/* programChairman */}
            <Card className="p-4">
                <CardContent className="flex flex-col items-center gap-2 p-0">
                    <Avatar className="h-24 w-24 rounded-full">
                        <AvatarImage src={programChairman.image} />
                        <AvatarFallback>{programChairman?.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                        <Badge>Program Chairman</Badge>
                        <h2 className="text-xl font-semibold mt-1">{programChairman.name}</h2>
                        <p className="text-gray-500">{programChairman.title}</p>
                        <Link to="/faculties"> <Button variant="outline" className="h-8 w-12 mt-1 cursor-pointer">View</Button></Link>
                    </div>
                </CardContent>
            </Card>
            {/* Coordinator */}
            <Card className="p-4">
                <CardContent className="flex flex-col items-center gap-2 p-0">
                    <Avatar className="h-24 w-24 rounded-full">
                        <AvatarImage src={coordinator.image} />
                        <AvatarFallback>{coordinator.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                        <Badge>Coordinator</Badge>
                        <h2 className="text-xl font-semibold mt-1">{coordinator.name}</h2>
                        <p className="text-gray-500">{coordinator.title}</p>
                        <Link to="/faculties"> <Button variant="outline" className="h-8 w-12 mt-1 cursor-pointer">View</Button></Link>
                    </div>
                </CardContent>
            </Card>
            {/* MaleCR */}
            <Card className="p-4">
                <CardContent className="flex flex-col items-center gap-2 p-0">
                    <Avatar className="h-24 w-24 rounded-full">
                        <AvatarImage src={CRInfo?.male?.image} />
                        <AvatarFallback>{CRInfo?.male?.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                        <Badge>Male CR</Badge>
                        <h2 className="text-xl font-semibold mt-1">{CRInfo?.male?.name}</h2>
                        <p className="text-gray-500"><Mail className="inline-block mr-1 mb-1" size={18} />s{CRInfo?.male?.studentId}@ru.ac.bd</p>
                        <Link to={`/${user && getStudentId(user.email) === CRInfo?.male?.studentId ? "dashboard/my-account" : `student-profile/${CRInfo?.male?.studentId}`}`}>
                            <Button variant="outline" className="h-8 w-12 mt-1 cursor-pointer">View</Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
            {/* FemaleCR */}
            <Card className="p-4">
                <CardContent className="flex flex-col items-center gap-2 p-0">
                    <Avatar className="h-24 w-24 rounded-full">
                        <AvatarImage src={CRInfo?.female?.image} />
                        <AvatarFallback>{CRInfo?.female?.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                        <Badge>Female CR</Badge>
                        <h2 className="text-xl font-semibold mt-1">{CRInfo?.female?.name}</h2>
                        <p className="text-gray-500"><Mail className="inline-block mr-1 mb-1" size={18} />s{CRInfo?.female?.studentId}@ru.ac.bd</p>

                        <Link to={`/${user && getStudentId(user.email) === CRInfo?.female?.studentId ? "dashboard/my-account" : `student-profile/${CRInfo?.female?.studentId}`}`}>
                            <Button variant="outline" className="h-8 w-12 mt-1 cursor-pointer">View</Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default BatchOrganizer;