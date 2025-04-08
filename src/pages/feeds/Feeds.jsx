import useAxiosSecure from "@/hooks/useAxiosSecure";
import PostModal from "./PostModal";
import { useQuery } from "@tanstack/react-query";
import PostCard from "./PostCard";



const Feeds = () => {
    const axiosSecure = useAxiosSecure();
    const { data: posts = [], refetch } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const res = await axiosSecure("/posts/allPosts");
            return res.data;
        }
    })

    return (
        <div className="p-4">
            <PostModal refetch={refetch} />
            <div className="mt-4 grid lg:grid-cols-2 max-w-5xl mx-auto gap-4">
                {posts.map(post => <PostCard key={post._id} post={post}></PostCard>)}
            </div>

        </div>
    );
};

export default Feeds;