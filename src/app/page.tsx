import Introduction from "@/components/Home/Introduction";
import Latest from "@/components/Home/Latest";
import Link from "next/link";
import {
  BiLogoLinkedin,
  BiLogoGithub,
  BiLogoGmail,
  BiDownArrow,
} from "react-icons/bi";

const adventureCTA = (
  <div className="mx-auto align-text-bottom pb-8 pt-8">
    Lets develop the future together
    <div className="flex justify-center gap-4 text-2xl pt-2">
      <Link href="https://www.linkedin.com/in/sibulus0/">
        <BiLogoLinkedin></BiLogoLinkedin>
      </Link>
      <Link href="https://github.com/sibulus13">
        <BiLogoGithub></BiLogoGithub>
      </Link>
      <Link href="chengjie.michael.huang@gmail.com">
        <BiLogoGmail></BiLogoGmail>
      </Link>
    </div>
  </div>
);

const projectCTA = (
  <Link
    className="flex justify-center align-text-bottom pb-8 underline"
    href="#latestAdventure"
  >
    <BiDownArrow className="text-2xl"></BiDownArrow>
    See what I have been up to
    <BiDownArrow className="text-2xl"></BiDownArrow>
  </Link>
);

export default async function Home() {
  return (
    <div className="pt-4">
      <Introduction></Introduction>
      <div className="h-44"></div>
      <Latest
        type="showcase"
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
