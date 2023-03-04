// UTILITIES
import Link from "next/link";

// ICON
import { TbGridDots } from "react-icons/tb";

const HomeHeader = () => {
  return (
    <header className="flex justify-end p-5 text-sm">
      <div className="flex space-x-4 items-center">
        <Link href="https://mail.google.com" className="hover:underline">
          <strong className="text-red-700 text-md">W</strong>
          mail
        </Link>
        <Link href="https://image.google.com" className="hover:underline">
          Images
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2" />
        <button
          className="bg-blue-500 text-white font-semibold px-6 
          py-2 rounded-md hover:brightness-105 hover:shadow-md transition-shadow"
        >
          Sign In
        </button>
      </div>
    </header>
  );
};

export default HomeHeader;
