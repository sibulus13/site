import { getPostContent, getContentByTitle } from "@/helpers/contentful";
import ContentfulProfile from "@/components/generic/ContentfulProfile";
import { useRouter } from "next/navigation";
export default async function Page({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {

  // TODO: change url to be dynamically fetched from title
  // Example
  // const res = await getContentByTitle("profile", "Jess Qin");
  const res = await getPostContent(searchParams.id);
  const { title, description, content, thumbnail } = res.fields as {
    title: string;
    description: string;
    content: Document;
    thumbnail: any;
  };

  const { url, alt } = thumbnail.fields.file;

  return (
    <ContentfulProfile
      title={title}
      description={description}
      url={url}
      alt={alt}
    ></ContentfulProfile>
  );
}
