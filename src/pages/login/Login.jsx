import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import buildingImg from "@/assets/buildings/building2.jpg"
import IBA_logo from "@/assets/logo/IBA_logo.png"
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Loader2, Eye, EyeOff } from "lucide-react"
import { AuthContext } from "@/contexts/AllContexts"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { toast } from "sonner"
import LoadingSpinner from "@/myComponents/LoadingSpinner"

const Login = ({
    className,
    ...props
}) => {
    const [eyeStatus, setEyeStatus] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const { register, handleSubmit, reset } = useForm();
    const { signInUser, loading, setLoading } = useContext(AuthContext)

    const onSubmit = async (data) => {

        if (data?.email?.length !== 10 || data?.password?.length !== 10) {
            toast("Incorrect!", {
                description: "Something went wrong with the student ID or registration No.",
                action: {
                    label: "Okay",
                },
                classNames: {
                    title: "text-custom-destructive"
                }
            })
            return
        }

        try {
            await signInUser(data?.email + "@gmail.com", data?.password);
            reset();
            toast("Login Successful!", {
                description: "Keep your account updated with the powerful student dashboard.",
                action: {
                    label: "Dashboard",
                    onClick: () => navigate("/dashboard")
                },
            });
            navigate(from, { replace: true });

        } catch (err) {
            //error handling should be done
            console.log(err);

        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex  min-h-svh flex-col items-center justify-center bg-muted p-6 md:px-10">
            <div className="absolute top-5 right-5">
                <ModeToggle />
            </div>
            <div className="w-full max-w-sm md:max-w-3xl">

                <div className={cn("flex flex-col gap-6", className)} {...props}>
                    <Card className="overflow-hidden p-0">
                        <CardContent className="grid p-0 md:grid-cols-2">
                            <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8">
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col items-center text-center">
                                        <h1 className="text-2xl font-bold">Welcome back</h1>
                                        <p className="text-muted-foreground text-balance">
                                            Login to your student account
                                        </p>
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="email">Student ID No</Label>
                                        <Input {...register("email")} type="number" className="no-spinner appearance-none border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., 2113285125" required />
                                    </div>
                                    <div className="grid gap-3 relative">
                                        <div className="flex items-center">
                                            <Label htmlFor="password">Registration No</Label>
                                        </div>
                                        <Input {...register("password")} type={eyeStatus ? "text" : "password"} placeholder="e.g., 1518876630" required />
                                        <span className="absolute right-3 top-9 cursor-pointer"
                                            onClick={() => setEyeStatus(!eyeStatus)}
                                        >
                                            {eyeStatus ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </span>
                                    </div>
                                    <Button disabled={loading} type="submit" className="w-full cursor-pointer">
                                        {loading ? <> <Loader2 className="animate-spin" />
                                            Please wait</> : "Login"}
                                    </Button>

                                    <div className="text-center text-sm">
                                        Didn&apos;t you log in before?{" "}
                                        <Link to="/register" className="underline underline-offset-4">
                                            Register
                                        </Link>
                                    </div>
                                </div>
                            </form>
                            <div className="bg-muted relative hidden md:block">
                                <img
                                    src={buildingImg}
                                    alt="building"
                                    className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] " />

                                <img src={IBA_logo} alt="logo"
                                    className="absolute bottom-1 right-1/2 translate-x-1/2 rounded-full w-16 h-16  dark:brightness-[0.2] sepia-50" />
                            </div>
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

export default Login;