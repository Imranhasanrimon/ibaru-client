import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { Loader2 } from "lucide-react"
import { ModeToggle } from "@/components/ui/mode-toggle"
import useAuth from "@/hooks/useAuth"
import LoadingSpinner from "@/myComponents/LoadingSpinner"

const Register = ({
    className,
    ...props
}) => {
    const { register, handleSubmit, } = useForm();
    const { createUser, loading, setLoading } = useAuth()

    const onSubmit = async (data) => {
        try {
            const res = await createUser(data?.email, data?.password);
            console.log(res);
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
                                        <Input {...register("email")} id="email" type="email" placeholder="e.g., 2113285125" required />
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