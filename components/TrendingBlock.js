import React from "react";
import Image from "next/image";
import te from "../images/shodex_garden.png";
import CategoryPill from "./CategoryPill";
import Link from "next/link";

function TrendingBlock() {
  return (
    <div className="flex text-zinc-50 my-3 md:my-5">
      <span className="block relative w-1/3 p-2 h-[120px] rounded">
        <span className="block relative w-full p-2 h-full ">
          <Image src={te} layout="fill" alt="rr" className="rounded" />
        </span>
      </span>

      <span className="p-2 w-2/3 ml-5">
        <CategoryPill type="Games" />
        <Link passHref href="/post_slog">
          <h3 className="font-semibold text-md mt-3 mb-2  hover:opacity-90 cursor-pointer">
            Lorem Ipsum dolor emit tandriwch
          </h3>
        </Link>
        <p className="text-zinc-400 text-sm">By Admin</p>
      </span>
    </div>
  );
}

export default TrendingBlock;
