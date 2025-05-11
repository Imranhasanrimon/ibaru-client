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
import { getStudentId, imageUpload } from "@/utils";
import { Image, SmilePlus, MapPin, Frown, Angry, Smile, Laugh, FilePenLine } from 'lucide-react';
import { useForm } from "react-hook-form";
import LoadingSpinner from "@/myComponents/LoadingSpinner";
import { useState } from "react";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { DropdownMenuItem, DropdownMenuShortcut } from "@/components/ui/dropdown-menu";
import { toast } from "sonner";


const EditPostModal = ({ refetch, post }) => {
    const { postBody, feeling, imageURL, _id } = post
    const [uploadImage, setUploadImage] = useState({ image: { name: 'Upload Image' }, url: imageURL });
    const [open, setOpen] = useState(false);
    const { user, loading } = useAuth();
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
        await axiosSecure.patch(`/posts/update/${_id}`, postInfo)
        reset()
        refetch()
        setOpen(false)
        toast("Successful!", {
            description: "Your post  has been updated.",
            action: {
                label: "Okay",
                // onClick: () => navigate("/dashboard")
            },
        })
    }


    if (loading) return <LoadingSpinner />
    return (

        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {/* <DropdownMenuItem>
                    Edit Post
                    <DropdownMenuShortcut><FilePenLine /></DropdownMenuShortcut>
                </DropdownMenuItem> */}

                <h1 className={`focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 hover:bg-slate-100 cursor-pointer dark:hover:bg-slate-800`}>Edit Post
                    <DropdownMenuShortcut><FilePenLine /></DropdownMenuShortcut></h1>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <DialogHeader>
                        <h2 className="text-center text-xl font-bold">Edit Post</h2>
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
                        defaultValue={postBody}
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
                        <Input
                            type="file"
                            name="image"
                            onChange={(e) =>
                                setUploadImage({
                                    image: e.target.files[0],
                                    url: URL.createObjectURL(e.target.files[0]),
                                })
                            }
                        />

                        <Select defaultValue={feeling} onValueChange={(val) => setValue("feeling", val)}>
                            <SelectTrigger className="w-[150px]">
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

                        <Button type="button" variant="outline">
                            <MapPin className="text-red-500 mr-1" size={16} />
                            Location
                        </Button>
                    </div>

                    <DialogFooter>
                        <Button type="submit" className="w-full cursor-pointer">
                            Done
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>


    );
};

export default EditPostModal;