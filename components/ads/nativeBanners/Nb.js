import React from "react";
import Script from "next/script";

function Nb({ type }) {
  return (
    <div className="my-10 ">
      {" "}
      <h2 className="text-base font-semibold text-zinc-500 underline pl-3">
        ADVERTISEMENTS
      </h2>
      {type === 1 ? (
        <>
          <Script
            async="async"
            data-cfasync="false"
            src="//stickervillain.com/b45f6f2e5ae4a9d8c08723c87d6101b5/invoke.js"
          ></Script>
          <div id="container-b45f6f2e5ae4a9d8c08723c87d6101b5"></div>
        </>
      ) : (
        <>
          <Script
            async="async"
            data-cfasync="false"
            src="//stickervillain.com/33de08027f7b723b61a7c4b0161bdc7c/invoke.js"
          ></Script>
          <div id="container-33de08027f7b723b61a7c4b0161bdc7c"></div>
        </>
      )}
      {/*  */}
    </div>
  );
}

export default Nb;
