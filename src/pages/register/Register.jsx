import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { Loader2 } from "lucide-react"
import { ModeToggle } from "@/components/ui/mode-toggle"
import useAuth from "@/hooks/useAuth"
import LoadingSpinner from "@/myComponents/LoadingSpinner"
import { toast } from "sonner"
import { axiosInstance } from "@/hooks/useAxiosSecure"

const Register = ({
    className,
    ...props
}) => {
    const navigate = useNavigate();
    const { register, handleSubmit, reset, } = useForm();
    const { createUser, loading, setLoading, updateUserProfile } = useAuth()

    const onSubmit = async (data) => {
        const { email, password } = data;
        const finalEmail = email + '@gmail.com';
        const session = email.slice(0, 2);
        const batch = session - 15;
        const image = `https://academic.ru.ac.bd/studentdata/session${session}/${email}.jpg`;

        const userInfo = {
            studentId: email,
            registration: password,
            session: `${session - 1}-${session}`,
            batch,
            image
        }

        if (email.length < 10 || password.length < 10) {
            toast("Input must be 10 characters !", {
                description: "There might be a typo in ID or registration no.",
                action: {
                    label: "❌",
                },
            });
            return;
        }

        try {
            await createUser(finalEmail, password);
            await updateUserProfile(image);
            await axiosInstance.post('/users/create', userInfo);
            reset();
            toast("Registration Successful!", {
                description: "You don’t need to register again—just log in each time.",
                action: {
                    label: "Okay",
                },
            });
            navigate('/');

        } catch (err) {
            //error handling should be done
            console.log(err);
        } finally {
            setLoading(false)
        }
    }

    if (loading) return <LoadingSpinner />

    return (
        <div className="relative flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:px-10">
            <div className="absolute top-5 right-5">
                <ModeToggle />
            </div>

            <div className="w-full max-w-sm">
                <div className={cn("flex flex-col gap-6", className)} {...props}>
                    <Card className="overflow-hidden p-0">
                        <CardContent>
                            <form onSubmit={handleSubmit(onSubmit)} className="py-6 md:py-8 md:px-2">
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col items-center text-center">
                                        <h1 className="text-2xl font-bold">Registration</h1>
                                        <p className="text-muted-foreground text-balance">
                                            Provide your student account&apos;s info
                                        </p>
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="email">Student ID No</Label>
                                        <Input {...register("email")} className="no-spinner appearance-none border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="number" placeholder="e.g., 2113285125" required />
                                    </div>
                                    <div className="grid gap-3">
                                        <div className="flex items-center">
                                            <Label htmlFor="password">Registration No</Label>
                                        </div>
                                        <Input {...register("password")} id="password" type="password" placeholder="e.g., 1518876630" required />
                                    </div>
                                    <Button disabled={loading} type="submit" className="w-full cursor-pointer">
                                        {loading ? <> <Loader2 className="animate-spin" />Please wait</> : "Register"}
                                    </Button>

                                    <div className="text-center text-sm">
                                        Already logged in before?{" "}
                                        <Link to="/login" className="underline underline-offset-4">
                                            Login
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                    <div
                        className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4 ">
                        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
                        and <a href="#">Privacy Policy</a>.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;