import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import useAuth from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import LoadingSpinner from "@/myComponents/LoadingSpinner";
import { getStudentId, imageUpload } from "@/utils";
import { Camera } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
const ProfileImageChange = ({ refetch }) => {
    const [open, setOpen] = useState(false);
    const axiosSecure = useAxiosSecure()
    const { user, loading, updateUserProfile } = useAuth()
    const [uploadImage, setUploadImage] = useState({
        image: "",
        url: user?.photoURL,
    });
    console.log(uploadImage);
    const handleChangeProfileImage = async () => {
        const imageURL = uploadImage?.image && await imageUpload(uploadImage?.image);
        uploadImage?.image && await axiosSecure.patch(`/users/update/${user && getStudentId(user?.email)}`, { image: imageURL })
        uploadImage?.image && await updateUserProfile(user?.displayName, imageURL)
        refetch()
        setOpen(false)
        toast("Successful!", {
            description: "Your profile picture has been changed.",
            action: {
                label: "Okay",
                // onClick: () => navigate("/dashboard")
            },
        });
    }

    if (loading) return <LoadingSpinner />
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Camera className="absolute bottom-3 -right-1 md:-right-2 w-9 md:w-8 h-9 md:h-8 p-[5px] rounded-full bg-background border cursor-pointer" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Profile Image (Recommended)</DialogTitle>
                    <DialogDescription>
                        Feel free to change your profile image. It has no impact on your original image.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid place-items-center gap-4 py-4">
                    <img className="h-40 w-40 rounded-full border-2" src={uploadImage?.url} alt="profile image" />

                    <label className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 pt-[6px] text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm cursor-pointer items-center gap-1 justify-center">
                        <Camera className="w-5 h-5 -mt-1" />
                        Upload Image
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


                </div>
                <DialogFooter>
                    <Button onClick={handleChangeProfileImage} className="cursor-pointer">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default ProfileImageChange;