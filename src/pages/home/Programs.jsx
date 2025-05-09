import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import Heading from "@/myComponents/Heading";
import { Link } from "react-router-dom";

const programs = [
    {
        path: "/admission-bba",
        title: "BBA",
        description: "A comprehensive undergraduate program to build future business leaders."
    },
    {
        path: "/admission-mba",
        title: "MBA Regular",
        description: "A full-time MBA program designed for recent graduates and professionals."
    },
    {
        path: "/admission-mba-evening",
        title: "MBA Evening",
        description: "An evening MBA program tailored for working professionals."
    },
    {
        path: "/admission-mba-executive",
        title: "Executive MBA",
        description: "A flexible MBA for executives and senior managers."
    },
    {
        path: "/admission-m-phil",
        title: "MPhil",
        description: "Advanced research program focused on business studies."
    },
    {
        path: "/admission-phd",
        title: "PhD",
        description: "A rigorous research program for academic and professional excellence."
    }
];

const Programs = () => {
    return (
        <div>
            <Heading title="Our Programs" des="Explore a range of business programs designed to shape future leaders through academic excellence and practical learning." />

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {programs.map((program, index) => (
                    <Link to={program?.path} key={index} className="flex">
                        <Card className="dark:hover:bg-card/50 hover:bg-slate-100  transition-colors duration-400 py-4 cursor-pointer text-center gap-0 w-full">
                            <CardHeader className="px-4 ">
                                <CardTitle className="text-lg font-semibold">{program.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="px-4 flex-grow mb-2">
                                <CardDescription>{program.description}</CardDescription>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" className="mx-auto cursor-pointer">View</Button>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>

        </div>
    );
};

export default Programs;