"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import * as Main from "@/style/main";
import { BiLogoGithub } from "react-icons/bi";

export default function ContentfulPost(props: any) {
  const { content, value, parentPath } = props;
  const { title, description, thumbnail, date } = content.fields;
  const { id } = content.sys;
  const { url, title: alt } = thumbnail.fields.file;
  const tags = content.fields.tags ?? [];
  const githubLink = content.fields.githubLink ?? null;
  return (
    <motion.div
      initial={{ opacity: 0, translateX: value % 2 === 0 ? -100 : 100 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      viewport={{ amount: 0.3 }}
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
        {/* h-64 w-64 */}
        <div className="relative aspect-square w-1/2 md:w-1/3 lg:w-1/4">
          <Image
            src={"https:" + url}
            alt={title}
            fill
            className="object-cover rounded-lg border-x-2"
          ></Image>
        </div>
        {/* Text container */}
        <div className="w-64 px-4 even:pr-6 odd:pl-6">
          <h2 className={Main.h2}>{title}</h2>
          {githubLink && (
            <Link
              href={githubLink}
            >
              <BiLogoGithub className="text-4xl" />
            </Link>
          )}

          <p className={Main.date + "text-right whitespace-nowrap"}>
            {new Date(date).toDateString()}
          </p>
          <div className="border mb-1"></div>
          <div className="flex flex-wrap text-xs gap-2">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="border rounded px-1 whitespace-nowrap"
              >
                {tag}
              </div>
            ))}
          </div>

          <p className={Main.p}>{description}</p>
        </div>
      </Link>
    </motion.div>
  );
}
