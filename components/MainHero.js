import React, { useEffect, useState } from "react";
import Image from "next/image";
import te from "../images/shodex_garden.png";
import CategoryPill from "./CategoryPill";
import Link from "next/link";

function MainHero({ heroPosts }) {
  const [firstPostItem, setFirstPostItem] = useState("");
  console.log(heroPosts);
  const a = [
    {
      title: " Lorem Ipsum dolor emit tandriwch",
      image: te,
      categoty: "Games",
    },
    {
      title: " Lorem Ipsum dolor emit tandriwch",
      image: te,
      categoty: "Games",
    },
    {
      title: " Lorem Ipsum dolor emit tandriwch",
      image: te,
      categoty: "Apps",
    },
    {
      title: " Lorem Ipsum dolor emit tandriwch",
      image: te,
      categoty: "Tips n Tricks",
    },
  ];
  useEffect(() => {
    setFirstPostItem(heroPosts.pop());
  }, []);
  // const firstPostItem = heroPosts.shift();
  // console.log(firstPostItem);
  //   {
  //     "__typename": "RootQueryToPostConnectionEdge",
  //     "node": {
  //         "__typename": "Post",
  //         "title": "Download Rugby Nations 22 MOD APK",
  //         "excerpt": "<p>Rugby Nations 22 mod apk is Android App that available on our Store. You could&#8230;</p>\n",
  //         "slug": "download-rugby-nations-22-mod-apk",
  //         "date": "2021-12-30T17:45:45",
  //         "postId": 2862,
  //         "categories": {
  //             "__typename": "PostToCategoryConnection",
  //             "edges": [
  //                 {
  //                     "__typename": "PostToCategoryConnectionEdge",
  //                     "node": {
  //                         "__typename": "Category",
  //                         "name": "Android Games",
  //                         "link": "https://www.androidpill.com/category/android-games/",
  //                         "slug": "android-games"
  //                     }
  //                 }
  //             ]
  //         }
  //     }
  // }
  return (
    <>
      <section className="max-w-6xl mx-auto flex flex-wrap text-zinc-50 my-10 md:my-24">
        <h2 className="text-zinc-100 font-bold text-xl md:text-3xl w-full text-center mb-8">
          Hot As 🔥
        </h2>

        {/* first and large post banner */}
        <div className="w-full md:w-1/2 p-1 md:pt-4 md:h-[400px] h-[320px] ">
          <span className="block relative w-full h-full rounded">
            <Image
              src={te}
              layout="fill"
              alt="rr"
              className="rounded-md"
              objectFit="cover"
            />
            <div className="absolute inset-0 p-4  rounded from-dark bg-gradient-to-t flex items-end">
              <span className="block">
                <div>
                  <CategoryPill type="Games" />
                  <CategoryPill type="Apps" />
                  <CategoryPill type="Tips n Tricks" />
                </div>

                <Link passHref href="/post_slog">
                  <h3 className="font-semibold text-xl mt-3 mb-2 hover:opacity-90 cursor-pointer">
                    {firstPostItem?.node?.title}
                  </h3>
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
        <div className="w-full p-2 md:w-1/2 ">
          <section className="flex flex-wrap ">
            {heroPosts.map((heroPost, index) => (
              <div
                className="  w-full md:w-1/2 h-[250px] md:h-[200px] rounded p-2 "
                key={index}
              >
                <div className="relative w-full h-full overflow-hidden ">
                  <Image
                    src={te}
                    layout="fill"
                    alt="rr"
                    className="rounded transform hover:scale-125"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0   rounded from-dark bg-gradient-to-t flex items-end p-3">
                    <span className="block">
                      <div>
                        <CategoryPill type={heroPost.node.date} />
                      </div>
                      <Link href="/post_slog">
                        <h3 className="font-semibold text-md mt-3 mb-2 hover:opacity-90 cursor-pointer">
                          {heroPost.node.title}
                        </h3>
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
