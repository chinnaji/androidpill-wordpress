import React from "react";
import Script from "next/script";

function Nb({ type }) {
  return (
    <div className="my-10 ">
      {" "}
      <h2 className="text-center text-base font-semibold text-zinc-500 underline pl-3">
        ADVERTISEMENTS
      </h2>
      {type === 1 ? (
        // 4x1 native banner ad

        <>
          <Script
            async="async"
            data-cfasync="false"
            src="//stickervillain.com/b45f6f2e5ae4a9d8c08723c87d6101b5/invoke.js"
          ></Script>
          <div id="container-b45f6f2e5ae4a9d8c08723c87d6101b5"></div>
        </>
      ) : // 3x1 native banner ad
      type === 2 ? (
        <>
          <Script
            async="async"
            data-cfasync="false"
            src="//stickervillain.com/33de08027f7b723b61a7c4b0161bdc7c/invoke.js"
          ></Script>
          <div id="container-33de08027f7b723b61a7c4b0161bdc7c"></div>
        </>
      ) : type === 3 ? (
        // 1x1 native banner ad

        <div>
          <Script
            async="async"
            data-cfasync="false"
            src="//stickervillain.com/394b19fd98e9ee339890cfe98a98f4f8/invoke.js"
          ></Script>
          <div
            id="container-394b19fd98e9ee339890cfe98a98f4f8"
            className="max-w-sm max-h-sm overflow-hidden mx-auto"
          ></div>
        </div>
      ) : type === 4 ? (
        // 1x1 native banner ad

        <div>
          {/* <Script
            async="async"
            data-cfasync="false"
            src="//stickervillain.com/ad956d3da0b2c6a21de046c519988da2/invoke.js"
          ></Script>
          <div
            id="container-ad956d3da0b2c6a21de046c519988da2"
            className="max-w-sm max-h-sm overflow-hidden mx-auto"
          ></div> */}
          <Script
            async="async"
            data-cfasync="false"
            src="//stickervillain.com/ad956d3da0b2c6a21de046c519988da2/invoke.js"
          ></Script>
          <div id="container-ad956d3da0b2c6a21de046c519988da2"></div>
          <h1>4</h1>
        </div>
      ) : (
        // 1x1 native banner ad

        <div>
          <Script
            async="async"
            data-cfasync="false"
            src="//stickervillain.com/397ed138a6d9819cc328155eed48d788/invoke.js"
          ></Script>
          <div
            className="max-w-sm max-h-sm overflow-hidden mx-auto"
            id="container-397ed138a6d9819cc328155eed48d788"
          ></div>
          <h1>5</h1>
        </div>
      )}
      {/*  */}
    </div>
  );
}

export default Nb;
