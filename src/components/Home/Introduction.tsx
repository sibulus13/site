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
          <h1 className={Main.h1}>
            Hi, I am <span className={Main.mainGradient}>Michael</span>,
          </h1>
          <div className="flex text-xs gap-2 pt-1 md:pt-2">
            {titles.map((title, index) => (
              <p
                key={index}
                className="border rounded px-1 whitespace-nowrap text-base"
              >
                {title}
              </p>
            ))}
          </div>
          <p className={Main.p + "pt-2"}>
            tinkering my way to a better tomorrow.
          </p>
          <br></br>
          <p>
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
          <Link
            href="/AboutMe"
            className={Main.p+"flex justify-end underline pt-4 md:justify-center"}
          >
            More about me
          </Link>
        </div>
      </div>

      <Link
        className={Main.p+"flex justify-center underline pb-10"}
        href="#latestProject"
      >
        <BiDownArrow className="text-3xl"></BiDownArrow>
        Check out my latest work
        <BiDownArrow className="text-3xl"></BiDownArrow>
      </Link>
    </div>
  );
}
