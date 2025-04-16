import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Facebook, Linkedin } from "lucide-react";
import batches from "@/../public/batches.json";

const Batch = () => {
    const { batchNo } = useParams();
    const batch = batches.find(b => b.batchNo === Number(batchNo));

    if (!batch) return <p className="text-center text-red-500">Batch not found.</p>;

    return (
        <div className="max-w-5xl mx-auto p-4 space-y-6">
            {/* Cover Image */}
            <div className="relative w-full h-60 rounded-2xl overflow-hidden shadow">
                <img src={batch.coverImage} alt={`${batch.nickName} Cover`} className="object-cover object-center w-full h-full" />
                <div className="absolute bottom-4 left-4">
                    <img src={batch.logo} alt="Batch Logo" className="h-16 w-16 rounded-full border-4 border-white shadow-lg" />
                </div>
            </div>

            {/* Nickname & Slogan */}
            <div className="text-center">
                <h1 className="text-3xl font-bold">{batch.nickName} <Badge variant="secondary">{batchNo}th Batch</Badge></h1>
                <p className="text-gray-500 mt-2 italic">"{batch.slogan}"</p>
            </div>

            {/* Description */}
            <Card>
                <CardContent className="p-6">
                    <p className="text-gray-700 text-lg">{batch.description}</p>
                </CardContent>
            </Card>

            {/* Coordinator */}
            <Card>
                <CardContent className="flex items-center gap-4 p-6">
                    <Avatar className="h-16 w-16">
                        <AvatarImage src={batch.coordinator.image} />
                        <AvatarFallback>{batch.coordinator.name.split(" ")[1]}</AvatarFallback>
                    </Avatar>
                    <div>
                        <h2 className="text-xl font-semibold">{batch.coordinator.name}</h2>
                        <p className="text-gray-500">{batch.coordinator.title}</p>
                    </div>
                </CardContent>
            </Card>

            {/* CRID */}
            <div className="flex items-center gap-2">
                <span className="font-semibold">CRID:</span>
                <Badge>{batch.CRID}</Badge>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
                {batch.socialLinks.facebook && (
                    <Button variant="outline" size="icon" asChild>
                        <a href={batch.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                            <Facebook className="h-5 w-5" />
                        </a>
                    </Button>
                )}
                {batch.socialLinks.linkedin && (
                    <Button variant="outline" size="icon" asChild>
                        <a href={batch.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-5 w-5" />
                        </a>
                    </Button>
                )}
            </div>

            {/* Achievements */}
            <Card>
                <CardContent className="p-6 space-y-2">
                    <h3 className="text-xl font-semibold mb-2">Achievements</h3>
                    {batch.achievements.map((item, idx) => (
                        <Badge key={idx} variant="secondary" className="mr-2">{item}</Badge>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
};

export default Batch;