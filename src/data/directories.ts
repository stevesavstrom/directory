
export interface DirectoryEntry {
  id: string;
  name: string;
  description: string;
  link: string;
  category: string;
  thumbnail: string;
  rating: number;
  tags: string[];
}

export const directories: DirectoryEntry[] = [
  {
    id: '1',
    name: 'Documentation',
    description: 'Project documentation and guides',
    link: 'https://docs.example.com',
    category: 'Resources',
    thumbnail: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    rating: 4.5,
    tags: ['Guides', 'References', 'Examples']
  },
  {
    id: '2',
    name: 'Source Code',
    description: 'Main repository and codebase',
    link: 'https://github.com/example',
    category: 'Development',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    rating: 5,
    tags: ['Code', 'GitHub', 'Open Source']
  },
  {
    id: '3',
    name: 'Design Assets',
    description: 'UI/UX design files and resources',
    link: 'https://figma.com/file/example',
    category: 'Design',
    thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    rating: 4,
    tags: ['UI', 'UX', 'Figma']
  },
  {
    id: '4',
    name: 'API Reference',
    description: 'API documentation and endpoints',
    link: 'https://api.example.com',
    category: 'Development',
    thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    rating: 4.5,
    tags: ['API', 'Documentation', 'Technical']
  },
  {
    id: '5',
    name: 'Component Library',
    description: 'Reusable UI components',
    link: 'https://components.example.com',
    category: 'Design',
    thumbnail: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    rating: 3.5,
    tags: ['Components', 'UI', 'Library']
  }
];

// Get all unique tags from directories
export const getAllTags = () => {
  const tagSet = new Set<string>();
  directories.forEach(dir => dir.tags.forEach(tag => tagSet.add(tag)));
  return Array.from(tagSet);
};
