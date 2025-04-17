import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Facebook, FacebookIcon, Linkedin, LinkedinIcon, Mail, } from "lucide-react";

import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "@/myComponents/LoadingSpinner";
import useAuth from "@/hooks/useAuth";
import AllBatchStudents from "@/myComponents/AllBatchStudents";

const Batch = () => {
    const { user, isLoading: isLoadingAuth } = useAuth()
    const { batchNo } = useParams();
    const axiosSecure = useAxiosSecure();
    const { data: batch = [], isLoading, } = useQuery({
        queryKey: ["batch", batchNo],
        queryFn: async () => {
            const res = await axiosSecure(`/batches/allBatches/${batchNo}`);
            return res.data;
        }
    })
    const { logo, coverImage, nickName, slogan, description, coordinator, CRInfo, socialLinks, achievements, allStudents = [] } = batch
    if (!batch) return <p className="text-center text-red-500">Batch not found.</p>;
    if (isLoading || isLoadingAuth) return <LoadingSpinner />
    return (
        <div className="max-w-5xl mx-auto p-4 space-y-4 ">
            {/* Cover Image */}
            <div className="relative mb-40 md:mb-24">
                <div className="relative w-full h-60 rounded-md md:rounded-lg overflow-hidden border-2">
                    <img src={coverImage} alt={`${nickName} Cover`} className="object-cover object-center w-full h-full" />
                    <div className="absolute inset-0  flex items-center justify-center bg-card/30 text-4xl font-bold">
                    </div>

                    <div className="absolute z-30  bottom-2 sm:bottom-4 text-xl w-full md:w-auto md:right-0 mx-auto flex justify-between px-2 sm:px-4 gap-4">
                        <Button variant="secondary"> <FacebookIcon /></Button>
                        <Button variant="secondary"> <LinkedinIcon /></Button>
                        <Button variant="secondary" className="hidden md:block"> <Mail /></Button>
                    </div>
                </div>

                <div className="z-50 absolute -bottom-32 md:-bottom-16 lg:-bottom-18 left-1/2 md:left-4 -translate-x-1/2 md:translate-x-0 flex flex-col items-center md:flex-row md:items-end gap-2 md:gap-4">
                    <div >
                        <img src={logo} alt="Batch Logo" className="h-32 w-32 rounded-full border-2" />
                    </div>

                    {/* Nickname & Slogan */}
                    <div className="text-center md:text-left">
                        <h1 className="text-lg md:text-xl lg:text-3xl font-bold">{nickName} <Badge variant="secondary">{batchNo}th</Badge></h1>
                        <p className="text-gray-500 italic">"{slogan}"</p>
                    </div>


                </div>

            </div>


            {/* Description */}
            <Card className="p-4">
                <CardContent className="p-0" >
                    <p className="text-gray-700 text-lg">{description}</p>
                </CardContent>
            </Card>

            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                {/* Coordinator */}
                <Card className="p-4">
                    <CardContent className="flex items-center gap-4 p-0">
                        <Avatar className="h-16 w-16">
                            <AvatarImage src={coordinator.image} />
                            <AvatarFallback>{coordinator.name.split(" ")[1]}</AvatarFallback>
                        </Avatar>
                        <div>
                            <h2 className="text-xl font-semibold">{coordinator.name}</h2>
                            <p className="text-gray-500">{coordinator.title}</p>
                        </div>
                    </CardContent>
                </Card>
                {/* CRID */}
                <Card className="p-4">
                    <CardContent className="flex items-center gap-4 p-0">
                        <Avatar className="h-16 w-16">
                            <AvatarImage src={CRInfo.image} />
                            <AvatarFallback>{CRInfo.name.split(" ")[1]}</AvatarFallback>
                        </Avatar>
                        <div>
                            <h2 className="text-xl font-semibold">{CRInfo.name}</h2>
                            <p className="text-gray-500">{CRInfo.studentId}</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
                {socialLinks.facebook && (
                    <Button variant="outline" size="icon" asChild>
                        <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                            <Facebook className="h-5 w-5" />
                        </a>
                    </Button>
                )}
                {socialLinks.linkedin && (
                    <Button variant="outline" size="icon" asChild>
                        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-5 w-5" />
                        </a>
                    </Button>
                )}
            </div>

            {/* Achievements */}
            <Card>
                <CardContent className="p-6 space-y-2">
                    <h3 className="text-xl font-semibold mb-2">Achievements</h3>
                    {achievements.map((item, idx) => (
                        <Badge key={idx} variant="secondary" className="mr-2">{item}</Badge>
                    ))}
                </CardContent>
            </Card>

            {/* allStudents */}
            <AllBatchStudents allStudents={allStudents} user={user} batchNo={batchNo} />
        </div >
    );
};

export default Batch;