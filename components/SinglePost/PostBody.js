import React from "react";

function PostBody({ post }) {
  return (
    <article className="post">
      {" "}
      <div
        className="text-zinc-300 "
        dangerouslySetInnerHTML={{
          __html: post.content.replaceAll("i0.wp.com/", ""),
        }}
      />
    </article>
  );
}

export default PostBody;
