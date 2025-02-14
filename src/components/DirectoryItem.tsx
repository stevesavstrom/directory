
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import type { DirectoryEntry } from "@/data/directories";

interface DirectoryItemProps {
  entry: DirectoryEntry;
}

const DirectoryItem = ({ entry }: DirectoryItemProps) => {
  return (
    <Card className="directory-item p-6 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl">
      <div className="flex gap-6">
        <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
          <img
            src={entry.thumbnail}
            alt={entry.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400">
              {entry.category}
            </span>
          </div>
          <h3 className="text-lg font-semibold mb-2">{entry.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {entry.description}
          </p>
          <a
            href={entry.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
          >
            Visit
            <ExternalLink size={14} className="ml-1" />
          </a>
        </div>
      </div>
    </Card>
  );
};

export default DirectoryItem;
