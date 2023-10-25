import type { Document } from "@contentful/rich-text-types";
import { getPostContent } from "@/helpers/contentful";
import type { Metadata, ResolvingMetadata } from "next";
import ContentfulContent from "@/components/generic/ContentfulContent";

export default function Page({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  return <ContentfulContent id={searchParams.id}></ContentfulContent>;
}

type Props = {
  params: { id: string };
  searchParams: { id: string };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const res = await getPostContent(searchParams.id);
  const { title, description } = res.fields as {
    title: string;
    description: string;
    content: Document;
  };

  return {
    title,
    description,
  };
}
