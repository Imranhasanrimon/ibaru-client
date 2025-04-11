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
    const { name, studentId, registration, session, batch, image, coverImage, NID, birthDate, bloodGroup, district, email, fatherName, motherName, gender, hall, height, phoneNo, religion } = studentInfo;

    if (isLoading) return <LoadingSpinner />
    return (
        <div className="sm:w-lg lg:w-2xl w-full mx-auto p-4">
            <Card className="rounded-2xl shadow-md py-4">
                <CardContent className="px-4">
                    <div className="relative">
                        <img className="rounded-xl h-60 sm:h-64 lg:h-96 object-cover w-full" src={coverImage || cover} alt="cover image" />

                        <div className="flex flex-col lg:flex-row items-center lg:justify-between lg:items-end w-full p-4 absolute -bottom-32 lg:-bottom-18" >
                            <div className="flex flex-col items-center lg:flex-row lg:items-end gap-4">
                                <Avatar className="w-32 lg:w-24 h-32 lg:h-24 border-2 ">
                                    <AvatarImage src={image} alt={studentId} />
                                    <AvatarFallback>
                                        {studentId.slice(-3)}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="text-center lg:text-left -mt-3 lg:mt-0">
                                    <h2 className="text-lg font-semibold">{name}</h2>
                                    <p className="text-muted-foreground text-sm">
                                        {studentId}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="mt-32 lg:mt-20 space-y-2 text-sm p-4">

                        <div className="flex justify-between">
                            <p><span className="font-medium">Reg. No:</span> {registration}</p>

                            <p><span className="font-medium">NID:</span> {NID ? NID : "N/A"}</p>
                        </div>

                        <div className="flex justify-between">
                            <p><span className="font-medium">Batch:</span> {batch}<sup>{batch == 1 ? "st" : batch == 2 ? "nd" : batch == 3 ? "rd" : "th"}</sup></p>

                            <p><span className="font-medium">Session:</span> {session}</p>
                        </div>

                        <div className="flex justify-between">
                            <p><span className="font-medium">Gender:</span> {gender ? gender : "N/A"}</p>

                            <p><span className="font-medium">Height:</span> {height ? height : "N/A"}</p>
                        </div>

                        <div className="flex justify-between">
                            <p><span className="font-medium">District:</span> {district ? district : "N/A"}</p>
                            <p><span className="font-medium">Religion:</span> {religion ? religion : "N/A"}</p>
                        </div>

                        <div className="flex justify-between">
                            <p><span className="font-medium">Date of Birth:</span> {birthDate ? birthDate : "N/A"}</p>

                            <p><span className="font-medium">Blood Group:</span> {bloodGroup ? bloodGroup : "N/A"}</p>
                        </div>

                        <p><span className="font-medium">Email:</span> {email ? email : "N/A"}</p>

                        <p><span className="font-medium">Father's Name:</span> {fatherName ? fatherName : "N/A"}</p>

                        <p><span className="font-medium">Mother's Name:</span> {motherName ? motherName : "N/A"}</p>

                        <p><span className="font-medium">Hall:</span> {hall ? hall : "N/A"}</p>


                        <p><span className="font-medium">Mobile No:</span> {phoneNo ? phoneNo : "N/A"}</p>



                        <Link to={`/all-feeds/${studentId}`}><Button variant="outline" className="cursor-pointer">All Posts</Button></Link>
                    </div>



                </CardContent>
            </Card>
        </div>
    );
};

export default StudentProfile;