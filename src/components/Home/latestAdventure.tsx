import Image from "next/image";
import Link from "next/link";
import { BiLogoLinkedin, BiLogoGithub, BiLogoGmail } from "react-icons/bi";

import { getPostContent, alt_caption } from "../../../helpers/posts";

export default async function Latest() {
  const posts = await getPostContent("adventure");
  const post = posts[0];

  return (
    <div id="latestAdventure" className="h-screen min-h-screen flex flex-col">
      <h1 className="pt-14 text-3xl">Latest Adventure</h1>
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
      <Link className="flex justify-end underline" href="/Projects">
        More Adventures
      </Link>
      <div className="mx-auto align-text-bottom pb-8 pt-8">
        Lets develop the future together
        <div className="flex justify-center gap-4 text-2xl pt-2">
          <Link href="https://www.linkedin.com/in/sibulus0/">
            <BiLogoLinkedin></BiLogoLinkedin>
          </Link>
          <Link href="https://github.com/sibulus13">
            <BiLogoGithub></BiLogoGithub>
          </Link>
          <Link href="mailto:chengjie.michael.huang@gmail.com">
            <BiLogoGmail></BiLogoGmail>
          </Link>
        </div>
      </div>
    </div>
  );
}
