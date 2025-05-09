import useAxiosSecure from "@/hooks/useAxiosSecure";
import LoadingSpinner from "@/myComponents/LoadingSpinner";
import PostCard from "@/pages/feeds/PostCard";
import PostModal from "@/pages/feeds/PostModal";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import MyPostCard from "./MyPostCard";
import useAuth from "@/hooks/useAuth";

const MyAllPosts = () => {
    const { loading } = useAuth()
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const { data: posts = [], refetch, } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const res = await axiosSecure(`/posts/allPosts/${id}`);
            return res.data;
        }
    })

    if (loading) return <LoadingSpinner />
    return (
        <main className="p-4">
            <PostModal refetch={refetch} />
            <div className="mt-4 grid  mx-auto gap-4">
                {posts.map(post => <MyPostCard key={post._id} post={post} refetch={refetch}></MyPostCard>)}
            </div>
        </main>
    );
};

export default MyAllPosts;