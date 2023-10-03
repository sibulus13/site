import Image from "next/image";
import Link from "next/link";
import { BiDownArrow } from "react-icons/bi";

import { getPostContent, alt_caption } from "../../helpers/posts";

export default async function LatestProject() {
  const posts = await getPostContent("showcase");
  const post = posts[0];

  return (
    <div id="latestProject" className="h-screen min-h-screen flex flex-col">
      <h1 className="pt-14 text-3xl md:text-6xl md:pl-20">Latest Project</h1>
      <div className="flex flex-col h-full md:w-1/3 md:mx-auto">
        <div className="grow m-2 p-2 flex flex-col">
          <div className="relative h-1/2 grow">
            <Image
              src={
                post.frontmatter.thumbnailUrl
                  ? post.frontmatter.thumbnailUrl
                  : "/profile/dancingRobot.gif"
              }
              alt={alt_caption(
                post.frontmatter.thumbnailUrl
                  ? post.frontmatter.thumbnailUrl
                  : "/profile/dancingRobot.gif"
              )}
              fill
              className="object-contain border rounded-xl"
            ></Image>
          </div>
          <div className="pt-4">
            <h2>{post.frontmatter.title}</h2>
            <p>{post.frontmatter.date}</p>
            <p>{post.frontmatter.description}</p>
          </div>
        </div>
        <div>
          <Link className="flex justify-end underline pb-8" href="/Projects">
            More Projects
          </Link>
        </div>
        <Link
          className="flex justify-center align-text-bottom pb-8 underline"
          href="#latestAdventure"
        >
          <BiDownArrow className="text-2xl"></BiDownArrow>
          See what I have been up to
          <BiDownArrow className="text-2xl"></BiDownArrow>
        </Link>
      </div>
    </div>
  );
}
