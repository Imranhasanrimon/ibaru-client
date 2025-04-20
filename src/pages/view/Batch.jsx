import { Link, useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FacebookIcon, LinkedinIcon, Mail, Phone, } from "lucide-react";

import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "@/myComponents/LoadingSpinner";
import useAuth from "@/hooks/useAuth";
import AllBatchStudents from "@/myComponents/AllBatchStudents";
import BatchOrganizer from "@/myComponents/BatchOrganizer";

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
    const { logo, coverImage, nickName, slogan, description, coordinator, programChairman, CRInfo, socialLinks, achievements, allStudents = [] } = batch

    if (!batch) return <p className="text-center text-red-500 min-h-screen flex items-center justify-center text-xl md:text-3xl lg:text-5xl">Batch not found.</p>;
    if (isLoading || isLoadingAuth) return <LoadingSpinner />
    return (
        <div className="max-w-5xl mx-auto p-4 space-y-4 ">
            {/* Cover Image */}
            <div className="relative mb-40 md:mb-24">
                <div className="relative w-full h-60 rounded-md md:rounded-lg overflow-hidden border-2">
                    <img src={coverImage} alt={`${nickName} Cover`} className="object-cover object-center w-full h-full" />

                    {/* overlay */}
                    <div className="absolute inset-0  flex items-center justify-center bg-card/30 text-4xl font-bold">
                    </div>

                    <div className="absolute z-30  bottom-2 sm:bottom-4 text-xl w-full md:w-auto md:right-0 mx-auto flex justify-between px-2 sm:px-4 gap-4">
                        <div className="flex gap-2 sm:gap-4">
                            <Link to={socialLinks?.facebook}>
                                <Button className="cursor-pointer"> <FacebookIcon /></Button>
                            </Link>
                            <Link to={socialLinks?.linkedin ? socialLinks?.linkedin : ""}>
                                <Button className="cursor-pointer"> <LinkedinIcon /></Button>
                            </Link>
                        </div>

                        <div className="flex gap-2 sm:gap-4">
                            <Button className="cursor-pointer" onClick={() => {
                                window.location.href = `mailto:${socialLinks?.email ? socialLinks.email : `s${CRInfo?.male?.studentId}@ru.ac.bd`}`
                            }}>
                                < Mail />
                            </Button>

                            <Button className="cursor-pointer" onClick={() => window.location.href = `tel:${CRInfo?.male?.phoneNo ? CRInfo?.male?.phoneNo : '01XXXXSORRY'}`}>
                                < Phone />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="z-40 absolute -bottom-32 md:-bottom-16 lg:-bottom-18 left-1/2 md:left-4 -translate-x-1/2 md:translate-x-0 flex flex-col items-center md:flex-row md:items-end gap-2 md:gap-4">
                    <div >
                        <img src={logo} alt="Batch Logo" className="h-32 w-32 rounded-full border-2" />
                    </div>

                    {/* Nickname & Slogan */}
                    <div className="text-center md:text-left">
                        <h1 className="text-lg md:text-xl lg:text-3xl font-bold">{nickName} <Badge variant="secondary">{batchNo}{batchNo == 1 ? "st" : batchNo == 2 ? "nd" : batchNo == 3 ? "rd" : "th"}</Badge></h1>
                        <p className="text-gray-500 italic">"{slogan}"</p>
                    </div>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
                {/* Description */}
                <Card className="p-4">
                    <CardContent className="p-0 " >
                        <h3 className="text-xl font-semibold mb-1 text-center">Intro</h3>
                        <p className="text-gray-500 text-center">{description}</p>
                    </CardContent>
                </Card>
                {/* Achievements */}
                <Card className="p-4">
                    <CardContent className="p-0 space-y-2 text-center">
                        <h3 className="text-xl font-semibold mb-2">Achievements</h3>
                        {achievements.map((item, idx) => (
                            <Badge key={idx} variant="secondary" className="mr-2">{item}</Badge>
                        ))}
                    </CardContent>
                </Card>
            </div>

            {/* Gallery */}
            <Card className="p-4 mb-8">
                <CardContent className="p-0 grid grid-cols-2 sm:grid-cols-4 gap-4" >

                    <div className="col-span-2 sm:col-span-4 flex justify-between items-center">
                        <h3 className="text-xl font-semibold ">Gallery</h3>
                        <Button variant="outline" className="col-span-2 sm:col-span-4 cursor-pointer">More</Button>
                    </div>

                    <img
                        className="rounded-lg"
                        src="https://i.ibb.co.com/hF3DmKMS/cover-2nd.jpg" alt="batch-gallery" />
                    <img
                        className="rounded-lg"
                        src="https://i.ibb.co.com/20Jtnktp/cover-5th.jpg" alt="batch-gallery" />
                    <img
                        className="rounded-lg"
                        src="https://i.ibb.co.com/hF3DmKMS/cover-2nd.jpg" alt="batch-gallery" />
                    <img
                        className="rounded-lg"
                        src="https://i.ibb.co.com/20Jtnktp/cover-5th.jpg" alt="batch-gallery" />


                </CardContent>
            </Card>

            {/* programChairman,coordinator,CRInfo */}
            <BatchOrganizer programChairman={programChairman} coordinator={coordinator} CRInfo={CRInfo} user={user} />

            {/* allStudents */}
            <AllBatchStudents allStudents={allStudents} user={user} batchNo={batchNo} />
        </div >
    );
};

export default Batch;