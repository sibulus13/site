"use client";
import Image from "next/image";
import * as Main from "../../style/main";
import MotionButton from "../motion/MotionButton";
import face_shot from "p/profile/face shot.jpg";
import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";
import { GrDocumentPdf } from "react-icons/gr";
const saveAs = require("file-saver");
const titles = ["Software Engineer", "Photographer", "Adventurer"];

export default function Hero() {
  const saveResume = () => {
    saveAs("profile/Michael Huang Resume.pdf", "Michael_Huang_resume.pdf");
  };

  return (
    <div className={Main.fullPage + "h-full"}>
      {/* Intro */}
      <div className="h-5/6 flex flex-col justify-center md:flex-row">
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
          <div className={Main.p}>
            <p>
              {">"} 3+ years of Software Engineering Experience.
            </p>
            <p>
              {">"} BAsc Mechatronic Systems Engineering / Computer Science (AI)
              Minor.
            </p>
            <p className={Main.subp + "py-1"}>
              Armed with the power of technology to fight for a better world, I
              am passionate about Full Stack development, automation and data
              driven optimization. Join me on my journey to tinker towards a
              better tomorrow
            </p>
          </div>
        </div>
        {/* Image Container */}
        <div className="flex flex-col justify-center h-1/2 md:h-full md:w-1/3">
          <div className="relative h-full md:h-2/3">
            <Image
              src={face_shot}
              alt="Face Shot of Michael Huang"
              fill
              className="object-contain rounded-tl-full rounded-br-full aspect-square"
            ></Image>
          </div>
          <br></br>
          <MotionButton
            href="/AboutMe"
            clickable
            className={"flex justify-end py-1 md:justify-center"}
          >
            More about me
          </MotionButton>
        </div>
      </div>
      {/* Link Buttons */}
      <div className={Main.p + "mx-auto align-text-bottom"}>
        <div className="flex justify-center gap-2 p-2">
          <MotionButton clickable onClick={saveResume}>
            <div className="flex gap-1 items-center">
              <GrDocumentPdf></GrDocumentPdf> Resume
            </div>
          </MotionButton>
          <MotionButton clickable href="https://www.linkedin.com/in/sibulus0/">
            <div className="flex gap-1 items-center">
              <BiLogoLinkedin></BiLogoLinkedin>
              LinkedIn
            </div>
          </MotionButton>
          <MotionButton
            clickable
            href="https://github.com/sibulus13"
            className="text-3xl"
          >
            <div className="flex gap-1 items-center">
              <BiLogoGithub></BiLogoGithub>
              GitHub
            </div>
          </MotionButton>
        </div>
      </div>
      <MotionButton
        clickable
        className={"flex justify-center pb-20"}
        href="#latestProject"
      >
        Check out my latest work
      </MotionButton>
    </div>
  );
}
