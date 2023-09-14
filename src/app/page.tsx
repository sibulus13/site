import Introduction from "@/components/Home/Introduction";
import LatestProject from "@/components/Home/latestProject";
import LatestAdventure from "@/components/Home/latestAdventure";

export default async function Home() {
  return (
    <div className="pt-4">
      <Introduction></Introduction>
      <div className="h-44"></div>
      <LatestProject></LatestProject>
      <div className="h-44"></div>
      <LatestAdventure></LatestAdventure>
    </div>
  );
}
