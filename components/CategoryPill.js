import React from "react";
import Link from "next/link";

function CategoryPill({ type }) {
  return (
    <Link passHref href={`/${type}`}>
      <span
        className={`text-zinc-50 px-2 py-1 cursor-pointer ${
          type === "Android Games"
            ? "bg-orange"
            : type === "Android Apps"
            ? "bg-success"
            : "bg-danger"
        } hover:bg-opacity-70 text-xs rounded mr-3`}
      >
        {type}
      </span>
    </Link>
  );
}

export default CategoryPill;
