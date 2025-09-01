"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Loader2Icon } from "lucide-react";
import toast from "react-hot-toast";
import { togglefollow } from "@/app/actions/user.action";

interface FollowButtonProps {
  userId: string;
}

const FollowButton = ({ userId }: FollowButtonProps) => {
  const [loading, setLoading] = useState(false);
  const handleFollow = async () => {
    setLoading(true);
    try {
      await togglefollow(userId);
      toast.success("فالو شد!", {
        style: {
          border: "1px solid #fff",
          padding: "16px",
          color: "#4ade80",
        },
      });
      setLoading(false)
    } catch (error) {
        toast.error("خطایی در فالو کردن این کاربر پیش آمده است. دوباره تلاش کنید!")
    } finally {
    }
  };
  return (
    <Button
      disabled={loading}
      size={"sm"}
      variant={"secondary"}
      onClick={handleFollow}
    >
      {loading ? (
        <Loader2Icon className="w-4 h-4 animate-spin" />
      ) : (
        <span>فالو کردن</span>
      )}
    </Button>
  );
};

export default FollowButton;
