import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea";
import useAuth from "@/hooks/useAuth";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { getStudentId, imageUpload } from "@/utils";
import { Image, SmilePlus, MapPin, Frown, Angry, Smile, Laugh, Camera } from 'lucide-react';
import { useForm } from "react-hook-form";
import LoadingSpinner from "@/myComponents/LoadingSpinner";
import { useState } from "react";
import useAxiosSecure from "@/hooks/useAxiosSecure";


const PostModal = ({ refetch }) => {
    const [uploadImage, setUploadImage] = useState({ image: { name: 'Upload Image' } });
    const [open, setOpen] = useState(false);
    const { user, loading } = useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, reset, } = useForm();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data, e) => {
        const image = e.target.image.files[0];
        const imageURL = image && await imageUpload(image);

        //post info
        const postInfo = {
            ...data,
            imageURL,
            studentId: getStudentId(user?.email)
        }
        await axiosSecure.post("/posts/create", postInfo)
        reset()
        setUploadImage("")
        refetch()
        setOpen(false)
    }

    if (loading) return <LoadingSpinner />
    return (

        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Card
                    className="p-4 cursor-pointer max-w-xl mx-auto"
                    onClick={() => {
                        if (!user) return navigate("/login");
                    }}
                >
                    <div className="flex items-center gap-4">
                        <Avatar>
                            <AvatarImage
                                src={
                                    user?.photoURL ||
                                    "https://img.icons8.com/?size=100&id=kDoeg22e5jUY&format=png&color=000000"
                                }
                            />
                            <AvatarFallback>User Photo</AvatarFallback>
                        </Avatar>
                        <Input
                            className="rounded-full"
                            placeholder={`What's on your mind, ${user?.displayName || 'Guest'}?`}
                            readOnly
                        />
                    </div>
                    <Separator className="my-2" />
                    <div className="flex items-center justify-between max-w-xs ">
                        <Button variant="outline" className="cursor-pointer">
                            <Image className="text-green-500 mr-1" size={16} />
                            Photo
                        </Button>
                        <Button variant="outline" className="cursor-pointer">
                            <SmilePlus className="text-yellow-500 mr-1" size={16} />
                            Feeling
                        </Button>
                        <Button variant="outline" className="cursor-pointer">
                            <MapPin className="text-red-500 mr-1" size={16} />
                            Location
                        </Button>
                    </div>
                </Card>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <DialogHeader>
                        <h2 className="text-center text-xl font-bold">Create Post</h2>
                        <Separator />
                        <div className="flex items-center gap-4 mt-2">
                            <Avatar>
                                <AvatarImage
                                    src={
                                        user?.photoURL ||
                                        "https://img.icons8.com/?size=100&id=kDoeg22e5jUY&format=png&color=000000"
                                    }
                                />
                                <AvatarFallback>User Photo</AvatarFallback>
                            </Avatar>
                            <div>
                                <DialogTitle>{user?.displayName}</DialogTitle>
                                <DialogDescription>{user && getStudentId(user?.email)}</DialogDescription>
                            </div>
                        </div>
                    </DialogHeader>

                    <Textarea
                        placeholder="Write something..."
                        {...register("postBody")}
                        className="w-full"
                    />

                    {uploadImage?.url && (
                        <img
                            className="w-full h-52 rounded-lg object-cover"
                            src={uploadImage.url}
                            alt="selected image"
                        />
                    )}

                    <div className="flex gap-3 items-center justify-between">
                        <label className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 pt-[6px] text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm cursor-pointer items-center gap-1 justify-center">
                            <Camera className="w-5 h-5 -mt-1" />
                            Choose Image
                            <input
                                type="file"
                                name="image"
                                className="hidden"
                                onChange={(e) =>
                                    setUploadImage({
                                        image: e.target.files[0],
                                        url: URL.createObjectURL(e.target.files[0]),
                                    })
                                }
                            />
                        </label>

                        <Select onValueChange={(val) => setValue("feeling", val)}>
                            <SelectTrigger className="w-[150px] cursor-pointer">
                                <SelectValue placeholder="Feeling" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="sad">
                                        <Frown className="text-yellow-500 inline mr-2" size={16} />
                                        Sad
                                    </SelectItem>
                                    <SelectItem value="angry">
                                        <Angry className="text-yellow-500 inline mr-2" size={16} />
                                        Angry
                                    </SelectItem>
                                    <SelectItem value="happy">
                                        <Smile className="text-yellow-500 inline mr-2" size={16} />
                                        Happy
                                    </SelectItem>
                                    <SelectItem value="grateful">
                                        <Laugh className="text-yellow-500 inline mr-2" size={16} />
                                        Grateful
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        <Button type="button" variant="outline" className="cursor-pointer">
                            <MapPin className="text-red-500 mr-1" size={16} />
                            Location
                        </Button>
                    </div>

                    <DialogFooter>
                        <Button type="submit" className="w-full cursor-pointer">
                            Post
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>


    );
};

export default PostModal;