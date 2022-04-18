import React, { useEffect, useState } from "react";
import Image from "next/image";
import te from "../images/shodex_garden.png";
import CategoryPill from "./CategoryPill";
import Link from "next/link";

function MainHero({ heroPosts }) {
  const [firstPostItem, setFirstPostItem] = useState("");

  useEffect(() => {
    setFirstPostItem(heroPosts.filter((item) => item.node.postId === 2870)[0]);
  }, []);

  return (
    <>
      <section className="max-w-6xl mx-auto flex flex-wrap text-zinc-50 my-10 md:my-20">
        <h2 className="text-zinc-100 font-bold text-xl md:text-3xl w-full text-center mb-8">
          Hot As 🔥
        </h2>
        {/* {} */}
        {/* first and large post banner */}
        <div className="w-full lg:w-1/2 p-1 md:pt-4 md:h-[400px] h-[320px] ">
          <span className="block relative w-full h-full rounded">
            <Image
              src={firstPostItem.node?.featuredImage.node.sourceUrl || te}
              // firstPostItem.node.featuredImage.node.sourceUrl
              layout="fill"
              alt={
                firstPostItem.node?.featuredImage.node.altText || "androidpill"
              }
              className="rounded-md"
              objectFit="cover"
            />
            <div className="absolute inset-0 p-4  rounded from-dark bg-gradient-to-t flex items-end">
              <span className="block">
                <div>
                  <CategoryPill
                    type={firstPostItem.node?.categories?.edges[0].node.name}
                  />
                </div>

                <Link passHref href={`/${firstPostItem?.node?.slug}`}>
                  <a>
                    <h3 className="font-semibold text-xl mt-3 mb-2 hover:opacity-90 cursor-pointer">
                      {firstPostItem?.node?.title}
                    </h3>
                  </a>
                </Link>
                {/* <p className="text-sm">{firstPostItem.node.excerpt}</p> */}
                <div
                  className="text-sm mb-3"
                  dangerouslySetInnerHTML={{
                    __html: firstPostItem?.node?.excerpt,
                  }}
                />
              </span>
            </div>
          </span>
        </div>

        {/* second right 4s */}
        <div className="w-full pt-1.5 lg:w-1/2 ">
          <section className="flex flex-wrap ">
            {heroPosts
              .filter((item) => item.node.postId !== 2870)
              .map((heroPost, index) => (
                <div
                  className="  w-full md:w-1/2 h-[250px] md:h-[300px] lg:h-[200px] rounded p-2 lg:m-0 my-2 "
                  key={index}
                >
                  <div className="relative w-full h-full overflow-hidden ">
                    <Image
                      src={heroPost.node.featuredImage.node.sourceUrl}
                      layout="fill"
                      alt={heroPost.node.featuredImage.node.altText}
                      className="rounded transform hover:scale-125"
                      objectFit="cover"
                    />
                    <div className="absolute inset-0   rounded from-dark bg-gradient-to-t flex items-end p-3">
                      <span className="block">
                        <div>
                          <CategoryPill
                            type={heroPost.node?.categories?.edges[0].node.name}
                          />
                        </div>

                        <Link passHref href={`/${heroPost.node.slug}`}>
                          <a>
                            <h3 className="font-semibold text-md mt-3 mb-2 hover:opacity-90 cursor-pointer">
                              {heroPost.node.title}
                            </h3>
                          </a>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </section>
        </div>
      </section>
    </>
  );
}

export default MainHero;
