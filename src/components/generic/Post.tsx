import Image from "next/image";
import { alt_caption } from "../../../helpers/posts";

export default function Post(props: { content: any }) {
  const { content } = props;
  return (
    <div className="flex py-6 justify-center even:flex-row-reverse">
      {/* Img container */}
      <div className="relative h-64 w-64">
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
          className="object-cover rounded-lg border-x-2"
        ></Image>
      </div>
      {/* Text container */}
      <div className="w-64 px-4 even:pr-6 odd:pl-6">
        <h2 className="text-xl">{content.frontmatter.title}</h2>
        <p className="text-right whitespace-nowrap text-sm">
          {content.frontmatter.date}
        </p>
        <div className="border mb-1"></div>
        <p className="">{content.frontmatter.description}</p>
      </div>
    </div>
  );
}
