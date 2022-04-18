import React from "react";
import { useRouter } from "next/router";
import { getPostsBySearchQuery } from "../../helpers/getPosts";
import OtherPostsSection from "../../components/OtherPostsSection";
import SearchResults from "../../components/SearchResults";

function search({ searchResults }) {
  const router = useRouter();
  const { searchQuery } = router.query;

  return (
    <main className="mx-auto max-w-6xl px-3 mb-10 min-h-[50vh]">
      <h1 className="text-center text-zinc-100 font-semibold text-2xl md:text-3xl my-10">
        Found <span className="underline">{searchResults.nodes.length}</span>{" "}
        Search Results for <span className="underline">{searchQuery}</span>
      </h1>
      {/* <OtherPostsSection otherPosts={searchResults.nodes} /> */}
      {/* {searchResults.nodes.map((searchResult, index) => ( */}
      <SearchResults data={searchResults.nodes} />
    </main>
  );
}

export async function getServerSideProps({ params }) {
  const { searchQuery } = params;
  const res = await getPostsBySearchQuery(searchQuery);
  return {
    props: {
      searchResults: res.data.posts,
    },
  };
}

export default search;
