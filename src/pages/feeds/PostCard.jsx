import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const PostCard = ({ post }) => {
    const { postBody, studentId, userInfo } = post;

    return (
        <Card className="w-full max-w-xl mx-auto shadow-md">
            <CardHeader className="flex flex-row items-center space-x-2 ">
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
            </CardHeader>

            <Separator />

            <CardContent className="pt-4">
                <p className="whitespace-pre-line">{postBody}</p>
                {post?.imageURL && <img className="rounded-lg mt-3" src={post?.imageURL} alt="post photo" />}

            </CardContent>
        </Card>
    );
};

export default PostCard;
