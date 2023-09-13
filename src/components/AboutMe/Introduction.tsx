import Image from "next/image";
import Link from "next/link";

export default function Introduction() {
  return (
    <div className="h-screen min-h-screen flex flex-col">
      <div className="grow flex flex-col justify-center">
        <h1 className="pb-2">Introduction</h1>
        <div className="relative h-1/2">
          <Image
            src={"/profile/cat_typing.gif"}
            alt="cat typing"
            fill
            className="rounded-xl object-contain"
          ></Image>
        </div>

        <br></br>

        <div className="">
          <h1>Hi, I am Michael</h1>
          <p>
            As a Full Stack Software Engineer with 3+ years of tech-related work
            experience, I have gained domain knowledge in a variety of
            industries including: Agri-Tech, Robotics, Clean Energy, and
            Education utilizing a larger variety of technologies.
          </p>
        </div>
      </div>

      <Link
        className="flex justify-center underline pb-8"
        href="#skills"
      >
        {">"} Learn more about my skills here {"<"}
      </Link>
    </div>
  );
}