"use client";
import MotionButton from "../motion/MotionButton";
import * as Main from "@/style/main";
import { usePathname } from "next/navigation";
const items = [
  { name: "About Me", href: "/AboutMe" },
  { name: "Projects", href: "/Projects" },
  { name: "Adventures", href: "/Adventures" },
];

export default function NavBar() {
  const pathname = usePathname();
  const invisible = pathname === "/House_Rules";
  console.log(pathname, invisible);
  return (
    <div
      className={
        Main.subp +
        (invisible ? "invisible" : "visible") +
        " fixed w-full z-10 p-2 border-b-2 bg-black md:px-8 "
      }
    >
      <div className="flex justify-between ">
        <MotionButton href="/" className="">
          <h1>Home | 家</h1>
        </MotionButton>
        <div className="flex justify-right gap-4 md:gap-10">
          {items.map((item, index) => (
            <MotionButton key={index} href={item.href}>
              <h1>{item.name}</h1>
            </MotionButton>
          ))}
        </div>
      </div>
    </div>
  );
}
