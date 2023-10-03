import * as Main from "../../style/main";
import Post from "@/components/generic/MDXPost";
import { getPostContent, alt_caption } from "../../helpers/posts";

export default async function Projects() {
  const projects = await getPostContent("showcase");
  return (
    <div>
      <div className={Main.fullPage}>
        <div className="pt-16">
          <h1 className={Main.h1}>Projects</h1>
          <div>
            {projects.map((project, index) => (
                <Post
                    key={index}
                    content={project}
                ></Post>
                ))       
            }
          </div>
        </div>
      </div>
    </div>
  );
}
