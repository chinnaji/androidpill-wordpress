import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />
      </Head>
      <body className="bg-[#111111] relative text-zinc-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
