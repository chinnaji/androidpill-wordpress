import React from "react";
import OtherHero from "../components/OtherHero";
import OtherPostsSection from "../components/OtherPostsSection";
import { getPostsByCategory } from "../helpers/getPosts";

function androidApps({ posts }) {
  //   console.log(posts);
  return (
    <main className="mx-auto max-w-6xl px-3">
      <h1 className="text-center text-zinc-100 font-semibold text-2xl md:text-3xl my-10">
        ANDROID APPS 🍏
      </h1>
      <OtherHero heroPosts={posts.slice(0, 3)} />
      <OtherPostsSection otherPosts={posts.slice(3, posts.length - 1)} />
    </main>
  );
}

export async function getStaticProps() {
  const res = await getPostsByCategory("android-apps");

  return {
    props: {
      posts: res.data.posts.edges,
    },
    revalidate: 10,
  };
}
export default androidApps;
