import { useEffect } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Image from "next/image";
function GetPosts({ data }) {
  const {
    posts: { edges },
  } = data;
  useEffect(() => {
    console.log(edges);
  });

  const removeTagFromExcerpt = (excerpt) => {
    return excerpt.slice(3, excerpt.length - 3);
  };

  return (
    <section className="bg-zinc-200">
      {edges.map((edge, index) => (
        <div key={index} className="my-10 py-10">
          <h1>{edge.node.title}</h1>
          <div className="relative">
            <Image
              src={edge.node.featuredImage.node.sourceUrl}
              alt="ss"
              width="200"
              height="200"
            />
          </div>
          <div
            className="text-lg leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: edge.node.excerpt }}
          />
        </div>
      ))}
    </section>
  );
}

export default GetPosts;
