import PostLayout from "@/components/Post/PostLayout";
import { Metadata } from "next";

export default async function Projects() {
  return (
      <PostLayout
        title="Projects:展示"
        parentPath="Projects"
        blogType="projects"
      ></PostLayout>
  );
}

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A list of my most recent projects",
};
