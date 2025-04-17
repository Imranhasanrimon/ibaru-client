import { Skeleton } from "@/components/ui/skeleton"

const LoadingSpinner = () => {
    return (
        <div className="min-h-screen">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 max-w-6xl mx-auto mt-10 md:mt-20 ">

                <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-4">
                        <Skeleton className="h-12 w-12 rounded-full bg-slate-500" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px] bg-slate-500" />
                            <Skeleton className="h-4 w-[200px] bg-slate-500" />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center space-y-3">
                        <Skeleton className="h-[125px] w-[250px] rounded-xl bg-slate-500" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px] bg-slate-500" />
                            <Skeleton className="h-4 w-[200px] bg-slate-500" />
                        </div>
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-4">
                        <Skeleton className="h-12 w-12 rounded-full bg-slate-500" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px] bg-slate-500" />
                            <Skeleton className="h-4 w-[200px] bg-slate-500" />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center space-y-3">
                        <Skeleton className="h-[125px] w-[250px] rounded-xl bg-slate-500" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px] bg-slate-500" />
                            <Skeleton className="h-4 w-[200px] bg-slate-500" />
                        </div>
                    </div>
                </div>

                <div className="space-y-3 ">
                    <div className="flex items-center justify-center space-x-4">
                        <Skeleton className="h-12 w-12 rounded-full bg-slate-500" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px] bg-slate-500" />
                            <Skeleton className="h-4 w-[200px] bg-slate-500" />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center space-y-3">
                        <Skeleton className="h-[125px] w-[250px] rounded-xl bg-slate-500" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px] bg-slate-500" />
                            <Skeleton className="h-4 w-[200px] bg-slate-500" />
                        </div>
                    </div>
                </div>

                <div className="space-y-3 hidden md:block">
                    <div className="flex items-center justify-center space-x-4">
                        <Skeleton className="h-12 w-12 rounded-full bg-slate-500" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px] bg-slate-500" />
                            <Skeleton className="h-4 w-[200px] bg-slate-500" />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center space-y-3">
                        <Skeleton className="h-[125px] w-[250px] rounded-xl bg-slate-500" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px] bg-slate-500" />
                            <Skeleton className="h-4 w-[200px] bg-slate-500" />
                        </div>
                    </div>
                </div>
                <div className="space-y-3 hidden md:block">
                    <div className="flex items-center justify-center space-x-4">
                        <Skeleton className="h-12 w-12 rounded-full bg-slate-500" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px] bg-slate-500" />
                            <Skeleton className="h-4 w-[200px] bg-slate-500" />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center space-y-3">
                        <Skeleton className="h-[125px] w-[250px] rounded-xl bg-slate-500" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px] bg-slate-500" />
                            <Skeleton className="h-4 w-[200px] bg-slate-500" />
                        </div>
                    </div>
                </div>
                <div className="space-y-3 hidden md:block">
                    <div className="flex items-center justify-center space-x-4">
                        <Skeleton className="h-12 w-12 rounded-full bg-slate-500" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px] bg-slate-500" />
                            <Skeleton className="h-4 w-[200px] bg-slate-500" />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center space-y-3">
                        <Skeleton className="h-[125px] w-[250px] rounded-xl bg-slate-500" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px] bg-slate-500" />
                            <Skeleton className="h-4 w-[200px] bg-slate-500" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LoadingSpinner;