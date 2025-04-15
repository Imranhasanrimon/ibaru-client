// src/pages/Gallery.jsx
import { useState } from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Camera, UploadCloud } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { getStudentId, imageUpload } from "@/utils"
import { toast } from "sonner"
import useAuth from "@/hooks/useAuth"
import useAxiosSecure from "@/hooks/useAxiosSecure"
import { useQuery } from "@tanstack/react-query"
import { Link, useNavigate } from "react-router-dom"
import LoadingSpinner from "@/myComponents/LoadingSpinner"
import heroImg from "@/assets/buildings/edited.jpg"
const Gallery = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const [openImage, setOpenImage] = useState(null)
    const [activeTab, setActiveTab] = useState("All")
    const [uploadImage, setUploadImage] = useState({
        image: "",
        url: "",
    });
    const { register, handleSubmit, setValue, reset } = useForm();
    const { data: galleryPosts = [], refetch, isLoading } = useQuery({
        queryKey: ["galleryPosts"],
        queryFn: async () => {
            const res = await axiosSecure("/gallery/allPosts");
            return res.data;
        }
    })

    const handleOpenDialog = () => {
        toast("Warning!", {
            description: "Your're not a student of IBA. Please login then post.",
            classNames: {
                title: "text-custom-destructive"
            },
            action: {
                label: "Login",
                onClick: () => navigate("/login")
            },
        })
    }

    const onSubmit = async (data) => {
        const category = data.category

        if (!category) return toast("Warning!", {
            description: "Category is required.",
            classNames: {
                title: "text-custom-destructive"
            }
        })

        const image = uploadImage?.image && await imageUpload(uploadImage.image);

        if (!image) return toast("Warning!", {
            description: "Image is required.",
            classNames: {
                title: "text-custom-destructive"
            }
        })

        const postInfo = {
            ...data,
            image,
            studentId: user && getStudentId(user.email)
        }

        await axiosSecure.post('/gallery/create', postInfo)

        reset()
        refetch()
        setOpen(false)
        setUploadImage("")
        toast("Successful!", {
            description: "Your request  has been submitted for Admin approval.",
            action: {
                label: "Okay",
                // onClick: () => navigate("/dashboard")
            },
        })
    }
    const filteredImages = activeTab === "All" ? galleryPosts : galleryPosts.filter(post => post.category === activeTab)

    if (isLoading) return <LoadingSpinner />
    return (
        <div className="p-4 sm:p-6 max-w-7xl mx-auto">
            {/* Hero */}
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
                <img src={heroImg} className="object-cover w-full h-full" alt="Campus Banner" />
                <div className="absolute inset-0 bg-black/20 bg-opacity-40 flex items-center justify-center text-white text-4xl font-bold">
                    Campus Gallery 📸
                </div>
            </div>

            {/* Tabs */}
            <div className="flex flex-col-reverse md:flex-row justify-between md:items-center gap-4 mb-6">
                <Tabs defaultValue="All" onValueChange={setActiveTab}>
                    <TabsList>
                        <TabsTrigger value="All">All</TabsTrigger>
                        <TabsTrigger value="Campus">Campus</TabsTrigger>
                        <TabsTrigger value="Events">Events</TabsTrigger>
                        <TabsTrigger value="Sports">Sports</TabsTrigger>
                    </TabsList>
                </Tabs>

                {/* Upload Button */}

                <Dialog open={open} onOpenChange={setOpen}>
                    {user ? <DialogTrigger asChild>
                        <Button variant="outline" className="flex items-center gap-2 cursor-pointer">
                            <UploadCloud size={18} />
                            Upload Image
                        </Button>
                    </DialogTrigger> : <Button variant="outline" className="flex items-center gap-2 cursor-pointer" onClick={handleOpenDialog}>
                        <UploadCloud size={18} />
                        Upload Image
                    </Button>}
                    <DialogContent className="sm:max-w-[425px]">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <DialogHeader className="text-center">
                                <DialogTitle>Decorate Gallery</DialogTitle>
                                <DialogDescription>
                                    Select a beautiful image with vibrant description.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                {uploadImage?.url && <img className="max-h-52 w-full rounded-md border-2" src={uploadImage?.url} alt="profile image" />}

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
                                <Textarea className="min-h-28 w-full" placeholder="Write something..."
                                    {...register("postBody")} />

                                <Select defaultValue="" {...register("category")} onValueChange={(val) => setValue("category", val)} >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="Campus">
                                                Campus
                                            </SelectItem>
                                            <SelectItem value="Events">
                                                Events
                                            </SelectItem>
                                            <SelectItem value="Sports">
                                                Sports
                                            </SelectItem>
                                            <SelectItem value="Cultural">
                                                Cultural
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <DialogFooter>
                                <Button type="submit" className="cursor-pointer">Add To Gallery</Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredImages.map((post) => (
                    <div
                        key={post._id}
                        className="relative group overflow-hidden rounded-xl cursor-pointer"
                        onClick={() => setOpenImage(post)}
                    >
                        <img src={post.image} alt="Campus" className="w-full h-48 object-cover transition group-hover:scale-105 duration-300" />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-opacity-30 transition" />
                    </div>
                ))}
            </div>

            {/* Image Dialog */}
            <Dialog open={!!openImage} onOpenChange={setOpenImage}>
                <DialogContent className="max-w-3xl p-0 overflow-hidden bg-card">
                    <img src={openImage?.image} alt="Full View" className="w-full h-full object-contain" />
                    <div className="px-4 pb-4 space-y-2">
                        <Link to={`/${user && getStudentId(user.email) === openImage?.userInfo?.studentId ? "dashboard/my-account" : `student-profile/${openImage?.userInfo?.studentId}`}`} className="inline-flex items-center gap-4">
                            <Avatar>
                                <AvatarImage src={openImage?.userInfo?.image} alt="User Image" />
                                <AvatarFallback>{openImage?.userInfo?.name?.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <DialogTitle className="text-base font-semibold">{openImage?.userInfo?.name || "Anonymous"}</DialogTitle>
                                <p className="text-sm text-muted-foreground"> Batch: {openImage?.userInfo?.batch}<sup>th</sup></p>
                            </div>
                        </Link>
                        <DialogDescription>{openImage?.postBody}</DialogDescription>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Gallery;