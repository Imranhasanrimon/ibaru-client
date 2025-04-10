import useAuth from "@/hooks/useAuth";
import { axiosInstance } from "@/hooks/useAxiosSecure";
import LoadingSpinner from "@/myComponents/LoadingSpinner";
import { getStudentId } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import cover from "@/assets/buildings/cover.jpg"
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import EditProfileModal from "./EditProfileModal";
import { Camera } from "lucide-react";
import ProfileImageChange from "./ProfileImageChange";

const MyAccount = () => {
    const { user, loading } = useAuth();

    const { data: studentInfo = {}, isLoading, refetch } = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            const res = await axiosInstance(`/users/aUser/${getStudentId(user?.email)}`);
            return res?.data;
        }
    });
    const { name, studentId, registration, session, batch, image, } = studentInfo;



    if (isLoading || loading) return <LoadingSpinner />
    return (
        <div className="sm:w-lg lg:w-2xl w-full mx-auto p-4">
            <Card className="rounded-2xl shadow-md py-4">
                <CardContent className="px-4">
                    <div className="relative">
                        <img className="rounded-xl h-60 sm:h-64 lg:h-96 object-cover w-full" src={cover} alt="cover image" />
                        <Camera className="absolute bottom-2 right-2 w-9 md:w-8 h-9 md:h-8 p-[5px] rounded-md bg-background border" />

                        <div className="flex flex-col md:flex-row items-center md:justify-between md:items-end w-full p-4 absolute -bottom-40 md:-bottom-18" >
                            <div className="flex flex-col md:flex-row md:items-end gap-4">
                                <div className="relative">
                                    <Avatar className="w-32 md:w-24 h-32 md:h-24 border-2 ">
                                        <AvatarImage src={image} alt={studentId} />
                                        <AvatarFallback>
                                            {studentId && studentId.slice(-3)}
                                        </AvatarFallback>
                                    </Avatar>

                                    <ProfileImageChange refetch={refetch} />
                                </div>
                                <div className="text-center md:text-left">
                                    <h2 className="text-xl md:text-lg -mt-2 md:mt-0 font-semibold">{name}</h2>
                                    <p className="text-muted-foreground text-sm">
                                        {studentId}
                                    </p>
                                </div>
                            </div>
                            <EditProfileModal studentInfo={studentInfo} refetch={refetch} />
                        </div>

                    </div>

                    <div className="mt-40 md:mt-20 space-y-2 text-sm p-4">
                        <p><span className="font-medium">Batch:</span> {batch}<sup>{batch == 1 ? "st" : batch == 2 ? "nd" : batch == 3 ? "rd" : "th"}</sup></p>
                        <p><span className="font-medium">Session:</span> {session}</p>
                        <p><span className="font-medium">Registration:</span> {registration}</p>
                        <Link to={`/dashboard/my-all-posts/${studentId}`}><Button variant="outline" className="cursor-pointer">My Posts</Button></Link>
                    </div>


                </CardContent>
            </Card>
        </div>
    );
};

export default MyAccount;