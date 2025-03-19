import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import buildingImg from "@/assets/buildings/building2.jpg"
import IBA_logo from "@/assets/logo/IBA_logo.png"
import { useContext } from "react"
import { AuthContext } from "@/providers/AuthProvider"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

const Login = ({
    className,
    ...props
}) => {
    const { register, handleSubmit, } = useForm();
    const { createUser } = useContext(AuthContext)

    const onSubmit = async (data) => {
        console.log(data);
        const res = await createUser(data?.email, data?.password);
        console.log(res);
    }

    return (
        <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:px-10">
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
                                        <Input {...register("email")} id="email" type="email" placeholder="e.g., 2113285125" required />
                                    </div>
                                    <div className="grid gap-3">
                                        <div className="flex items-center">
                                            <Label htmlFor="password">Registration No</Label>
                                        </div>
                                        <Input {...register("password")} id="password" type="password" placeholder="e.g., 1518876630" required />
                                    </div>
                                    <Button type="submit" className="w-full cursor-pointer">
                                        Login
                                    </Button>

                                    <div className="text-center text-sm">
                                        Didn&apos;t you log in before?{" "}
                                        <Link to="/" className="underline underline-offset-4">
                                            Register
                                        </Link>
                                    </div>
                                </div>
                            </form>
                            <div className="bg-muted relative hidden md:block">
                                <img
                                    src={buildingImg}
                                    alt="building"
                                    className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale" />

                                <img src={IBA_logo} alt="logo"
                                    className="absolute bottom-1 right-1/2 translate-x-1/2 rounded-full w-16 h-16  dark:brightness-[0.2] dark:grayscale sepia-50" />
                            </div>
                        </CardContent>
                    </Card>
                    <div
                        className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4 bg-red-500">
                        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
                        and <a href="#">Privacy Policy</a>.
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Login;