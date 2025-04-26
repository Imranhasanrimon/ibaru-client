import useAuth from '@/hooks/useAuth';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import ReviewCard from '@/myComponents/review/ReviewCard';
import { getStudentId } from '@/utils';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Loader2, MessageCircleMore } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Rating } from 'react-simple-star-rating';
import LoadingSpinner from '@/myComponents/LoadingSpinner';
import Heading from '@/myComponents/Heading';

const Reviews = () => {
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const { data: reviews = [], refetch, isLoading } = useQuery({
        queryKey: ["reviews"],
        queryFn: async () => {
            const res = await axiosSecure("/reviews/allReviews");
            return res.data;
        }
    })

    const [rating, setRating] = useState(0)

    const handleRating = (rate) => {
        setRating(rate)
    }

    const { mutateAsync, isPending } = useMutation({
        mutationFn: async (data) => {
            const reviewInfo = {
                ...data,
                rating,
                studentId: user && getStudentId(user.email)
            }
            axiosSecure.post('/reviews/create', reviewInfo)
        },

        onSuccess: () => {
            reset()
            refetch()
            setOpen(false)
            toast("Thanks!", {
                description: "Your review  has been submitted.",
                action: {
                    label: "Okay",
                    // onClick: () => navigate("/dashboard")
                },
            })
        },
        onError: () => {
            console.log("Error")
        },
    })

    const onSubmit = async (data) => {
        await mutateAsync(data)
    }

    const handleOpenDialog = () => {
        toast("Warning!", {
            description: "Your're not a student of IBA. Please login then review.",
            classNames: {
                title: "text-custom-destructive"
            },
            action: {
                label: "Login",
                onClick: () => navigate("/login")
            },
        })
    }
    if (isLoading) return <LoadingSpinner />
    return (
        <>
            <Heading title="What Our Students Say" des="From classrooms to campus life, hear how IBA RU shaped minds, careers, and lasting memories. These are the voices that define us." />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-2">
                {reviews.map(review => <ReviewCard key={review.studentInfo.studentId} review={review} />)}
            </div>

            {/* Review Button */}
            <Dialog open={open} onOpenChange={setOpen}>
                {user ? <DialogTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2 cursor-pointer animate-pulse mx-auto">
                        <MessageCircleMore size={18} />
                        Drop Your Valuable Review
                    </Button>
                </DialogTrigger> : <Button variant="outline" className="flex items-center gap-2 cursor-pointer animate-pulse mx-auto" onClick={handleOpenDialog}>
                    <MessageCircleMore size={18} />
                    Drop Your Valuable Review
                </Button>}
                <DialogContent className="sm:max-w-[425px]">
                    {isPending ? <div className="min-h-80 flex justify-center items-center"><Loader2 className="animate-spin" size={64} /></div> : <form onSubmit={handleSubmit(onSubmit)}>
                        <DialogHeader className="text-center">
                            <DialogTitle>Share Your Experience</DialogTitle>
                            <DialogDescription>
                                We’d love to hear about your journey at IBA RU.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">

                            <Textarea className="min-h-28 w-full" placeholder="Write something..."
                                {...register("reviewBody")} />

                            <Rating
                                onClick={handleRating}
                                allowFraction
                                transition
                                size={25}
                                SVGstyle={{ display: 'inline-block' }}
                            />

                        </div>
                        <DialogFooter>
                            <Button type="submit" className="cursor-pointer">Submit</Button>
                        </DialogFooter>
                    </form>}
                </DialogContent>
            </Dialog>
        </>
    );
};

export default Reviews;