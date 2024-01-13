"use client";

import Image from "next/image";
import * as Main from "@/style/main";
import { motion } from "framer-motion";

export default function ContentfulProfile({ title, description, url, alt }) {
  return (
    <div
      className={
        "overflow-hidden pt-20 w-5/6 gap-4 mx-auto flex flex-col items-center"
      }
    >
      {/* Image Container */}
      <motion.div
        className="aspect-square relative w-3/4"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 0.5, yoyo: Infinity }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: [1.1, 1] }}
      >
        <Image src={"https:" + url} alt={alt} fill className="rounded-tl-full rounded-br-full object-contain"/>
      </motion.div>

      {/* Text Container */}
      <div>
        <h1 className={Main.h1}>{title}</h1>
        <h2 className={Main.p}>{description}</h2>
      </div>
    </div>
  );
}
