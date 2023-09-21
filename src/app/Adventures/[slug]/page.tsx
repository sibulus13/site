import {
  getPostsFileNames,
  getArticleFromSlug,
} from "../../../../helpers/posts";

export default async function Page({
  props,
}: {
  props: { slug: string };
}) {
//   const type = props.type;
//   console.log('type', type)
  const content = await getArticleFromSlug(`${props.slug}`);
  console.log(content);

  return (
    <div className="pt-20">
      My Post: {props.slug}
      <div>{content.frontmatter.title} </div>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getPostsFileNames("adventure");
  return posts.map((post) => ({
    slug: post.split("/")[2],
  }));
}
