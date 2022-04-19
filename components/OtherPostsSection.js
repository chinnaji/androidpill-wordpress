import React, { useState } from "react";
import OtherPostBlock from "./OtherPostBlock";
import { CgPushDown, CgPushUp } from "react-icons/cg";
import Nb from "./ads/nativeBanners/Nb";

function OtherPostsSection({ otherPosts }) {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);
  const partitionPosts = otherPosts.slice(start, end);

  const showMore = () => {
    setEnd((prevState) => prevState + 10);
    // nativeBannerAdsStart + 1;
  };
  const showLess = () => {
    setEnd((prevState) => prevState - 10);
  };

  return (
    <section className="my-10 py-10">
      {partitionPosts.map((partitionPost, index) => (
        <div key={index}>
          {index === 10 ? (
            <>
              <Nb type={3} />
            </>
          ) : null}
          <OtherPostBlock otherPost={partitionPost} key={index} />
        </div>
      ))}{" "}
      <div className="flex items-center justify-center gap-x-4">
        {/* only show 'show more button' whben partitionPost.length is less  than otherPosts.length  */}
        {partitionPosts.length === otherPosts.length ? (
          <button className="border-2 rounded px-7 py-2 my-10 border-zinc-800 hover:bg-zinc-800 transition ease-in-out font-semibold">
            THE END😎
          </button>
        ) : (
          <button
            className=" flex items-center justify-center  rounded px-7 py-2 my-10 text-zinc-800 hover: bg-teal hover:bg-darkTeal transition ease-in-out font-semibold"
            onClick={() => showMore()}
          >
            {/* SHOW LOADING TEXT WHEN BUTTN IS CLICKED */}
            SHOW MORE <CgPushDown className="ml-2" />
          </button>
        )}{" "}
        {partitionPosts.length === 5 ? null : (
          <button
            className=" flex items-center justify-center border-2 rounded px-7 py-2 my-10 border-zinc-800 hover:bg-zinc-800 transition ease-in-out font-semibold"
            onClick={() => showLess()}
          >
            {/* SHOW LOADING TEXT WHEN BUTTN IS CLICKED */}
            SHOW LESS <CgPushUp className="ml-2" />
          </button>
        )}
      </div>
      <div className="mt-10">
        {" "}
        <Nb type={2} />
      </div>
    </section>
  );
}

export default OtherPostsSection;
