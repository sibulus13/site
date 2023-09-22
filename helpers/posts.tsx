import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { compileMDX } from 'next-mdx-remote/rsc'
export async function getPostsFileNames(type: string) {
  const dir = path.join("./posts", type);
  const filenames = fs.readdirSync(dir);
  const posts = filenames.map(
    (filename) => `/${type}/${filename.split(".")[0]}`
  );
  return posts;
}

export async function getPostContent(type: string) {
  const posts = await getPostsFileNames(type);
  // iterate through posts to getArticleFromSlug
  let articles = await Promise.all(
    posts.map((post) => getArticleFromSlug(post))
  );
  // sort articles by reverse chronological date
  articles = articles.sort((a, b) => {
    return (
      new Date(b.frontmatter.date).valueOf() -
      new Date(a.frontmatter.date).valueOf()
    );
  });
  return articles;
}

export async function getArticleFromSlug(slug: string) {
  const articlePath = path.join("posts", `${slug}.mdx`);
  const source = fs.readFileSync(articlePath);
  // mdx remote
  const { content, data } = matter(source);

  return {
    frontmatter: {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      thumbnailUrl: data.thumbnailUrl,
      tags: data.tags,
      carousel_dir: data.carousel_dir ? data.carousel_dir : null,
      ...data,
    },
    content,
    slug,
  };
}

// returns the title portion of path
export async function get_image_title(img_props: any) {
  let title = img_props.src.split("/").slice(-1)[0];
  title = title.split(".").slice(-2)[0];
  return title;
}

// grabs name portion of url.
export async function alt_caption(url: string) {
  let name = url.split(".")[0];
  name = name.split("/")[name.split("/").length - 1];
  return name;
}

export async function parseArticleContent(slug: string, type: string) {
  const { content, frontmatter } = await getArticleFromSlug(slug);
  const mdxSource = await serialize(content);
  let files: string[] = [];
  if (frontmatter.carousel_dir) {
    // grab name of all files in carousel_dir
    files = fs.readdirSync(
      path.join("public", "posts", type, frontmatter.carousel_dir)
    );
    files = files.map(
      (file) => `/posts/${type}/${frontmatter.carousel_dir}/${file}`
    );
  }

  return {
    post: {
      source: mdxSource,
      content: content,
      frontmatter,
    },
    carousel: files,
  };
}
