import Image from "next/image";
import Link from "next/link";
import { BiDownArrow } from "react-icons/bi";
import * as Main from "../../style/main";

import cat_typing_img from "../../../public/profile/cat_typing.gif";

const titles = ["Software Engineer", "Adventurer", "Potato"];

export default function Introduction() {
  return (
    <div className={Main.fullPage}>
      <div className="grow flex flex-col justify-center md:flex-row">
        {/* Text container */}
        <div className="flex flex-col justify-center md:pr-4 md:w-1/3">
          <h1 className={Main.h1}>Hi, I am Michael</h1>
          <div className="flex text-xs gap-2 md:pt-2">
            {titles.map((title, index) => (
              <p key={index} className="border rounded px-1 whitespace-nowrap">
                {title}
              </p>
            ))}
          </div>
          <p className="text-sm pt-2">
            As a Software Engineer armed with the power of technology to fight
            for a better world, I am passionate about applying data to improve
            processes, such as quality of life.
            <br></br>
            <br></br>
            In my free time, I enjoy exploring new sceneries, playing
            competitive games, and absorbing new domains of knowledge.
          </p>
        </div>

        <br></br>

        {/* Image Container */}
        <div className="flex flex-col justify-center h-1/2 md:h-full md:w-1/3">
          <div className="relative h-full md:h-2/3">
            <Image
              src={cat_typing_img}
              alt="cat typing"
              fill
              className="object-contain rounded-full"
            ></Image>
          </div>
          <Link
            href="/AboutMe"
            className="flex justify-end underline pt-4 md:justify-center"
          >
            More about me
          </Link>
        </div>
      </div>

      <Link
        className="flex justify-center underline pb-10"
        href="#latestProject"
      >
        <BiDownArrow className="text-2xl"></BiDownArrow>
        Check out what I have been working on
        <BiDownArrow className="text-2xl"></BiDownArrow>
      </Link>
    </div>
  );
}
