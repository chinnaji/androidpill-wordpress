import React from "react";
import { BsFacebook, BsYoutube } from "react-icons/bs";

function SocialBlock({ type }) {
  return type === "facebook" ? (
    <a
      href="https://www.facebook.com/Androidpill/"
      className="block w-full md:w-1/2 p-2"
    >
      <div className="bg-sky-600 hover:bg-sky-700 text-center py-5 rounded">
        <h2 className="tetx-xl text-center font-bold flex justify-center">
          FACEBOOK <BsFacebook className="text-2xl ml-2 " />
        </h2>
        <p className="text-base">438+ Likes</p>
      </div>
    </a>
  ) : (
    <a
      href="https://www.youtube.com/c/Androidpill/"
      className="block w-full md:w-1/2 p-2"
    >
      <div className="bg-red-600 hover:bg-red-700 text-center py-5 rounded">
        <h2 className="tetx-xl text-center font-bold flex justify-center">
          YOUTUBE <BsYoutube className="text-2xl ml-2 " />
        </h2>
        <p className="text-base">2.81k Subscribers</p>
      </div>
    </a>
  );
}

export default SocialBlock;
