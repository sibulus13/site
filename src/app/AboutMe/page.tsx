import Introduction from "@/components/AboutMe/Introduction";
import { Metadata } from "next";

export default function Aboutme() {
  return (
      <Introduction />
  );
}

export const metadata: Metadata = {
  title: "About Me",
  description:
    "My introduction, listed skills, and a link to my most recent projects",
};
