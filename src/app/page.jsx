// COMPONENTS
import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";

// UTILITIES
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header */}
      <HomeHeader />

      {/* Body */}
      <div className="flex flex-col items-center mt-24">
        <Image width="400" height="400" src="https://i.imgur.com/VAWygJR.png" />
        <HomeSearch />
      </div>

      {/* Footer */}
    </>
  );
}
