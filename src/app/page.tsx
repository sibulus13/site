import Introduction from "@/components/AboutMe/Introduction";
import Skills from "@/components/AboutMe/Skills";
import LatestProject from "@/components/AboutMe/latestProject";

export default async function Home() {
  return (
    <div className="pt-4">
      <Introduction></Introduction>
      <div className="h-44"></div>
      <Skills></Skills>
      <div className="h-44"></div>
      <LatestProject></LatestProject>
    </div>
  );
}
