import Link from "next/link";

import { Metadata } from "next";
import Skills from "@/components/AboutMe/Skills";
import * as Main from "@/style/main";
import MotionButton from "@/components/motion/MotionButton";

export default function Aboutme() {
  return (
    <div className="flex flex-col justify-center">
      <h1 className={Main.h1}>About Me | 我</h1>
      <h1 className={Main.h2}>Professional Summary</h1>
      <p className={Main.p}>
        As a Full Stack Software Engineer with 3 years of tech-related work
        experience, I have gained domain knowledge in a variety of industries
        including: Agri-Tech, Robotics, Clean Energy, and Education while
        utilizing a larger variety of technologies.
      </p>
      <Skills></Skills>
      <h1 className={Main.h2}>Recreational Summary</h1>
      <div className={Main.p}>
        <p>
          I spend my free time as an explorer, learner, and action enthusiast.
          When traveling, you can find me out and about learning different
          cultures and appreciating new sceneries while checking out new
          restaurants and cafes along the way.
        </p>
        <br></br>
        <p>
          When home, I am usually motorcycling to a mountain for a hike in the
          summer, or snowboarding in the winter with a cozy bowl of ramen to end
          off my day.
        </p>
        <MotionButton
          clickable
          className={"flex justify-center my-12"}
          href="/Adventures"
        >
          See my most recent adventures
        </MotionButton>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "About Me",
  description:
    "My introduction, listed skills, and a link to my most recent projects",
};
