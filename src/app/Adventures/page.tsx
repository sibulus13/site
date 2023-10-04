import * as Main from "../../style/main";
import { getBlogPosts } from "@/helpers/contentful";
import ContentfulPost from "@/components/generic/ContentfulPost";

export default async function Projects() {
  const posts: any = await getBlogPosts("adventure");
  // sort posts by date
  posts.sort((a: any, b: any) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  
  return (
    <div>
      <div className={Main.fullPage}>
        <div className="pt-16">
          <h1 className={Main.h1}>Adventure</h1>
          <div className="py-10 gap-y-24 flex flex-col">
            {posts.map((post, index) => (
              <ContentfulPost key={index} content={post}></ContentfulPost>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
