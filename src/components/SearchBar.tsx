
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-md mx-auto mb-8">
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        <Search size={18} />
      </div>
      <Input
        type="text"
        placeholder="Search directories..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-input pl-10 py-6 text-base bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl"
      />
    </div>
  );
};

export default SearchBar;
