import React from "react";
import OtherPostBlock from "./OtherPostBlock";

function OtherPostsSection() {
  const a = [1, 2, 3, 4, 5, 6];

  return (
    <section className="my-10 py-10">
      {a.map((aa) => (
        <OtherPostBlock key={aa} />
      ))}
    </section>
  );
}

export default OtherPostsSection;
