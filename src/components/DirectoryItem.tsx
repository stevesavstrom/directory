
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

  const getTagColor = () => {
    return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
  };

  return (
    <Card className="directory-item p-4 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm">
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
                className={`px-1.5 py-0.5 rounded-full text-xs font-medium ${getTagColor()}`}
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
