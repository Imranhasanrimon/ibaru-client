import useAxiosSecure from '@/hooks/useAxiosSecure';
import LoadingSpinner from '@/myComponents/LoadingSpinner';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';

const StudentProfile = () => {
    const axiosSecure = useAxiosSecure();
    const { id } = useParams();
    const { data: studentInfo = {}, isLoading } = useQuery({
        queryKey: ["student"],
        queryFn: async () => {
            const res = await axiosSecure(`/users/aUser/${id}`);
            return res.data;
        }
    })

    if (isLoading) return <LoadingSpinner />
    return (
        <div>
            <img src={studentInfo.image} className='rounded-full w-24 h-24' alt="" />
            {studentInfo.name}
        </div>
    );
};

export default StudentProfile;