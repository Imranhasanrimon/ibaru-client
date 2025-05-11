import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Angry, EllipsisVertical, Frown, Heart, ThumbsUp, Trash } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import { getStudentId } from "@/utils";
import EditPostModal from "./EditPostModal";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { toast } from "sonner";


const PostCard = ({ post, refetch }) => {
    const { user } = useAuth();
    const { postBody, studentId, userInfo, _id } = post;
    const axiosSecure = useAxiosSecure()

    const handleDeletePost = async () => {
        await axiosSecure.delete(`/posts/delete/${_id}`)
        refetch()
        toast("Successful!", {
            description: "Your post  has been deleted.",
            action: {
                label: "Okay",
                // onClick: () => navigate("/dashboard")
            },
        })
    }

    const unAvailableFeature = () => {
        toast("Warning!", {
            description: "This Feature is not available yet.",
            classNames: {
                title: "text-custom-destructive"
            }
        })
    }
    return (
        <Card className="w-full max-w-xl mx-auto shadow-md p-4">
            <div className="flex flex-row items-center gap-4 relative">
                <Link to={`/${user && getStudentId(user.email) === studentId ? "dashboard/my-account" : `student-profile/${studentId}`}`} className="flex flex-row items-center gap-4 relative">
                    <Avatar>
                        <AvatarImage src={userInfo?.image} alt="User Image" />
                        <AvatarFallback>{userInfo?.name?.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <CardTitle className="text-base font-semibold">{userInfo?.name || "Anonymous"}  <span className="text-xs text-muted-foreground">
                            Batch: {userInfo?.batch}<sup>th</sup>
                        </span></CardTitle>
                        <p className="text-sm text-muted-foreground">ID: {studentId}</p>
                    </div>
                </Link>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="absolute right-0 w-8 h-8 cursor-pointer"><EllipsisVertical /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 mr-8 ">
                        <DropdownMenuGroup>
                            {user && getStudentId(user.email) === studentId ? <>
                                <EditPostModal post={post} refetch={refetch} /> <DropdownMenuItem onClick={handleDeletePost} className="cursor-pointer">
                                    Delete Post
                                    <DropdownMenuShortcut><Trash className="text-red-500" /></DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </> : <DropdownMenuSub>
                                <DropdownMenuSubTrigger>Report Post</DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        <DropdownMenuItem>Biased</DropdownMenuItem>
                                        <DropdownMenuItem>Bullying</DropdownMenuItem>
                                        <DropdownMenuItem>Misinformation </DropdownMenuItem>
                                        <DropdownMenuItem>Scam </DropdownMenuItem>
                                        <DropdownMenuItem>sexually explicit</DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>}

                            <Link to={`/${user && getStudentId(user.email) === studentId ? "dashboard/my-account" : `student-profile/${studentId}`}`}>
                                <DropdownMenuItem>
                                    Profile
                                    <DropdownMenuShortcut>⇧P</DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </Link>
                            <DropdownMenuItem onClick={unAvailableFeature}>
                                Billing
                                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={unAvailableFeature}>
                                Settings
                                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>

                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <Separator />

            <CardContent className="p-0">
                <p className="whitespace-pre-line">{postBody}</p>
                {post?.imageURL && <img className="rounded-lg mt-3" src={post?.imageURL} alt="post photo" />}

                <div className="mt-3 flex items-center gap-4">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button className="cursor-pointer text-red-500" variant="outline">
                                    <Heart />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Love</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild><Button className="cursor-pointer text-yellow-500" variant="outline"><Frown /></Button></TooltipTrigger>
                            <TooltipContent>
                                <p>Sad</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild><Button className="cursor-pointer text-sky-500" variant="outline"><ThumbsUp /></Button></TooltipTrigger>
                            <TooltipContent>
                                <p>Like</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild><Button className="cursor-pointer text-red-500" variant="outline"><Angry /></Button></TooltipTrigger>
                            <TooltipContent>
                                <p>Angry</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>

            </CardContent>
        </Card>
    );
};

export default PostCard;
