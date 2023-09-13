import Image from "next/image";
import Link from "next/link";

import { getPostContent, alt_caption } from "../../../helpers/posts";

export default async function LatestProject() {
  const posts = await getPostContent("showcase");
  const post = posts[0];
  console.log(post.frontmatter.thumbnailUrl, "thumbnailUrl");

  return (
    <div id="latestProject" className="min-h-screen h-screen flex flex-col">
      <h1>Latest Project</h1>
      <div className="grow m-2 p-2 border rounded-xl flex flex-col">
        <h2>{post.frontmatter.title}</h2>
        <p>{post.frontmatter.date}</p>
        <p>{post.frontmatter.description}</p>
        <br></br>
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
            className="object-contain"
          ></Image>
        </div>
      </div>
      <Link className="flex justify-center align-text-bottom pb-8" href="">
        {">"} See more projects here {"<"}
      </Link>{" "}
    </div>
  );
}
