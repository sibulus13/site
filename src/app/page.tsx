import Hero from "@/components/Home/Hero";
import Latest from "@/components/Home/Latest";
import Link from "next/link";
import MotionButton from "@/components/motion/MotionButton";
import {
  BiLogoLinkedin,
  BiLogoGithub,
  BiLogoGmail,
  BiDownArrow,
} from "react-icons/bi";
import { Metadata } from "next";
import * as Main from "@/style/main";

export default async function Home() {
  return (
    <div>
      <Hero></Hero>
      <div className="h-44"></div>
      <Latest
        type="projects"
        CTA={projectCTA}
        titleID="latestProject"
        hrefMore={"/Projects"}
      ></Latest>
      <div className="h-44"></div>
      <Latest
        type="adventure"
        CTA={adventureCTA}
        titleID="latestAdventure"
        hrefMore={"/Adventures"}
      ></Latest>
    </div>
  );
}

export const metadata: Metadata = {
  title: "黄 | Home",
};

const adventureCTA = (
  <div className={Main.p + "mx-auto align-text-bottom pb-8 pt-8"}>
    Lets develop the future together
    <div className="flex justify-center gap-4 text-3xl pt-2">
      <MotionButton href="https://www.linkedin.com/in/sibulus0/">
        <BiLogoLinkedin></BiLogoLinkedin>
      </MotionButton>
      <MotionButton href="https://github.com/sibulus13">
        <BiLogoGithub></BiLogoGithub>
      </MotionButton>
      <MotionButton href="mailto:chengjie.michael.huang@gmail.com">
        <BiLogoGmail></BiLogoGmail>
      </MotionButton>
    </div>
  </div>
);

const projectCTA = (
  <Link
    className={Main.p + "flex justify-center align-text-bottom pb-8 underline"}
    href="#latestAdventure"
  >
    <BiDownArrow className="text-3xl"></BiDownArrow>
    See what I have been up to
    <BiDownArrow className="text-3xl"></BiDownArrow>
  </Link>
);