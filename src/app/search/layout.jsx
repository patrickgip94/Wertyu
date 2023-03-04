// COMPONENTS
import SearchHeader from "@/components/SearchHeader";

// STYLES
import "../../app/globals.css";

export default function SearchLayout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
