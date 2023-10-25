import Image from "next/image";
import Link from "next/link";
import { BiDownArrow } from "react-icons/bi";
import * as Main from "../../style/main";
import MotionButton from "../motion/MotionButton";
import cat_typing_img from "../../../public/profile/cat_typing.gif";

const titles = ["Software Engineer", "Adventurer", "Potato"];

export default function Hero() {
  return (
    <div className={Main.fullPage}>
        <div className="grow flex flex-col justify-center md:flex-row">
        {/* Text container */}
        <div className="flex flex-col justify-center md:pr-4 md:w-1/3">
          <h1 className={Main.h1}>
            Hi, I am{" "}
            <span className="bg-gradient-to-r from-gray-300 to-purple-400 inline-block text-transparent bg-clip-text">
              Michael
            </span>
            ,
          </h1>
          <div className="flex text-xs gap-2 pt-1 md:pt-2">
            {titles.map((title, index) => (
              <p key={index} className="border rounded px-1 whitespace-nowrap">
                {title}
              </p>
            ))}
          </div>
          <p className={Main.p + "pt-2"}>
            currently tinkering towards a better tomorrow.
          </p>
          <br></br>
          <p className={Main.subp}>
            As a Software Engineer armed with the power of technology to fight
            for a better world, I am passionate about improving life through
            data driven optimization.
          </p>
          <br></br>
        </div>
        {/* Image Container */}
        <div className="flex flex-col justify-center h-1/2 md:h-full md:w-1/3">
          <div className="relative h-full md:h-2/3">
            <Image
              src={cat_typing_img}
              alt="cat typing"
              fill
              className="object-contain rounded-b-full"
            ></Image>
          </div>
          <br></br>
          <MotionButton
            href="/AboutMe"
            clickable
            className={Main.p + "flex justify-end py-4 md:justify-center"}
          >
            More about me
          </MotionButton>
        </div>
        </div>
        <MotionButton
          clickable
          className={Main.p + "flex justify-center pb-20"}
          href="#latestProject"
        >
          Check out my latest work
        </MotionButton>
    </div>
  );
}
