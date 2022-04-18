import React from "react";
import { getPostsBySearchQuery } from "../../helpers/getPosts";
import SearchResults from "../../components/SearchResults";

function search({ searchResults }) {
  return (
    <main className="mx-auto max-w-6xl px-3 mb-10 min-h-[50vh]">
      <SearchResults searchResults={searchResults} />
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
