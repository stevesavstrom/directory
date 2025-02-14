
import { useState, useMemo } from "react";
import SearchBar from "@/components/SearchBar";
import DirectoryItem from "@/components/DirectoryItem";
import { directories } from "@/data/directories";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDirectories = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return directories.filter(
      (dir) =>
        dir.name.toLowerCase().includes(query) ||
        dir.description.toLowerCase().includes(query) ||
        dir.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen px-4 py-12 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Directory Explorer</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
          Browse through our curated collection of resources, documentation, and tools.
        </p>
      </div>

      <SearchBar value={searchQuery} onChange={setSearchQuery} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredDirectories.map((entry, index) => (
          <div
            key={entry.id}
            className="fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <DirectoryItem entry={entry} />
          </div>
        ))}
      </div>

      {filteredDirectories.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">
            No directories found matching your search.
          </p>
        </div>
      )}
    </div>
  );
};

export default Index;
