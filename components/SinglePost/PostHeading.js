import React from "react";
import Image from "next/image";
import { MdOutlineAccessTime } from "react-icons/md";
import Tags from "./Tags";

function PostHeading({ title, thumbnail, date, tags }) {
  return (
    <div>
      <h1 className="lg:text-4xl text-2xl font-semibold mt-10 mb-5 text-zinc-100 text-center">
        {title}
      </h1>
      <p className="text-sm text-zinc-400 flex items-center  justify-center mb-10">
        <MdOutlineAccessTime className="mr-2 text-xl" />{" "}
        <span>{date.slice(0, 10)}</span>
        {/* <Tags  */}
        <Tags tags={tags} />
      </p>

      {/* thumbnail */}
      <div className="relative lg:w-1/2 mt-5 mb-10 w-full mx-auto h-[300px]  ">
        <Image
          src={thumbnail.sourceUrl}
          layout="fill"
          alt={thumbnail.altText}
          className="rounded "
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default PostHeading;
