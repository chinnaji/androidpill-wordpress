import React from "react";
import Image from "next/image";
import te from "../images/asset.jpg";
import CategoryPill from "./CategoryPill";
import Link from "next/link";
import { MdOutlineAccessTime } from "react-icons/md";

function TrendingBlock({ trendingPost }) {
  return (
    <div className="flex text-zinc-50 my-3 md:my-5">
      <span className="block relative w-1/3 p-2 h-[120px] rounded">
        <span className="block relative w-full p-2 h-full ">
          <Image
            src={trendingPost.node.featuredImage.node.sourceUrl}
            layout="fill"
            alt={trendingPost.node.featuredImage.node.altText}
            className="rounded"
          />
        </span>
      </span>

      <span className="p-2 w-2/3 ml-5">
        <CategoryPill
          type={trendingPost.node?.categories?.edges[0].node.name}
        />{" "}
        <Link passHref href={`/${trendingPost?.node?.slug}`}>
          <a>
            <h3 className="font-semibold text-md mt-3 mb-2  hover:text-teal cursor-pointer">
              {trendingPost.node?.title}
            </h3>
          </a>
        </Link>
        <p className="text-sm text-zinc-500 flex items-center ">
          <MdOutlineAccessTime className="mr-2 text-xl" />{" "}
          <span>{trendingPost.node?.date.slice(0, 10)}</span>
        </p>
      </span>
    </div>
  );
}

export default TrendingBlock;
