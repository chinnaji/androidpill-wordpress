import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        {/* Adsterra popunder ad */}
        {/* <script
          type="text/javascript"
          src="//stickervillain.com/15/14/bb/1514bb63026873a9d4c7be3578d7c447.js"
        ></script> */}
      </Head>
      <body className="bg-[#111111] relative text-zinc-100">
        <Main />
        <NextScript />
        {/* adsterra social bar ad */}
        <script
          type="text/javascript"
          src="//stickervillain.com/de/c6/ae/dec6ae1c3ec3d938847634afdffebc5f.js"
        ></script>
      </body>
    </Html>
  );
}

export default MyDocument;
