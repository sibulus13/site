import Image from "next/image";
import Link from "next/link";
import { getBlogPosts } from "@/helpers/contentful";

export default async function Latest({ type, CTA, hrefMore, titleID }) {
  const posts = await getBlogPosts(type);
  const post = posts[0];
  const { title, description, thumbnail, date } = post.fields as {
    title: string;
    description: string;
    thumbnail: any;
    date: string;
  };
  const { id } = post.sys;
  const { url, title: alt } = thumbnail.fields.file;

  return (
    <div
      id={titleID}
      className="h-screen min-h-screen flex flex-col snap-start"
    >
      <h1 className="pt-14 text-3xl md:text-6xl md:pl-20">
        Latest <span className="capitalize ">{type}</span>
      </h1>
      <div className="flex flex-col h-full md:w-1/3 md:mx-auto">
        <Link className="grow m-2 p-2 flex flex-col" 
        href={{
          pathname: `${hrefMore}/` + title,
          query: {
            id: id,
          },
        }}
        >
          <div className="relative h-1/2 grow">
            <Image
              src={"https:" + url}
              alt={title}
              fill
              className="object-cover border rounded-xl"
            ></Image>
          </div>
          <div className="pt-4">
            <h2>{title}</h2>
            <p className="text-right">{new Date(date).toDateString()}</p>
            <p>{description}</p>
          </div>
        </Link>
        <div>
          <Link className="flex justify-end underline pb-8" href={hrefMore}>
            More {type}
            {type[type.length - 1] === "s" ? "" : "s"}
          </Link>
        </div>
        {CTA}
      </div>
    </div>
  );
}
