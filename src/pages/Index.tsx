
import { useState, useMemo } from "react";
import SearchBar from "@/components/SearchBar";
import DirectoryItem from "@/components/DirectoryItem";
import { directories, getAllTags } from "@/data/directories";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const allTags = getAllTags();

  const filteredDirectories = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return directories.filter((dir) => {
      const matchesSearch =
        dir.name.toLowerCase().includes(query) ||
        dir.description.toLowerCase().includes(query) ||
        dir.category.toLowerCase().includes(query);

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => dir.tags.includes(tag));

      return matchesSearch && matchesTags;
    });
  }, [searchQuery, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen px-4 py-12 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Simple Directory</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
          Browse through our curated collection of resources, documentation, and tools.
        </p>
      </div>

      <SearchBar value={searchQuery} onChange={setSearchQuery} />

      <div className="flex flex-wrap gap-2 mb-6">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              selectedTags.includes(tag)
                ? "bg-primary text-primary-foreground"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="space-y-4">
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
