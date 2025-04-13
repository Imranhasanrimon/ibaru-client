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
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Camera, UploadCloud } from "lucide-react"

const images = [
    { id: 1, url: "https://i.ibb.co.com/gFXjC8HN/netzwerkserver-herzstueck-infrastruktur.jpg", category: "Campus" },
    { id: 2, url: "/gallery/event1.jpg", category: "Events" },
    { id: 3, url: "/gallery/sports1.jpg", category: "Sports" },
    // ...more images
]

const Gallery = () => {
    const [openImage, setOpenImage] = useState(null)
    const [activeTab, setActiveTab] = useState("All")

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

                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline" className="flex items-center gap-2">
                            <UploadCloud size={18} />
                            Upload Image
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Upload Image</DialogTitle>
                            <DialogDescription>
                                Make changes to your profile here. Click save when you're done.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            hahahga
                        </div>
                        <DialogFooter>
                            <Button type="submit">Save Image</Button>
                        </DialogFooter>
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