import React from "react";
import { BsFacebook, BsYoutube } from "react-icons/bs";

function SocialBlock({ type }) {
  return type === "facebook" ? (
    <span className="block w-full md:w-1/2 p-2">
      <div className="bg-sky-600 text-center py-5 rounded">
        <h2 className="tetx-xl text-center font-bold flex justify-center">
          FACEBOOK <BsFacebook className="text-2xl ml-2 " />
        </h2>
        <p className="text-base">2k subs</p>
      </div>
    </span>
  ) : (
    <span className="block w-full md:w-1/2 p-2">
      <div className="bg-red-600 text-center py-5 rounded">
        <h2 className="tetx-xl text-center font-bold flex justify-center">
          YOUTUBE <BsYoutube className="text-2xl ml-2 " />
        </h2>
        <p className="text-base">2k likes</p>
      </div>
    </span>
  );
}

export default SocialBlock;
