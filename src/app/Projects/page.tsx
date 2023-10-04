import * as Main from "../../style/main";
import Post from "@/components/generic/MDXPost";
import { getPostContent, alt_caption } from "../../helpers/posts";
import { getBlogPosts } from "@/helpers/contentful";
import ContentfulPost from "@/components/generic/ContentfulPost";

export default async function Projects() {
  const otherProjects: any = await getBlogPosts("projects");
  otherProjects.sort((a, b) => {
    return (
      new Date(b.lastTouchedDate).getTime() -
      new Date(a.lastTouchedDate).getTime()
    );
  });
  return (
    <div>
      <div className={Main.fullPage}>
        <div className="pt-16">
          <h1 className={Main.h1}>Projects</h1>
          <div className="gap-y-2">
            {otherProjects.map((project, index) => (
              <ContentfulPost key={index} content={project}></ContentfulPost>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
