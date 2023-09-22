import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  getPostsFileNames,
  parseArticleContent,
} from "../../../../helpers/posts";

import { components } from "../../../../helpers/mdx";
import MDXContent from "@/components/generic/MDXContent";

const type = "adventure";

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const { post, carousel } = await parseArticleContent(
    `/${type}/${params.slug}`,
    type
  );

  return (
    <div className="pt-20">
      {/* Header Info */}
      <div>
        <div> {post.frontmatter.date} </div>
        <h1> {post.frontmatter.title} </h1>
        <h2> {post.frontmatter.description} </h2>
      </div>
      {/* Carousel */}
      {/* <div>
        {carousel.length > 0 && (
          <div className="w-1/3 max-h-auto m-auto">
            <Carousel
              axis="horizontal"
              //   autoPlay={true}
              centerMode={true}
              centerSlidePercentage={70}
              infiniteLoop={true}
              interval={5000}
              showIndicators={false}
              stopOnHover={true}
            >
              {carousel.map((url: string) => (
                <div className="flex flex-col">
                  <div className="">
                    <Image
                      src={url}
                      height={200}
                      width={200}
                      alt={alt_caption(url)}
                      className="max-h-96"
                    ></Image>
                  </div>
                  <p className="">{alt_caption(url)}</p>
                </div>
              ))}
            </Carousel>
          </div>
        )}
      </div> */}
      <hr className=""></hr>
      {/* MDX Content */}
      {/* <MDXContent source={post.source}></MDXContent> */}
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getPostsFileNames("adventure");
  return posts.map((post) => ({
    slug: post.split("/")[2],
  }));
}
