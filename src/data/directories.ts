
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
    name: 'The Great Gatsby',
    description: 'A classic novel by F. Scott Fitzgerald',
    link: 'https://www.gutenberg.org/ebooks/64317',
    category: 'Literature',
    thumbnail: 'https://covers.openlibrary.org/b/id/7334676-L.jpg',
    rating: 4.7,
    tags: ['Classic', 'Fiction', 'Novel']
  },
  {
    id: '2',
    name: '1984',
    description: 'A dystopian novel by George Orwell',
    link: 'https://www.georgeorwell.org/1984',
    category: 'Literature',
    thumbnail: 'https://covers.openlibrary.org/b/id/15322050-L.jpg',
    rating: 4.8,
    tags: ['Dystopia', 'Fiction', 'Political']
  },
  {
    id: '3',
    name: 'To Kill a Mockingbird',
    description: 'A Pulitzer Prize-winning novel by Harper Lee',
    link: 'https://www.harperlee.com/',
    category: 'Literature',
    thumbnail: 'https://covers.openlibrary.org/b/id/8226408-L.jpg',
    rating: 4.9,
    tags: ['Classic', 'Justice', 'Society']
  },
  {
    id: '4',
    name: 'Moby Dick',
    description: 'An epic novel by Herman Melville',
    link: 'https://www.gutenberg.org/ebooks/2701',
    category: 'Literature',
    thumbnail: 'https://covers.openlibrary.org/b/id/6587891-L.jpg',
    rating: 4.4,
    tags: ['Adventure', 'Classic', 'Sea']
  },
  {
    id: '5',
    name: 'Pride and Prejudice',
    description: 'A romantic novel by Jane Austen',
    link: 'https://www.janeausten.org/',
    category: 'Literature',
    thumbnail: 'https://covers.openlibrary.org/b/id/8363661-L.jpg',
    rating: 4.6,
    tags: ['Romance', 'Classic', 'Society']
  },
  {
    id: '6',
    name: 'The Catcher in the Rye',
    description: 'A novel by J.D. Salinger',
    link: 'https://www.jd-salinger.com/',
    category: 'Literature',
    thumbnail: 'https://covers.openlibrary.org/b/id/8235616-L.jpg',
    rating: 4.2,
    tags: ['Fiction', 'Coming-of-Age', 'Classic']
  },
  {
    id: '7',
    name: 'The Hobbit',
    description: 'A fantasy novel by J.R.R. Tolkien',
    link: 'https://www.tolkien.co.uk/',
    category: 'Fantasy',
    thumbnail: 'https://covers.openlibrary.org/b/id/8333307-L.jpg',
    rating: 4.7,
    tags: ['Fantasy', 'Adventure', 'Magic']
  },
  {
    id: '8',
    name: 'The Alchemist',
    description: 'A philosophical novel by Paulo Coelho',
    link: 'https://www.paulocoelhoblog.com/',
    category: 'Self-Help',
    thumbnail: 'https://covers.openlibrary.org/b/id/8273475-L.jpg',
    rating: 4.5,
    tags: ['Philosophy', 'Self-Help', 'Inspiration']
  },
  {
    id: '9',
    name: 'Brave New World',
    description: 'A dystopian novel by Aldous Huxley',
    link: 'https://www.aldoushuxley.com/',
    category: 'Literature',
    thumbnail: 'https://covers.openlibrary.org/b/id/6787126-L.jpg',
    rating: 4.3,
    tags: ['Dystopia', 'Fiction', 'Philosophy']
  },
  {
    id: '10',
    name: 'The Odyssey',
    description: 'An ancient Greek epic by Homer',
    link: 'https://www.gutenberg.org/ebooks/1727',
    category: 'Classics',
    thumbnail: 'https://covers.openlibrary.org/b/id/7814919-L.jpg',
    rating: 4.6,
    tags: ['Epic', 'Mythology', 'Classic']
  }
];



// Get all unique tags from directories
export const getAllTags = () => {
  const tagSet = new Set<string>();
  directories.forEach(dir => dir.tags.forEach(tag => tagSet.add(tag)));
  return Array.from(tagSet);
};
