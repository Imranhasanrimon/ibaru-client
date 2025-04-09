import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import useAuth from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useState } from "react";
import { useForm } from "react-hook-form";


const EditProfileModal = ({ studentInfo, refetch }) => {
    const [open, setOpen] = useState(false);
    const { updateUserProfile, } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { name, studentId, } = studentInfo;
    const { register, handleSubmit, reset, setValue, } = useForm();
    const onSubmit = async (data) => {
        await axiosSecure.patch(`/users/update/${studentId}`, data)
        await updateUserProfile(data.name)
        refetch()
        reset()
        setOpen(false)
    }
    return (
        <Dialog open={open} onOpenChange={setOpen} className="p-0">
            <DialogTrigger asChild>
                <Button variant="outline">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] max-h-[calc(100vh-36px)] overflow-y-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DialogHeader>
                        <DialogTitle>Edit Profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>

                    <div className=" grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right col-span-4">
                                Name
                            </Label>
                            <Input {...register('name')} id="name" defaultValue={name} placeholder="e.g., IMRAN HASAN RIMON" required className="col-span-4" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="hall" className="text-right col-span-4">
                                Hall Name
                            </Label>
                            <Select onValueChange={(val) => setValue("hall", val)}>
                                <SelectTrigger className="w-full col-span-4">
                                    <SelectValue placeholder="Select Your Attached Hall" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>For Male Student</SelectLabel>
                                        <SelectItem value="Sher-e Bangla Fazlul Haque">Sher-e Bangla Fazlul Haque</SelectItem>
                                        <SelectItem value="Shah Makhdum">Shah Makhdum</SelectItem>
                                        <SelectItem value="Nawab Abdul Latif">Nawab Abdul Latif</SelectItem>
                                        <SelectItem value="Syed Ameer Ali ">Syed Ameer Ali</SelectItem>
                                        <SelectItem value="Shahid Shamsuzzoha">Shahid Shamsuzzoha</SelectItem>
                                        <SelectItem value="Shahid Habibur Rahman">Shahid Habibur Rahman</SelectItem>
                                        <SelectItem value="Matihar">Matihar</SelectItem>
                                        <SelectItem value="Madar Bux">Madar Bux</SelectItem>
                                        <SelectItem value="Huseyn Shaheed Suhrawardy">Huseyn Shaheed Suhrawardy</SelectItem>
                                        <SelectItem value="Shahid Ziaur Rahman">Shahid Ziaur Rahman</SelectItem>
                                        <SelectItem value="Bangabandhu Sheikh Mujibur Rahman">Bangabandhu Sheikh Mujibur Rahman</SelectItem>
                                    </SelectGroup>
                                    <SelectGroup>
                                        <SelectLabel>For Female Student</SelectLabel>
                                        <SelectItem value="Mannujan">Mannujan</SelectItem>
                                        <SelectItem value="Rokeya">Rokeya</SelectItem>
                                        <SelectItem value="Tapashi Rabeya">Tapashi Rabeya</SelectItem>
                                        <SelectItem value="Begum Khaleda Zia">
                                            Begum Khaleda Zia
                                        </SelectItem>
                                        <SelectItem value="Rahamatunnesa">Rahamatunnesa</SelectItem>
                                        <SelectItem value="Bangamata Sheikh Fazilatunnesa">Bangamata Sheikh Fazilatunnesa</SelectItem>
                                    </SelectGroup>
                                    <SelectGroup>
                                        <SelectLabel>Dormitory</SelectLabel>
                                        <SelectItem value="Shahid Mir Abdul Quayyum International Dormitory">Shahid Mir Abdul Quayyum International Dormitory</SelectItem>

                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="date-of-birth" className="text-right col-span-4">
                                Date of Birth
                            </Label>
                            <Input {...register("birthDate")} id="date-of-birth" placeholder="e.g., 01-10-2003 (DD-MM-YYYY)" className="col-span-4" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="gender" className="text-right col-span-4">
                                Gender
                            </Label>
                            <Select onValueChange={(val) => setValue("gender", val)}>
                                <SelectTrigger className="w-full col-span-4">
                                    <SelectValue placeholder="Select Your Gender" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Gender</SelectLabel>
                                        <SelectItem value="Male">Male</SelectItem>
                                        <SelectItem value="Female">Female</SelectItem>
                                        <SelectItem value="N/A">N/A</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="blood-group" className="text-right col-span-4">
                                Blood Group
                            </Label>
                            <Select onValueChange={(val) => setValue("bloodGroup", val)}>
                                <SelectTrigger className="w-full col-span-4">
                                    <SelectValue placeholder="Select Your Blood Group" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Blood Group</SelectLabel>
                                        <SelectItem value="A+">A+</SelectItem>
                                        <SelectItem value="A-">A-</SelectItem>
                                        <SelectItem value="B+">B+</SelectItem>
                                        <SelectItem value="B-">B-</SelectItem>
                                        <SelectItem value="O+">O+</SelectItem>
                                        <SelectItem value="O-">O-</SelectItem>
                                        <SelectItem value="AB+">AB+</SelectItem>
                                        <SelectItem value="AB-">AB-</SelectItem>
                                        <SelectItem value="N/A">Not Tested Yet</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="Height" className="text-right col-span-4">
                                Height (inch)
                            </Label>
                            <Input {...register('height')} id="Height" placeholder="e.g., 68" className="col-span-4" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="district" className="text-right col-span-4">
                                District
                            </Label>
                            <Input {...register('district')} id="district" placeholder="e.g., Bogura" className="col-span-4" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="Religion" className="text-right col-span-4">
                                Religion
                            </Label>
                            <Input {...register('religion')} id="Religion" placeholder="e.g., Islam" className="col-span-4" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="Email" className="text-right col-span-4">
                                Email
                            </Label>
                            <Input {...register('email')} id="Email" placeholder="e.g., imranhasanrimon5@gmail.com" className="col-span-4" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="Phone" className="text-right col-span-4">
                                Phone No
                            </Label>
                            <Input {...register('phoneNo')} id="Phone" placeholder="e.g., 01743621957" className="col-span-4" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="NID" className="text-right col-span-4">
                                National ID No
                            </Label>
                            <Input {...register('NID')} id="NID" placeholder="e.g., 2059013325" className="col-span-4" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="Mother's Name" className="text-right col-span-4">
                                Mother's Name
                            </Label>
                            <Input {...register('motherName')} id="Mother's Name" placeholder="e.g., NOORZAHAN AKTER" className="col-span-4" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="Father's Name" className="text-right col-span-4">
                                Father's Name
                            </Label>
                            <Input {...register('fatherName')} id="Father's Name" placeholder="e.g., TAJ MUHAMMAD" className="col-span-4" />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default EditProfileModal;