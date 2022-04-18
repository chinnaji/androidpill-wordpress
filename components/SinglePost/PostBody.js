import React from "react";

function PostBody({ post }) {
  return (
    <div>
      {" "}
      <div
        className="text-zinc-300"
        dangerouslySetInnerHTML={{
          __html: post.content,
        }}
      />
    </div>
  );
}

export default PostBody;
