import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; import Search from "@/myComponents/search/BloodSearch";
;

const WhyIBA = () => {
    return (
        <Card className=" shadow-lg">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">Why IBA?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
                <p>
                    Faced with increasing globalization, organizations are experiencing an ever-growing need for people with a strong background in business studies with an international character. With a Bachelor's degree in IBA, you will be able to hold this following phenomenon:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li> You would never realize how punctual you can be until you join IBA!</li>
                    <li> It makes you go through such painful challenges that you won’t even feel the pain anymore.</li>
                    <li> Never ever would you think of breaking any RULE in your life! Be it personal, academic, or professional.</li>
                    <li> One moment you are attending an event, the next moment you are organizing it! Yeah, that’s life at IBA.</li>
                    <li> Nothing feels as good as being part of the best business school in the country.</li>
                </ul>
                <Search />
            </CardContent>
        </Card>
    );
};

export default WhyIBA;