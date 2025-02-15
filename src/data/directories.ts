
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
    name: 'Steve Savstrom',
    description: 'Software Engineer, Principal Financial Group',
    link: 'https://docs.example.com',
    category: 'Higgs 2021',
    thumbnail: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    rating: 4.5,
    tags: ['Principal Financial Group', 'TypeScript', 'AWS']
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
  },
  {
    id: '6',
    name: 'Community Forum',
    description: 'Discussion board for developers',
    link: 'https://forum.example.com',
    category: 'Community',
    thumbnail: 'https://images.unsplash.com/photo-1573497019433-60c63d01b203',
    rating: 4,
    tags: ['Forum', 'Discussion', 'Help']
  },
  {
    id: '7',
    name: 'Changelog',
    description: 'Latest project updates and releases',
    link: 'https://changelog.example.com',
    category: 'Resources',
    thumbnail: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb',
    rating: 4.5,
    tags: ['Updates', 'Releases', 'Versioning']
  },
  {
    id: '8',
    name: 'Tutorials',
    description: 'Step-by-step coding tutorials',
    link: 'https://tutorials.example.com',
    category: 'Learning',
    thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b',
    rating: 5,
    tags: ['Learning', 'Guides', 'How-To']
  },
  {
    id: '9',
    name: 'Issue Tracker',
    description: 'Bug reports and feature requests',
    link: 'https://issues.example.com',
    category: 'Development',
    thumbnail: 'https://images.unsplash.com/photo-1601582583203-d271bb6bcba7',
    rating: 3.5,
    tags: ['Bugs', 'Tracking', 'Support']
  },
  {
    id: '10',
    name: 'CI/CD Pipeline',
    description: 'Continuous integration and deployment status',
    link: 'https://cicd.example.com',
    category: 'DevOps',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
    rating: 4.5,
    tags: ['Automation', 'Deployment', 'CI/CD']
  }
];

// Get all unique tags from directories
export const getAllTags = () => {
  const tagSet = new Set<string>();
  directories.forEach(dir => dir.tags.forEach(tag => tagSet.add(tag)));
  return Array.from(tagSet);
};
