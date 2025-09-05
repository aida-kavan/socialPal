"use client";

import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Textarea } from "./ui/Textarea";
import { createPost } from "@/app/actions/post.action";
import { Button } from "./ui/button";
import { ImageIcon, Loader2Icon, SendIcon } from "lucide-react";
import toast from "react-hot-toast";

const CreatePost = () => {
  const { user } = useUser();
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [showImageUpload, setShowImageUpload] = useState(false);

  const handleSubmit = async () => {
    if (!content.trim() && !imageUrl) return;
    setIsPosting(true);
    try {
      const result = await createPost(content, imageUrl);
      if (result?.success) {
        setContent("");
        setImageUrl("");
        setShowImageUpload(false);
        toast.success("پست منتشر شد🎉", {
          style: {
            border: "1px solid #fff",
            padding: "16px",
            color: "#4ade80",
          },
        });
      }
    } catch {
      toast.error("مشکلی در انتشار پست به وجود امده است!");
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <Card className="mb-6">
      <CardContent className="pt-4">
        <div className="space-y-4">
          <div className="flex space-x-4 items-start gap-2">
            <Avatar className="w-10 h-10">
              <AvatarImage src={user?.imageUrl || "/avatar.png"} />
            </Avatar>
            <Textarea
              placeholder="چی تو سرته؟"
              className="min-h-[100px] mt-2 pr-5 resize-none border-none focus-visible:ring-0 p-0 text-base"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              disabled={isPosting}
            />
          </div>
        </div>

        <div className="flex items-center justify-between border-t pt-4">
          <div className="flex space-x-2">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary"
              onClick={() => setShowImageUpload(!showImageUpload)}
              disabled={isPosting}
            >
              <ImageIcon className="size-4 mr-2" />
              <span>عکس</span>
            </Button>
          </div>
          <Button
            className="flex items-center"
            onClick={handleSubmit}
            disabled={(!content.trim() && !imageUrl) || isPosting}
          >
            {isPosting ? (
              <>
                <Loader2Icon className="size-4 mr-2 animate-spin" />
                <span>در حال پست</span>{" "}
              </>
            ) : (
              <>
                <SendIcon className="size-4 mr-2" />
                <span>پست</span>
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CreatePost;
