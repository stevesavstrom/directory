
export interface DirectoryEntry {
  id: string;
  name: string;
  description: string;
  link: string;
  category: string;
}

export const directories: DirectoryEntry[] = [
  {
    id: '1',
    name: 'Documentation',
    description: 'Project documentation and guides',
    link: 'https://docs.example.com',
    category: 'Resources'
  },
  {
    id: '2',
    name: 'Source Code',
    description: 'Main repository and codebase',
    link: 'https://github.com/example',
    category: 'Development'
  },
  {
    id: '3',
    name: 'Design Assets',
    description: 'UI/UX design files and resources',
    link: 'https://figma.com/file/example',
    category: 'Design'
  },
  {
    id: '4',
    name: 'API Reference',
    description: 'API documentation and endpoints',
    link: 'https://api.example.com',
    category: 'Development'
  },
  {
    id: '5',
    name: 'Component Library',
    description: 'Reusable UI components',
    link: 'https://components.example.com',
    category: 'Design'
  }
];
