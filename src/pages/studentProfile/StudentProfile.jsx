import useAxiosSecure from '@/hooks/useAxiosSecure';
import LoadingSpinner from '@/myComponents/LoadingSpinner';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import cover from "@/assets/buildings/cover.jpg"
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const StudentProfile = () => {
    const axiosSecure = useAxiosSecure();
    const { id } = useParams();
    const { data: studentInfo = {}, isLoading } = useQuery({
        queryKey: ["student"],
        queryFn: async () => {
            const res = await axiosSecure(`/users/aUser/${id}`);
            return res.data;
        }
    })
    const { name, studentId, registration, session, batch, image, } = studentInfo;

    if (isLoading) return <LoadingSpinner />
    return (
        <div className="sm:w-lg lg:w-2xl w-full mx-auto p-4">
            <Card className="rounded-2xl shadow-md py-4">
                <CardContent className="px-4">
                    <div className="relative">
                        <img className="rounded-xl h-60 sm:h-64 lg:h-96 object-cover w-full" src={cover} alt="cover image" />

                        <div className="flex justify-between items-end w-full p-4 absolute -bottom-18" >
                            <div className="flex items-end gap-4">
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

                    </div>

                    <div className="mt-20 space-y-2 text-sm p-4">
                        <p><span className="font-medium">Batch:</span> {batch}<sup>{batch == 1 ? "st" : batch == 2 ? "nd" : batch == 3 ? "rd" : "th"}</sup></p>
                        <p><span className="font-medium">Session:</span> {session}</p>
                        <p><span className="font-medium">Registration:</span> {registration}</p>
                        <Link to={`/all-feeds/${studentId}`}><Button variant="outline" className="cursor-pointer">All Posts</Button></Link>
                    </div>


                </CardContent>
            </Card>
        </div>
    );
};

export default StudentProfile;