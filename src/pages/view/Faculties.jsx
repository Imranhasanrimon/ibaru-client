import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Faculties = () => {
    const [faculties, setFaculties] = useState([]);

    useEffect(() => {
        fetch("/faculties.json")
            .then((response) => response.json())
            .then((data) => setFaculties(data))
            .catch((error) => console.error("Error fetching faculty data:", error));
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {faculties.map((faculty, index) => (
                <Card key={index} className="shadow-lg p-4 rounded-2xl">
                    <CardContent className="flex flex-col items-center text-center">
                        {/* <Avatar className="w-23 h-23 rounded-full" src={faculty.image} alt={faculty.name} /> */}
                        <img className="w-23 h-23 rounded-full" src={faculty.image} alt={faculty.name} />
                        <h3 className="text-xl font-semibold mt-4">{faculty.name}</h3>
                        <p className="text-gray-500">{faculty.designation}</p>
                        <ul className="mt-2 text-sm text-gray-600">
                            {faculty.qualifications.map((qual, i) => (
                                <li key={i}>{qual}</li>
                            ))}
                        </ul>
                        <div className="mt-4">
                            <Button variant="outline" className="mr-2" onClick={() => window.location.href = `tel:${faculty.contact_no}`}>
                                Call
                            </Button>
                            <Button variant="default" onClick={() => window.location.href = `mailto:${Array.isArray(faculty.email) ? faculty.email[0] : faculty.email}`}>
                                Email
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default Faculties;
