import Image from "next/image";
import Link from "next/link";

export default function ContentfulPost(content: any) {
  const { title, description, thumbnail } = content.content.fields;
  const { id } = content.content.sys;
  return (
    <Link
      href={{
        pathname: "/Adventures/" + title,
        query: { 
            id: id,
         },
      }}
      className="flex even:flex-row-reverse justify-center py-6"
    >
      {/* Img container */}
      <div className="relative h-64 w-64">
        <Image
          src={"https:" + thumbnail.fields.file.url}
          alt={thumbnail.fields.file.title}
          fill
          className="object-cover rounded-lg border-x-2"
        ></Image>
      </div>
      {/* Text container */}
      <div className="w-64 px-4 even:pr-6 odd:pl-6">
        <h2 className="text-xl">{title}</h2>
        <p className="text-right whitespace-nowrap text-sm">
          {new Date(thumbnail.sys.updatedAt).toDateString()}
        </p>
        <div className="border mb-1"></div>
        <p className="">{description}</p>
      </div>
    </Link>
  );
}
