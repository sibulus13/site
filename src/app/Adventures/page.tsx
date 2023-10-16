import PostLayout from "@/components/Post/PostLayout";
import Head from "next/head";

export default async function Adventures() {
  return (
    <>
      <Head>
        <title>Adventures</title>
        <meta name="description" content="Adventures" />
        <link rel="icon" href="/lastName.png" />
      </Head>
      <PostLayout
        title="Adventure"
        parentPath="Adventures"
        blogType="adventure"
      ></PostLayout>
    </>
  );
}
