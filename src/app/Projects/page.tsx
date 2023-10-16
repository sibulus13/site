import PostLayout from "@/components/Post/PostLayout";
import Head from "next/head";

export default async function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Projects" />
        <link rel="icon" href="/lastName.png" />
      </Head>
      <PostLayout
        title="Projects"
        parentPath="Projects"
        blogType="projects"
      ></PostLayout>
    </>
  );
}
