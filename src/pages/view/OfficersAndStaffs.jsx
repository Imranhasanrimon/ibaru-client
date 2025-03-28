import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const OfficersAndStaffs = () => {
    const [officers, setOfficers] = useState([]);

    useEffect(() => {
        fetch("/officers.json")
            .then((res) => res.json())
            .then((data) => setOfficers(data))
            .catch((error) => console.error("Error fetching officers:", error));
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-4  p-4 max-w-5xl mx-auto">
            {officers.map((officer, index) => (
                <Card key={index} className="p-4 shadow-md rounded-2xl">
                    <CardContent className="flex flex-col items-center gap-4">
                        <Avatar className="w-24 h-24 rounded-full">
                            <img src={officer.image} alt={officer.name} className="w-24 h-24 rounded-full" />
                        </Avatar>
                        <div className="text-center">
                            <h3 className="text-xl font-semibold">{officer.name}</h3>
                            <p className="text-sm text-gray-500">{officer.designation}</p>
                            <ul className="mt-2 text-sm text-gray-600">
                                {officer.qualifications.map((qual, i) => (
                                    <li key={i}>{qual}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" size="icon" asChild>
                                <a href={`tel:${officer.contact_no}`}>
                                    <Phone className="w-5 h-5" />
                                </a>
                            </Button>
                            <Button variant="outline" size="icon" asChild>
                                <a href={`mailto:${officer.email}`}>
                                    <Mail className="w-5 h-5" />
                                </a>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default OfficersAndStaffs;