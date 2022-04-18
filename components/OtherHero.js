import React from "react";
import CategoryPill from "./CategoryPill";
import Link from "next/link";
import Image from "next/image";
import te from "../images/shodex_garden.png";
function OtherHero({ heroPosts }) {
  var randomPostIndex = Math.floor(Math.random() * 100);
  return (
    <section className="flex flex-wrap md:my-10 text-zinc-100">
      <span className="block relative w-full md:h-[500px] h-[550px] rounded">
        <Image
          src={heroPosts[0].node?.featuredImage.node.sourceUrl || te}
          // firstPostItem.node.featuredImage.node.sourceUrl
          layout="fill"
          alt={heroPosts[0].node?.featuredImage.node.altText || "androidpill"}
          className="rounded-md"
          objectFit="cover"
        />
        <div className="absolute inset-0 p-4  rounded from-dark bg-gradient-to-t flex items-end">
          <span className="block">
            <div>
              <CategoryPill
                type={heroPosts[0].node?.categories?.edges[0].node.name}
              />
            </div>

            <Link passHref href={`/${heroPosts[0]?.node?.slug}`}>
              <a>
                <h3 className="font-semibold text-xl mt-3 mb-2 hover:text-teal cursor-pointer">
                  {heroPosts[0]?.node?.title}
                </h3>
              </a>
            </Link>
            {/* <p className="text-sm">{heroPosts[0].node.excerpt}</p> */}
            <div
              className="text-sm mb-3 text-zinc-200"
              dangerouslySetInnerHTML={{
                __html: heroPosts[0]?.node?.excerpt,
              }}
            />
          </span>
        </div>
      </span>
      <div className="p-2 w-full md:w-1/2 flex flex-wrap"></div>
    </section>
  );
}

export default OtherHero;
