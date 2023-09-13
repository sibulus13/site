"use client";

import Link from "next/link";
import {
  TbBrandNextjs,
  TbBrandPowershell,
  TbBrandVercel,
} from "react-icons/tb";
import {
  BiLogoReact,
  BiLogoVuejs,
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoPython,
  BiLogoCss3,
  BiLogoTypescript,
  BiLogoHtml5,
  BiLogoGithub,
  BiLogoDocker,
  BiMap,
  BiLogoFirebase,
  BiLogoNetlify,
  BiLogoWordpress,
} from "react-icons/bi";
import { DiDjango } from "react-icons/di";
import { BsFillMarkdownFill } from "react-icons/bs";
import { PiFileSqlDuotone } from "react-icons/pi";
import {
  SiGnubash,
  SiJest,
  SiDatadog,
  SiConfluence,
  SiJirasoftware,
  SiNotion,
  SiLabview,
  SiVuetify,
} from "react-icons/si";
import { saveAs } from "file-saver";

import listRenderer from "../generic/listRenderer";

export default function Skills() {
  const saveResume = () => {
    saveAs(
      "publicprofileMichael Huang Resume.pdf.pdf",
      "Michael_Huang_resume.pdf"
    );
  };

  return (
    <div id="skills" className="min-h-screen flex flex-col pb-8">
      <div className="grow">
        <h1>Skills</h1>
        <p>
          Over the years I have gained experience with a variety of languages,
          frameworks, and tools, some of which are listed here. Learn more about
          my skills and experiences through my{" "}
          <a className="underline" onClick={saveResume}>
            resume
          </a>
          .
        </p>
        <br></br>

        <h2>Languages</h2>
        {listRenderer(languages)}

        <h2>Frameworks</h2>
        {listRenderer(frameworks)}

        <h2>Tools</h2>
        {listRenderer(tools)}
      </div>

      <Link
        className="flex justify-center underline pb-8"
        href="#latestProject"
      >
        {">"} Learn more about my most recent project {"<"}
      </Link>
    </div>
  );
}

const languages = [
  { name: "Python", icon: <BiLogoPython className="text-4xl"></BiLogoPython> },
  {
    name: "JavaScript",
    icon: <BiLogoJavascript className="text-4xl"></BiLogoJavascript>,
  },
  {
    name: "TypeScript",
    icon: <BiLogoTypescript className="text-4xl"></BiLogoTypescript>,
  },
  {
    name: "SQL",
    icon: <PiFileSqlDuotone className="text-4xl"></PiFileSqlDuotone>,
  },
  { name: "CSS", icon: <BiLogoCss3 className="text-4xl"></BiLogoCss3> },
  { name: "HTML", icon: <BiLogoHtml5 className="text-4xl"></BiLogoHtml5> },
  {
    name: "Markdown",
    icon: <BsFillMarkdownFill className="text-4xl"></BsFillMarkdownFill>,
  },
  {
    name: "Bash",
    icon: <SiGnubash className="text-4xl"></SiGnubash>,
  },
  {
    name: "PowerShell",
    icon: <TbBrandPowershell className="text-4xl"></TbBrandPowershell>,
  },
];

const frameworks = [
  {
    name: "Next.js",
    icon: <TbBrandNextjs className="text-4xl"></TbBrandNextjs>,
  },
  {
    name: "React Native",
    icon: <BiLogoReact className="text-4xl"></BiLogoReact>,
  },
  { name: "Vue.js", icon: <BiLogoVuejs className="text-4xl"></BiLogoVuejs> },
  {
    name: "Django",
    icon: <DiDjango className="text-4xl"></DiDjango>,
  },
  {
    name: "Tailwind CSS",
    icon: <BiLogoTailwindCss className="text-4xl"></BiLogoTailwindCss>,
  },
  {
    name: "Vuetify",
    icon: <SiVuetify className="text-4xl"></SiVuetify>,
  },
  {
    name: "Jest",
    icon: <SiJest className="text-4xl"></SiJest>,
  },
];

const tools = [
  { name: "Git", icon: <BiLogoPython className="text-4xl"></BiLogoPython> },
  {
    name: "GitHub",
    icon: <BiLogoGithub className="text-4xl"></BiLogoGithub>,
  },
  {
    name: "Docker",
    icon: <BiLogoDocker className="text-4xl"></BiLogoDocker>,
  },
  {
    name: "Datadog",
    icon: <SiDatadog className="text-4xl"></SiDatadog>,
  },
  {
    name: "Confluence",
    icon: <SiConfluence className="text-4xl"></SiConfluence>,
  },
  {
    name: "Jira",
    icon: <SiJirasoftware className="text-4xl"></SiJirasoftware>,
  },
  {
    name: "Google Maps API",
    icon: <BiMap className="text-4xl"></BiMap>,
  },
  {
    name: "Firebase",
    icon: <BiLogoFirebase className="text-4xl"></BiLogoFirebase>,
  },
  {
    name: "Netlify",
    icon: <BiLogoNetlify className="text-4xl"></BiLogoNetlify>,
  },
  {
    name: "Vercel",
    icon: <TbBrandVercel className="text-4xl"></TbBrandVercel>,
  },
  {
    name: "Notion",
    icon: <SiNotion className="text-4xl"></SiNotion>,
  },
  {
    name: "WordPress",
    icon: <BiLogoWordpress className="text-4xl"></BiLogoWordpress>,
  },
  {
    name: "LabVIEW",
    icon: <SiLabview className="text-4xl"></SiLabview>,
  },
];
