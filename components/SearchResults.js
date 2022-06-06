import React from "react";
import Image from "next/image";
import te from "../images/asset.jpg";
import CategoryPill from "./CategoryPill";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdOutlineAccessTime } from "react-icons/md";
import Nb from "./ads/nativeBanners/Nb";

function SearchResults({ searchResults }) {
  const router = useRouter();
  const { searchQuery } = router.query;
  return (
    <>
      <Nb type={3} />
      <h1 className="text-center text-zinc-100 font-semibold text-2xl md:text-3xl my-10">
        Found <span className="underline">{searchResults.nodes.length}</span>{" "}
        Search Results for <span className="underline">{searchQuery}</span>
      </h1>

      {searchResults.nodes.map((result, index) => (
        <section
          key={index}
          className="flex flex-wrap md:justify-between justify-center items-center text-zinc-200 md:my-0 my-10  
          ease-out transition transform "
        >
          {/* thumbnail */}
          <div className="block relative w-full lg:w-1/4 my-5 lg:my-2 p-2 md:h-[350px] lg:h-[220px] h-[250px] rounded">
            <span className="block relative w-full p-2 h-full ">
              <Image
                src={result.featuredImage.node.sourceUrl}
                layout="fill"
                alt={result.featuredImage.node.altText}
                className="rounded"
                // objectFit="cover"
              />
            </span>
          </div>
          {/* content */}
          <span className="p-2  w-full lg:w-1/2 lg:-ml-5">
            <CategoryPill type={result.categories?.edges[0].node.name} />{" "}
            <Link passHref href={`/${result?.slug}`}>
              <a>
                <h3 className="font-semibold text-xl text-md mt-3 mb-2  hover:text-teal cursor-pointer">
                  {result.title}
                </h3>
              </a>
            </Link>
            {/* <p className="text-zinc-400 text-sm">By Admin</p> */}
            <div
              className="text-sm mb-3 text-zinc-300"
              dangerouslySetInnerHTML={{
                __html: result?.excerpt,
              }}
            />
            <p className="text-sm text-zinc-500 flex items-center ">
              <MdOutlineAccessTime className="mr-2 text-xl" />{" "}
              <span>{result.date.slice(0, 10)}</span>
            </p>
          </span>
          {/* ad space */}
          <div className=" block relative w-full lg:w-1/5 p-2 h-[180px] md:h-[150px] rounded mdmy-0 my-16">
            <span className="block relative w-full p-2 h-full ">
              <Image
                src={te}
                layout="fill"
                alt="rr"
                className="rounded"
                // objectFit="cover"
              />
            </span>
            <p className="text-sm text-center text-zinc-400 underline mt-3">
              Advertisement
            </p>
          </div>
        </section>
      ))}
    </>
  );
}

export default SearchResults;
