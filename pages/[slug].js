import React, { useEffect } from "react";
import PostBody from "../components/SinglePost/PostBody";
import PostHeading from "../components/SinglePost/PostHeading";
import { getPostsBySlug, getPost } from "../helpers/getPosts";
import parse from "html-react-parser";
import Head from "next/head";

function SinglePost({ post }) {
  const fullHead = parse(post.seo.fullHead);

  return (
    <main className="max-w-6xl mx-auto p-2">
      <Head>{fullHead}</Head>
      <PostHeading
        date={post.date}
        title={post.title}
        thumbnail={post.featuredImage.node}
        tags={post.tags}
      />

      <PostBody post={post} />
    </main>
  );
}

export async function getStaticPaths() {
  // get slugs for all posts
  const res = await getPostsBySlug();
  //   console.log(res.data.posts.nodes.map((node) => node.slug));
  const paths = res.data.posts.nodes.map(({ slug }) => {
    return {
      params: { slug },
    };
  });
  return {
    // return post paths
    paths,
    fallback: false,
  };
}
// getStsticProps recieves slug params from get static paths
export async function getStaticProps({ params }) {
  const { slug } = params;
  //   console.log(slug);
  // fetch singlepost by slug
  const res = await getPost(slug);

  return {
    props: {
      // return post
      post: res.data.postBy,
    },
    revalidate: 10,
  };
}

export default SinglePost;
