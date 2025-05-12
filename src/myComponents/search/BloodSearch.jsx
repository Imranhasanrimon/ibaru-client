import * as React from "react"
import { Check, ChevronsUpDown, Search as SearchIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import useAxiosSecure from "@/hooks/useAxiosSecure"
import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"



const BloodSearch = () => {
    const [open, setOpen] = React.useState(false)
    //------------------
    const [search, setSearch] = React.useState('');
    const axiosSecure = useAxiosSecure();

    const { data: students = [] } = useQuery({
        queryKey: ['students', search], // Re-fetch when `search` changes
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/allUsers/${search}`);
            return res.data;
        },
    });
    //------------------
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[320px] justify-between"
                >
                    Search
                    <SearchIcon className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[320px] p-0 z-10">
                <Command>
                    <CommandInput placeholder="Search Blood Group..." className="h-9" value={search}
                        onValueChange={(value) => setSearch(value)} />
                    <CommandList>
                        <CommandEmpty>No Blood Group Found.</CommandEmpty>
                        <CommandGroup>
                            {students.map((student) => (
                                <Link key={student?.studentId} to={`student-profile/${student?.studentId}`}>
                                    <CommandItem>
                                        <Avatar className="rounded-sm" >
                                            <AvatarImage src={student.image} alt={student.name} />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        {student.name}
                                        {student?.bloodGroup && <Badge variant="outline">{student?.bloodGroup}</Badge>}
                                    </CommandItem>
                                </Link>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

export default BloodSearch;