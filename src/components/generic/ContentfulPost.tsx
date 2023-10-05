"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContentfulPost(props: any) {
  const { content, value, parentPath } = props;
  const { title, description, thumbnail, date } = content.fields;
  const { id } = content.sys;
  const { url, title: alt } = thumbnail.fields.file;

  return (
    <motion.div
      initial={{ opacity: 0, translateX: value % 2 === 0 ? -100 : 100 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Link
        href={{
          pathname: `/${parentPath}/` + title,
          query: {
            id: id,
          },
        }}
        className="flex group-even:flex-row-reverse justify-center"
      >
        {/* Img container */}
        <div className="relative h-64 w-64">
          <Image
            src={"https:" + url}
            alt={title}
            fill
            className="object-cover rounded-lg border-x-2"
          ></Image>
        </div>
        {/* Text container */}
        <div className="w-64 px-4 even:pr-6 odd:pl-6">
          <h2 className="text-xl">{title}</h2>
          <p className="text-right whitespace-nowrap text-sm">
            {new Date(date).toDateString()}
          </p>
          <div className="border mb-1"></div>
          <p className="">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
}
