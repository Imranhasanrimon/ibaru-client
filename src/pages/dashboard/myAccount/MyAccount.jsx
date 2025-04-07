import useAuth from "@/hooks/useAuth";
import { axiosInstance } from "@/hooks/useAxiosSecure";
import LoadingSpinner from "@/myComponents/LoadingSpinner";
import { getStudentId } from "@/utils";
import { useQuery } from "@tanstack/react-query";

const MyAccount = () => {
    const { user } = useAuth();

    const { data: studentInfo, isLoading } = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            const data = await axiosInstance(`/users/aUser/${getStudentId(user?.email)}`);
            return data?.data;
        }
    })
    console.log(studentInfo);

    if (isLoading) return <LoadingSpinner />
    return (
        <div>
            <h1>my account</h1>
        </div>
    );
};

export default MyAccount;