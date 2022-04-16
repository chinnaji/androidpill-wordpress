import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

function MyDocument() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-dark relative text-zinc-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
