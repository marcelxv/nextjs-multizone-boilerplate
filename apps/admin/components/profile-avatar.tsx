"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";

import { useS3Image } from "@workspace/ui/hooks/useS3Image";
import { Suspense } from "react";

interface ProfileAvtarProps {
  avatar: string | null | undefined;
  fullName: string | null | undefined;
  children?: React.ReactNode;
}

export const ProfileAvatar = ({
  avatar,
  fullName,
  children,
}: ProfileAvtarProps) => {
  console.log("Avatar URL: ", avatar);
  console.log("Full Name: ", fullName);

  const { data, error } = useS3Image(avatar ?? "");
  return (
    <Suspense fallback={<AvatarFallback className="rounded-lg" />}>
      <AvatarImage src={data?.image} alt={fullName ?? "Unknown"} />
    </Suspense>
  );
};
