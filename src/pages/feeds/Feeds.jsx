import useAxiosSecure from "@/hooks/useAxiosSecure";
import PostModal from "./PostModal";
import { useQuery } from "@tanstack/react-query";
import PostCard from "./PostCard";
import LoadingSpinner from "@/myComponents/LoadingSpinner";



const Feeds = () => {
    const axiosSecure = useAxiosSecure();
    const { data: posts = [], refetch, isLoading } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const res = await axiosSecure("/posts/allPosts");
            return res.data;
        }
    })

    if (isLoading) return <LoadingSpinner />
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_250px] min-h-screen p-4 max-w-7xl mx-auto">
            {/* Left Sidebar */}
            <aside className="hidden lg:block sticky top-18 h-screen overflow-y-auto border-r px-4">
                <div className="text-xl font-bold mb-4">Left Sidebar</div>
                {/* Add your sidebar content here */}
            </aside>

            {/* Main Content */}
            <main >
                <PostModal refetch={refetch} />
                <div className="mt-4 grid  mx-auto gap-4">
                    {posts.map(post => <PostCard key={post._id} post={post}></PostCard>)}
                </div>
            </main>

            {/* Right Sidebar */}
            <aside className="hidden lg:block sticky top-18 h-screen overflow-y-auto border-l px-4 ">
                <div className="text-xl font-bold mb-4">Right Sidebar</div>
                {/* Add your sidebar content here */}
            </aside>
        </div>
    );
};

export default Feeds;