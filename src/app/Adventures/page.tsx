import PostLayout from "@/components/Post/PostLayout";
import { Metadata } from "next";

export default async function Adventures() {
  return (
      <PostLayout
        title="Adventure | 冒险"
        parentPath="Adventures"
        blogType="adventure"
      ></PostLayout>
  );
}

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A list of my most recent projects",
};
