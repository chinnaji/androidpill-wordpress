import React from "react";
import TrendingBlock from "./TrendingBlock";

function TrendingSection() {
  const a = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <h2 className="text-zinc-100 font-bold text-xl md:text-3xl w-full  md:mb-8 px-4">
        Trending Posts 💹
      </h2>
      <div className="flex flex-wrap">
        {a.map((aa) => (
          <span className="w-full md:w-1/2 " key={aa}>
            <TrendingBlock />
          </span>
        ))}
      </div>
    </div>
  );
}

export default TrendingSection;
