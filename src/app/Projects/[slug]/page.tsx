import type { Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { options } from "@/helpers/contentful";
import BackButton from "@/components/generic/BackButton";
import { getPostContent } from "@/helpers/contentful";

export default async function Page({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const res = await getPostContent(searchParams.id);
  const { title, description, content } = res.fields as {
    title: string;
    description: string;
    content: Document;
  };

  return (
    <div className="pt-14">
      <BackButton></BackButton>
      <div className="px-10">
        <h1 className="text-3xl">{title}</h1>
        <h3 className="text-xl">{description}</h3>
        <div>{documentToReactComponents(content, options)}</div>
      </div>
    </div>
  );
}
