import { Button } from "@/components/ui/button";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import LoadingSpinner from "@/myComponents/LoadingSpinner";
import PostCard from "@/pages/feeds/PostCard";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
const StudentFeeds = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const { data: posts = [], isLoading, } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const res = await axiosSecure(`/posts/allPosts/${id}`);
            return res.data;
        }
    })
    if (isLoading) return <LoadingSpinner />
    return (
        <div className="max-w-2xl mx-auto p-4 relative">
            {/* Left Sidebar */}
            <aside className="hidden lg:block top-16 left-0  h-screen overflow-y-auto border-r px-4 fixed w-[200px] xl:w-[330px] 2xl:w-[450px]">
                <div className="text-xl font-bold text-right">Left Sidebar</div>
                {/* Add your sidebar content here */}
            </aside>

            {/* Main Content */}
            <main className="grid  mx-auto gap-4">
                {posts.length === 0 && <div className="min-h-[400px] flex flex-col gap-4 items-center justify-center"><h3 className="text-xl text-center font-semibold">This student has not posted yet.</h3> <Button onClick={() => navigate(-1)} variant="outline">Back</Button></div>}
                {posts.map(post => <PostCard key={post._id} post={post} ></PostCard>)}
            </main>

            {/* Right Sidebar */}
            <aside className="hidden lg:block top-16 right-0 h-screen overflow-y-auto border-l px-4 fixed w-[200px] xl:w-[330px] 2xl:w-[450px] ">
                <div className="text-xl font-bold">Right Sidebar</div>
                {/* Add your sidebar content here */}
            </aside>
        </div>
    )

};

export default StudentFeeds;