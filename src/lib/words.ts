export type WordCategory = 'planets' | 'colors' | 'cars' | 'space';

export interface Word {
  german: string;
  searchTerm: string;
  category: WordCategory;
}

export const words: Word[] = [
  // Planets
  { german: 'Erde', searchTerm: 'earth planet', category: 'planets' },
  { german: 'Mars', searchTerm: 'mars planet', category: 'planets' },
  { german: 'Jupiter', searchTerm: 'jupiter planet', category: 'planets' },
  { german: 'Saturn', searchTerm: 'saturn planet', category: 'planets' },
  
  // Colors
  { german: 'Blau', searchTerm: 'blue sky', category: 'colors' },
  { german: 'Rot', searchTerm: 'red flower', category: 'colors' },
  { german: 'Gelb', searchTerm: 'yellow sun', category: 'colors' },
  { german: 'Grün', searchTerm: 'green grass', category: 'colors' },
  
  // Cars
  { german: 'Auto', searchTerm: 'car', category: 'cars' },
  { german: 'Rennwagen', searchTerm: 'race car', category: 'cars' },
  { german: 'Lastwagen', searchTerm: 'truck', category: 'cars' },
  
  // Space
  { german: 'Stern', searchTerm: 'star sky', category: 'space' },
  { german: 'Rakete', searchTerm: 'rocket', category: 'space' },
  { german: 'Astronaut', searchTerm: 'astronaut', category: 'space' },
];

export function getRandomWord(): Word {
  return words[Math.floor(Math.random() * words.length)];
}

export function getWrongWords(currentWord: Word): Word[] {
  const sameCategory = words.filter(w => 
    w.category === currentWord.category && w.german !== currentWord.german
  );
  
  const shuffled = [...sameCategory].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 2);
}