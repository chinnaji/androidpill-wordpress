import React from "react";
import { AiOutlineTags } from "react-icons/ai";
import Link from "next/link";

function Tags({ tags }) {
  return (
    <p className="flex items-center ml-5">
      {tags.nodes.length > 0 ? (
        <AiOutlineTags className="mr-2 text-xl" />
      ) : null}
      {tags.nodes.map((tag) => (
        <>
          <Link passHref href={`/tag/${tag.name.split(" ").join("-")}`}>
            <a
              className="font-semibold hover:text-teal cursor-pointer"
              key={tag.id}
            >
              {tag.name}
            </a>
          </Link>
          ,
        </>
      ))}
    </p>
  );
}

export default Tags;
