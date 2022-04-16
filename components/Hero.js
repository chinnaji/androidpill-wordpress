import React from "react";
import Image from "next/image";
import te from "../images/shodex_garden.png";
import CategoryPill from "./CategoryPill";
import Link from "next/link";

function Hero() {
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
  return (
    <>
      <section className="max-w-6xl mx-auto flex flex-wrap text-zinc-50 my-10 md:my-24">
        <h2 className="text-zinc-100 font-bold text-xl md:text-3xl w-full text-center mb-8">
          Hot As 🔥
        </h2>

        {/* first and large post banner */}
        <div className="w-full md:w-1/2 p-2 md:pt-4 md:h-[400px] h-[320px]">
          <span className="block relative w-full h-full rounded">
            <Image
              src={te}
              layout="fill"
              alt="rr"
              className="rounded"
              objectFit="cover"
            />
            <div className="absolute inset-0 p-4  rounded from-dark bg-gradient-to-t flex items-end">
              <span className="block">
                <div>
                  <CategoryPill type="Games" />
                  <CategoryPill type="Apps" />
                  <CategoryPill type="Tips n Tricks" />
                </div>

                <Link href="/post_slog">
                  <h3 className="font-semibold text-xl mt-5 mb-2 hover:opacity-90 cursor-pointer">
                    Lorem Ipsum dolor emit tandriwch
                  </h3>
                </Link>
                <p className="text-sm">
                  {" "}
                  Repellat asperiores quis suscipit vero qui nostrum totam,
                  expedita doloribus ut temporibus, sequi fuga ea iure explicabo
                  quibusdam.
                </p>
              </span>
            </div>
          </span>
        </div>

        {/* second right 4s */}
        <div className="w-full p-2 md:w-1/2 ">
          <section className="flex flex-wrap ">
            {a.map((aa, index) => (
              <div
                className="  w-full md:w-1/2 h-[250px] md:h-[200px] rounded p-2 "
                key={index}
              >
                <div className="relative w-full h-full overflow-hidden">
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
                        <CategoryPill type={aa.categoty} />
                      </div>
                      <Link href="/post_slog">
                        <h3 className="font-semibold text-md mt-3 mb-2 hover:opacity-90 cursor-pointer">
                          {aa.title}
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

export default Hero;
