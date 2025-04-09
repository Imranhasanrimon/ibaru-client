import useAxiosSecure from "@/hooks/useAxiosSecure";
import LoadingSpinner from "@/myComponents/LoadingSpinner";
import PostCard from "@/pages/feeds/PostCard";
import PostModal from "@/pages/feeds/PostModal";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import MyPostCard from "./MyPostCard";

const MyAllPosts = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const { data: posts = [], refetch, isLoading } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const res = await axiosSecure(`/posts/allPosts/${id}`);
            return res.data;
        }
    })

    if (isLoading) return <LoadingSpinner />
    return (
        <div>
            <main >
                <PostModal refetch={refetch} />
                <div className="mt-4 grid  mx-auto gap-4">
                    {posts.map(post => <MyPostCard key={post._id} post={post}></MyPostCard>)}
                </div>
            </main>
        </div>
    );
};

export default MyAllPosts;