import PostLayout from "@/components/Post/PostLayout";
import { Metadata } from "next";
import { getBlogPosts } from "@/helpers/contentful";
import Image from "next/image";

export default async function Rizz() {
  const title = "Rizz | ";
  const parentPath = "Rizz";
  const blogType = "profile";

  let posts: any = await getBlogPosts(blogType);
  
  return (
    <div>
      <PostLayout
        title="Rizz | "
        parentPath="Rizz"
        blogType="profile"
      ></PostLayout>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Rizz",
  description: "A list of rizzlers' profiles",
};
