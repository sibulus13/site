"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import * as Main from "../../style/main";
import JessQin from "p/Headshots/JessQin.jpg";

export default function JessieQin() {
  return (
    <div className="overflow-hidden pt-20">
      <div className={"w-5/6 gap-4 mx-auto flex flex-col items-center"}>
        {/* Image Container */}
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 0.5, yoyo: Infinity }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: [1.1, 1] }}
            className="relative h-1/2 md:h-full md:w-1/3"
          >
            <Image
              src={JessQin}
              alt="Jess Qin faceshot"
              className="object-contain rounded-tl-full rounded-br-full aspect-square max-h-3/4 max-w-3/4"
            />
          </motion.div>
        </div>

        {/* Catcall Container */}
        <div>
          <h1 className={Main.h1}>{title}</h1>
          <h2 className={Main.p}>
            {/* iterate over each line of catcall */}
            {catcall.map((line, key) => (
              <p key={key} className={Main.p}>
                {line}
              </p>
            ))}
          </h2>
        </div>
      </div>
    </div>
  );
}

const title = "Jess Qin";

const catcall = [
  "Are you a magician, or did my cats just cast a spell on me?",
  "Because whenever I'm around you, it feels like a purr-fectly enchanting moment!",
];
