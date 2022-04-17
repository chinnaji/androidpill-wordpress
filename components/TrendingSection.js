import React from "react";
import TrendingBlock from "./TrendingBlock";
import te from "../images/shodex_garden.png";
import CategoryPill from "./CategoryPill";
import Link from "next/link";
import Image from "next/image";
function TrendingSection({ trendingPosts }) {
  return (
    <div>
      <h2 className="text-zinc-100 font-bold text-xl md:text-3xl w-full  md:mb-8 px-4">
        Trending Posts 💹
      </h2>
      <div className="flex flex-wrap">
        {trendingPosts.map((trendingPost, index) => (
          <span className="w-full md:w-1/2 " key={index}>
            <TrendingBlock trendingPost={trendingPost} key={index} />
          </span>
        ))}
      </div>
    </div>
  );
}

export default TrendingSection;
