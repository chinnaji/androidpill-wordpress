import React from "react";

function PostBody({ post }) {
  return (
    <article className="post">
      {" "}
      <div
        className="text-zinc-300 "
        dangerouslySetInnerHTML={{
          __html: post.content,
        }}
      />
    </article>
  );
}

export default PostBody;
