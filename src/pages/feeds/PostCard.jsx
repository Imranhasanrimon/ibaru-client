import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Angry, EllipsisVertical, Frown, Heart, ThumbsUp } from "lucide-react";
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


const PostCard = ({ post }) => {
    const { postBody, studentId, userInfo } = post;

    return (
        <Card className="w-full max-w-xl mx-auto shadow-md p-4">
            <div className="flex flex-row items-center gap-4 relative">
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

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="absolute right-0 w-8 h-8 cursor-pointer"><EllipsisVertical /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                Profile
                                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Billing
                                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Settings
                                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Keyboard shortcuts
                                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuSub>
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
                            </DropdownMenuSub>
                            <DropdownMenuItem>
                                New Team
                                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>GitHub</DropdownMenuItem>
                        <DropdownMenuItem>Support</DropdownMenuItem>
                        <DropdownMenuItem disabled>API</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            Log out
                            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                        </DropdownMenuItem>
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
                            <TooltipTrigger><Button className="cursor-pointer text-red-500" variant="outline"><Heart /></Button></TooltipTrigger>
                            <TooltipContent>
                                <p>Love</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger><Button className="cursor-pointer text-yellow-500" variant="outline"><Frown /></Button></TooltipTrigger>
                            <TooltipContent>
                                <p>Sad</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger><Button className="cursor-pointer text-sky-500" variant="outline"><ThumbsUp /></Button></TooltipTrigger>
                            <TooltipContent>
                                <p>Like</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger><Button className="cursor-pointer text-red-500" variant="outline"><Angry /></Button></TooltipTrigger>
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
