"use client";
import { motion } from "framer-motion";
import Link from "next/link";
export default function MotionButton(props: any) {
  return (
    <Link href={props.href} className={props.className}>
      <motion.button
        initial={false}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: [1.3, 1] }}
      >
        {props.children}
      </motion.button>
    </Link>
  );
}
