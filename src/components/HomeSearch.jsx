"use client";
// UTLITIES
import { useState } from "react";
import { useRouter } from "next/navigation";

// ICONS
import { BsSearch, BsMicFill } from "react-icons/bs";

export default function HomeSearch() {
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    router.push(`/search/web?searchTerm=${input}`);
  };

  const randomSearch = async () => {
    setRandomSearchLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) return;
    router.push(`/search/web?searchTerm=${response}`);
    setRandomSearchLoading(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3
        rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl
        lg:max-w-2xl"
      >
        <BsSearch className="text-xl text-gray mr-3" />
        <input
          type="text"
          className="flex-grow focus:outline-none"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <BsMicFill className="text-xl text-gray mr-3" />
      </form>
      <div
        className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center 
        sm:flex-row mt-8"
      >
        <button onClick={handleSubmit} className="btn">
          Wertyu Search
        </button>
        <button
          disabled={randomSearchLoading}
          onClick={randomSearch}
          className="btn flex items-center justify-center disabled:opacity-80"
        >
          {randomSearchLoading ? (
            <img
              src="spinner.svg"
              alt="loading spinner"
              className="h-8 text-center"
            />
          ) : (
            "Scramble Words"
          )}
        </button>
      </div>
    </>
  );
}
