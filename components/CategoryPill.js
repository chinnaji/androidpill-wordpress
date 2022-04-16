import React from "react";
import Link from "next/link";

function CategoryPill({ type }) {
  return (
    <Link passHref href={`/categories/${type}`}>
      <span
        className={`text-zinc-50 px-2 py-1 cursor-pointer ${
          type === "Games"
            ? "bg-orange"
            : type === "Apps"
            ? "bg-success"
            : "bg-danger"
        } hover:bg-opacity-70 text-sm rounded mr-3`}
      >
        {type}
      </span>
    </Link>
  );
}

export default CategoryPill;
