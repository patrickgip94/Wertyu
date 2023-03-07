// UTILITIES
import Image from "next/image";
import Link from "next/link";

// COMPONENTS
import SearchBox from "./SearchBox";

// ICONS
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from "./SearchHeaderOptions";

function SearchHeader() {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center justify-between">
        <Link href={"/"}>
          <Image
            width="150"
            height="40"
            src="https://i.imgur.com/VAWygJR.png"
          />
        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>
        <div className="hidden md:inline-flex space-x-2">
          <RiSettings3Line className="header-icons" />
          <TbGridDots className="header-icons" />
        </div>
        <button
          className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md
          hover:brightness-105 hover:shadow-md transition-all ml-2"
        >
          Sign in
        </button>
      </div>
      <SearchHeaderOptions />
    </header>
  );
}

export default SearchHeader;
