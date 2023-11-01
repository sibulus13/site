import * as Main from "@/style/main";
import { getBlogPosts } from "@/helpers/contentful";
import ContentfulPost from "../generic/ContentfulPost";

export default async function PostLayout(props: any) {
  const { title, parentPath, blogType } = props;

  const posts: any = await getBlogPosts(blogType);
  // sort posts by date
  posts.sort((a: any, b: any) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div>
      <div className={Main.fullPage}>
        <div>
          <h1 className={Main.h1}>{ title }</h1>
          <div className="py-12 gap-y-28 flex flex-col">
            {posts.map((post, index) => (
              <ContentfulPost
                key={index}
                value={index}
                content={post}
                parentPath={parentPath}
              ></ContentfulPost>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
