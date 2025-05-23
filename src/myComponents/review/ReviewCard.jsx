import { Rating } from 'react-simple-star-rating'
import { IconUsers, } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

const ReviewCard = ({ review }) => {
    const { reviewBody, rating, studentInfo } = review;
    return (
        <Card className="@container/card dark:hover:bg-card/50 hover:bg-slate-100 duration-400 gap-2 rounded-md ">
            <CardHeader className="flex items-center justify-center">
                <div>
                    <Avatar className="flex w-12 h-12 border" >
                        <AvatarImage src={studentInfo?.image} alt="student image" />
                        <AvatarFallback>{studentInfo?.name[0]}</AvatarFallback>
                    </Avatar>
                </div>
                <div>
                    <CardTitle className=" font-semibold tabular-nums text-lg lg:text-base text-center">
                        {studentInfo?.name}
                    </CardTitle>
                    <div className='flex  items-center gap-2'>
                        <Badge variant="outline">{studentInfo?.studentId}</Badge>
                        <Badge variant="ghost">
                            <IconUsers />
                            {studentInfo?.batch}{studentInfo?.batch == 1 ? "st" : studentInfo?.batch == 2 ? "nd" : studentInfo?.batch == 3 ? "rd" : "th"}
                        </Badge>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="text-sm flex-grow">
                <CardDescription className="text-center">{reviewBody.slice(0, 220)}</CardDescription>
            </CardContent>

            <CardFooter className="justify-center">
                <Rating
                    initialValue={rating}
                    allowFraction
                    readonly
                    size={25}
                    SVGstyle={{ display: 'inline-block' }}
                />
            </CardFooter>
        </Card>
    );
};

export default ReviewCard;