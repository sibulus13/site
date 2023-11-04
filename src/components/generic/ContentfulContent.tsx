import BackButton from "./BackButton";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { options } from "@/helpers/contentful";
import { getPostContent } from "@/helpers/contentful";
import * as Main from "@/style/main";

export default async function ContentfulContent({ id }: { id: string }) {
  const res = await getPostContent(id);
  const { title, description, content } = res.fields as {
    title: string;
    description: string;
    content: Document;
  };

  return (
    <div>
      <div className="px-10 lg:w-1/2 mx-auto">
        <div className="flex justify-between">
          <h1 className={Main.h1}>{title}</h1>
          <BackButton></BackButton>
        </div>
        <h3 className={Main.p}>{description}</h3>
        <div className="border-b-2 border-white"></div>
        <div>{documentToReactComponents(content, options)}</div>
      </div>
    </div>
  );
}
