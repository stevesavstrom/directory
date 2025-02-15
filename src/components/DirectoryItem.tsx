
import { Card } from "@/components/ui/card";
import { ExternalLink, Star, StarHalf } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { DirectoryEntry } from "@/data/directories";

interface DirectoryItemProps {
  entry: DirectoryEntry;
}

const DirectoryItem = ({ entry }: DirectoryItemProps) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          size={16}
          className="text-yellow-400 fill-yellow-400"
        />
      );
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half"
          size={16}
          className="text-yellow-400 fill-yellow-400"
        />
      );
    }

    // Add empty stars to make total of 5
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star
          key={`empty-${i}`}
          size={16}
          className="text-gray-300 dark:text-gray-600"
        />
      );
    }

    return stars;
  };

  const getTagColor = (tag: string) => {
    const colors = {
      UI: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      UX: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      API: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      Code: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      Documentation: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      GitHub: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
      default: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
    };
    return colors[tag as keyof typeof colors] || colors.default;
  };

  return (
    <Card className="directory-item p-4 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl">
      <div className="flex gap-4">
        <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
          <img
            src={entry.thumbnail}
            alt={entry.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400">
              {entry.category}
            </span>
            <div className="flex items-center gap-0.5">
              {renderStars(entry.rating)}
              <span className="ml-1 text-xs text-gray-600 dark:text-gray-400">
                {entry.rating}
              </span>
            </div>
          </div>
          <h3 className="text-base font-semibold mb-1">{entry.name}</h3>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
            {entry.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-2">
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className={`px-1.5 py-0.5 rounded-full text-xs font-medium ${getTagColor(tag)}`}
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={entry.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs text-primary hover:text-primary/80 transition-colors"
          >
            Visit
            <ExternalLink size={12} className="ml-1" />
          </a>
        </div>
      </div>
    </Card>
  );
};

export default DirectoryItem;
