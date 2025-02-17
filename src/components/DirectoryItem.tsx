
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
    const colors: { [key: string]: string } = {
      'Classic': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      'Fiction': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'Novel': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      'Dystopia': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      'Political': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      'Justice': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
      'Society': 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
      'Adventure': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200',
      'Sea': 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
      'Romance': 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200',
      'Coming-of-Age': 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
      'Fantasy': 'bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200',
      'Magic': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200',
      'Philosophy': 'bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-200',
      'Self-Help': 'bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-200',
      'Inspiration': 'bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200',
      'Epic': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      'Mythology': 'bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-200'
    };
    
    return colors[tag] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
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
