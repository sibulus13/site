import Image from "next/image";
import Link from "next/link";
import { BiDownArrow } from "react-icons/bi";

const titles = ["Software Engineer", "Adventurer", "Potato"];

export default function Introduction() {
  return (
    <div className="h-screen min-h-screen flex flex-col">
      <div className="grow flex flex-col justify-center">
        <div className="">
          <h1 className="text-3xl">Hi, I am Michael</h1>
          <div className="flex text-xs gap-2">
            {titles.map((title, index) => (
              <p key={index} className="border rounded px-1">
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

        <div className="relative h-1/3">
          <Image
            src={"/profile/cat_typing.gif"}
            alt="cat typing"
            fill
            className="object-contain"
          ></Image>
        </div>
        <Link href="/AboutMe" className="flex justify-end underline pt-4">
          More about me
        </Link>
      </div>

      <Link
        className="flex justify-center underline pb-8"
        href="#latestProject"
      >
        <BiDownArrow className="text-2xl"></BiDownArrow>
        Check out what I have been working on
        <BiDownArrow className="text-2xl"></BiDownArrow>
      </Link>
    </div>
  );
}
