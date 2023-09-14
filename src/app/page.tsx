import Introduction from "@/components/Home/Introduction";
import Skills from "@/components/AboutMe/Skills";
import LatestProject from "@/components/Home/latestProject";

export default async function Home() {
  return (
    <div className="pt-4">
      <Introduction></Introduction>
      <div className="h-44"></div>
      <LatestProject></LatestProject>
    </div>
  );
}
