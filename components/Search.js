import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { useRouter } from "next/router";

function Search({ setIsSearch }) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSearch = () => {
    setIsLoading(true);
    router.push(`/search/${searchQuery}`);

    setTimeout(() => {
      setIsLoading(false);
      setIsSearch(false);
    }, 2000);
  };
  return (
    <section className=" inset-0 bg-dark background-opacity-70 w-screen h-screen fixed z-[99999999] flex items-center justify-center">
      <form onSubmit={() => handleSearch()} className="max-w-md py-10 px-5">
        <input
          className="w-full border text-zinc-100 border-zinc-600 bg-zinc-700 px-2 py-4  rounded-md my-2"
          type="search"
          required
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {isLoading ? (
          <button
            type="button"
            className="rounded w-full py-5  bg-teal hover:bg-darkTeal hover:text-zinc-100 text-dark font-semibold px-10 outline-none focus:outline-none focus:border-0"
          >
            SEARCHING THE MOON 🌚...
          </button>
        ) : (
          <button
            //   onClick={() => handleSearch()}
            className="rounded w-full py-5  bg-teal hover:bg-darkTeal hover:text-zinc-100 text-dark font-semibold px-10 outline-none focus:outline-none focus:border-0"
          >
            SEARCH
          </button>
        )}
        <div
          onClick={() => setIsSearch(false)}
          className="hover:text-teal cursor-pointer fixed left-[48%] bottom-[16%] text-zinc-100 flex underline"
        >
          <IoIosCloseCircle className="text-2xl mr-1 " /> CLOSE
        </div>
      </form>
    </section>
  );
}

export default Search;
