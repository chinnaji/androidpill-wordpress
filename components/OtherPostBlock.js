import React from "react";
import Image from "next/image";
import te from "../images/shodex_garden.png";
import CategoryPill from "./CategoryPill";
import Link from "next/link";

function OtherPostBlock() {
  return (
    <section className="flex flex-wrap md:justify-between justify-center items-center text-zinc-50 my-10 md:my-5">
      {/* thumbnail */}
      <div className="block relative w-full lg:w-1/4 p-2 h-[250px] md:h-[220px] rounded">
        <span className="block relative w-full p-2 h-full ">
          <Image
            src={te}
            layout="fill"
            alt="rr"
            className="rounded"
            // objectFit="cover"
          />
        </span>
      </div>
      {/* content */}
      <span className="p-2  w-full lg:w-1/2 lg:-ml-5">
        <CategoryPill type="Games" />
        <Link passHref href="/post_slog">
          <h3 className="font-semibold text-md mt-3 mb-2  hover:opacity-90 cursor-pointer">
            Lorem Ipsum dolor emit tandriwch
          </h3>
        </Link>
        {/* <p className="text-zinc-400 text-sm">By Admin</p> */}
        <p className="text-sm md:pr-10">
          {" "}
          Repellat asperiores quis suscipit vero qui nostrum totam, expedita
          doloribus ut temporibus, sequi fuga ea iure explicabo quibusdam.
        </p>
      </span>
      {/* ad space */}
      <div className=" block relative w-full lg:w-1/5 p-2 h-[180px] md:h-[150px] rounded md:my-0 my-12">
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
  );
}

export default OtherPostBlock;
