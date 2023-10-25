"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import * as Main from "@/style/main";

export default function MotionButton(props: any) {
  return (
    <Link href={props.href} className={props.className}>
      <motion.button
        initial={false}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: [1.3, 1] }}
        className={props.clickable ? Main.clickable : ""}
      >
        {props.children}
      </motion.button>
    </Link>
  );
}
