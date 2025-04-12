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

        <div className="max-w-2xl mx-auto p-4 relative">
            {/* Left Sidebar */}
            <aside className="hidden lg:block top-16 left-0  h-screen overflow-y-auto border-r px-4 fixed w-[200px] xl:w-[330px] 2xl:w-[450px]">
                <div className="text-xl font-bold text-right">Left Sidebar</div>
                {/* Add your sidebar content here */}
            </aside>

            {/* Main Content */}
            <main >
                <PostModal refetch={refetch} />
                <div className="mt-4 grid  mx-auto gap-4">
                    {posts.map(post => <PostCard key={post._id} post={post} refetch={refetch}></PostCard>)}
                </div>
            </main>

            {/* Right Sidebar */}
            <aside className="hidden lg:block top-16 right-0 h-screen overflow-y-auto border-l px-4 fixed w-[200px] xl:w-[330px] 2xl:w-[450px] ">
                <div className="text-xl font-bold">Right Sidebar</div>
                {/* Add your sidebar content here */}
            </aside>
        </div>
    );
};

export default Feeds;