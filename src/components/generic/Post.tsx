import Image from "next/image";
import { getPostContent, alt_caption } from "../../../helpers/posts";

export default function Post(props: { content: any}) {
  const { content } = props;
  return (
    <div className="flex py-6 justify-between even:flex-row-reverse">
      {/* Img container */}
      <div className="w-1/2 relative">
        <Image
          src={
            content.frontmatter.thumbnailUrl
              ? content.frontmatter.thumbnailUrl
              : "/profile/dancingRobot.gif"
          }
          alt={alt_caption(
            content.frontmatter.thumbnailUrl
              ? content.frontmatter.thumbnailUrl
              : "/profile/dancingRobot.gif"
          )}
          fill
          className="object-contain rounded-full border-x-4"
        ></Image>
      </div>
      {/* Text container */}
      <div className="w-1/2 px-4">
        <h2 className="text-lg">{content.frontmatter.title}</h2>
        <p className="text-right">{content.frontmatter.date}</p>
        <div className="border mb-1"></div>
        <p>{content.frontmatter.description}</p>
      </div>
    </div>
  );
}
