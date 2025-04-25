import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { IconTrendingUp } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const ReviewCard = () => {
    const [rating, setRating] = useState(0)

    const handleRating = (rate) => {
        setRating(rate)
    }

    return (
        <div className=" text-gray-500 p-4 rounded shadow border">
            <p className="mb-2 text-center font-medium">Your Rating</p>
            <div className="flex justify-center">
                <Rating
                    onClick={handleRating}
                    allowFraction
                    transition
                    // readonly
                    SVGstyle={{ display: 'inline-block' }}
                />
            </div>
            <p className="mt-2 text-center text-sm text-gray-500">Rating: {rating}</p>
            <Card className="@container/card">
                <CardHeader>
                    <CardDescription>Total Revenue</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                        $1,250.00
                    </CardTitle>
                    <CardAction>
                        <Badge variant="outline">
                            <IconTrendingUp />
                            +12.5%
                        </Badge>
                    </CardAction>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                        Trending up this month <IconTrendingUp className="size-4" />
                    </div>
                    <div className="text-muted-foreground">
                        Visitors for the last 6 months
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default ReviewCard;