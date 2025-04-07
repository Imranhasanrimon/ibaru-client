import useAuth from "@/hooks/useAuth";
import { axiosInstance } from "@/hooks/useAxiosSecure";
import LoadingSpinner from "@/myComponents/LoadingSpinner";
import { getStudentId } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import cover from "@/assets/buildings/cover.jpg"

const MyAccount = () => {
    const { user } = useAuth();

    const { data: studentInfo, isLoading } = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            const data = await axiosInstance(`/users/aUser/${getStudentId(user?.email)}`);
            return data?.data;
        }
    });
    const { name, studentId, registration, session, batch, image, } = studentInfo;

    if (isLoading) return <LoadingSpinner />
    return (
        <div className="sm:w-lg lg:w-2xl mx-auto p-6">
            <Card className="rounded-2xl shadow-md py-4 sm:py-6">
                <CardContent className="px-4 sm:px-6">
                    <div className="relative">
                        <img className="rounded-xl h-60 sm:h-64 lg:h-96 object-cover w-full" src={cover} alt="cover image" />

                        <div className="flex items-end gap-4 p-4 absolute -bottom-18" >
                            <Avatar className="w-24 h-24 border-2 border-black">
                                <AvatarImage src={image} alt={studentId} />
                                <AvatarFallback>
                                    {studentId.slice(-3)}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <h2 className="text-lg font-semibold">{name}</h2>
                                <p className="text-muted-foreground text-sm">
                                    {studentId}
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="mt-20 space-y-2 text-sm p-4">
                        <p><span className="font-medium">Batch:</span> {batch}<sup>{batch == 1 ? "st" : batch == 2 ? "nd" : batch == 3 ? "rd" : "th"}</sup></p>
                        <p><span className="font-medium">Session:</span> {session}</p>
                        <p><span className="font-medium">Registration:</span> {registration}</p>
                    </div>

                </CardContent>
            </Card>
        </div>
    );
};

export default MyAccount;