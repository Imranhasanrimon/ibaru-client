// src/pages/Gallery.jsx
import { useState } from "react"
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

const images = [
    { id: 1, url: "https://i.ibb.co.com/gFXjC8HN/netzwerkserver-herzstueck-infrastruktur.jpg", category: "Campus" },
    { id: 2, url: "/gallery/event1.jpg", category: "Events" },
    { id: 3, url: "/gallery/sports1.jpg", category: "Sports" },
    // ...more images
]

const Gallery = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const [open, setOpen] = useState(false);
    const [openImage, setOpenImage] = useState(null)
    const [activeTab, setActiveTab] = useState("All")
    const [uploadImage, setUploadImage] = useState({
        image: "",
        url: "",
    });
    const { register, handleSubmit, setValue, reset } = useForm();

    const onSubmit = async (data) => {
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
            userId: user && getStudentId(user.email)
        }

        await axiosSecure.post('/gallery/create', postInfo)

        reset()
        // refetch()
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

    const filteredImages = activeTab === "All" ? images : images.filter(img => img.category === activeTab)
    return (
        <div className="p-6 max-w-7xl mx-auto">
            {/* Hero */}
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
                <img src="/gallery/hero-banner.jpg" className="object-cover w-full h-full" alt="Campus Banner" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-4xl font-bold">
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
                    <DialogTrigger asChild>
                        <Button variant="outline" className="flex items-center gap-2">
                            <UploadCloud size={18} />
                            Upload Image
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <DialogHeader className="text-center">
                                <DialogTitle>Decorate Gallery</DialogTitle>
                                <DialogDescription>
                                    Make changes to your profile here. Click save when you're done.
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

                                <Select defaultValue="" {...register("category")} onValueChange={(val) => setValue("category", val)}>
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
                {filteredImages.map((img) => (
                    <div
                        key={img.id}
                        className="relative group overflow-hidden rounded-xl cursor-pointer"
                        onClick={() => setOpenImage(img.url)}
                    >
                        <img src={img.url} alt="Campus" className="w-full h-48 object-cover transition group-hover:scale-105 duration-300" />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-opacity-30 transition" />
                    </div>
                ))}
            </div>

            {/* Image Dialog */}
            <Dialog open={!!openImage} onOpenChange={() => setOpenImage(null)}>
                <DialogContent className="max-w-3xl p-0 overflow-hidden">
                    <img src={openImage} alt="Full View" className="w-full h-full object-contain" />
                    <DialogTitle></DialogTitle>
                    <DialogDescription>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur debitis nobis eum numquam veritatis dignissimos, ipsum magnam perspiciatis cupiditate! Ab.</DialogDescription>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Gallery;