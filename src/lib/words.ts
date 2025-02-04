export type WordCategory = 'planets' | 'colors' | 'cars' | 'space' | 'animals';

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
  { german: 'Venus', searchTerm: 'venus planet', category: 'planets' },
  { german: 'Merkur', searchTerm: 'mercury planet', category: 'planets' },
  { german: 'Neptun', searchTerm: 'neptune planet', category: 'planets' },
  { german: 'Uranus', searchTerm: 'uranus planet', category: 'planets' },
  
  // Colors
  { german: 'Blau', searchTerm: 'blue sky', category: 'colors' },
  { german: 'Rot', searchTerm: 'red flower', category: 'colors' },
  { german: 'Gelb', searchTerm: 'yellow sun', category: 'colors' },
  { german: 'Grün', searchTerm: 'green grass', category: 'colors' },
  { german: 'Schwarz', searchTerm: 'black color', category: 'colors' },
  { german: 'Weiß', searchTerm: 'white snow', category: 'colors' },
  { german: 'Lila', searchTerm: 'purple flower', category: 'colors' },
  { german: 'Orange', searchTerm: 'orange fruit', category: 'colors' },
  { german: 'Braun', searchTerm: 'brown wood', category: 'colors' },
  { german: 'Rosa', searchTerm: 'pink flower', category: 'colors' },
  
  // Cars
  { german: 'Auto', searchTerm: 'car', category: 'cars' },
  { german: 'Rennwagen', searchTerm: 'race car', category: 'cars' },
  { german: 'Lastwagen', searchTerm: 'truck', category: 'cars' },
  { german: 'Motorrad', searchTerm: 'motorcycle', category: 'cars' },
  { german: 'Bus', searchTerm: 'bus vehicle', category: 'cars' },
  { german: 'Taxi', searchTerm: 'taxi cab', category: 'cars' },
  { german: 'Krankenwagen', searchTerm: 'ambulance', category: 'cars' },
  { german: 'Feuerwehr', searchTerm: 'fire truck', category: 'cars' },
  
  // Space
  { german: 'Stern', searchTerm: 'star sky', category: 'space' },
  { german: 'Rakete', searchTerm: 'rocket', category: 'space' },
  { german: 'Astronaut', searchTerm: 'astronaut', category: 'space' },
  { german: 'Satellit', searchTerm: 'satellite space', category: 'space' },
  { german: 'Komet', searchTerm: 'comet space', category: 'space' },
  { german: 'Galaxie', searchTerm: 'galaxy space', category: 'space' },
  { german: 'Teleskop', searchTerm: 'telescope', category: 'space' },
  { german: 'Raumstation', searchTerm: 'space station', category: 'space' },
  { german: 'Meteorit', searchTerm: 'meteorite', category: 'space' },

  // Animals
  { german: 'Hund', searchTerm: 'dog animal', category: 'animals' },
  { german: 'Katze', searchTerm: 'cat animal', category: 'animals' },
  { german: 'Pferd', searchTerm: 'horse animal', category: 'animals' },
  { german: 'Vogel', searchTerm: 'bird animal', category: 'animals' },
  { german: 'Fisch', searchTerm: 'fish animal', category: 'animals' },
  { german: 'Kaninchen', searchTerm: 'rabbit animal', category: 'animals' },
  { german: 'Elefant', searchTerm: 'elephant animal', category: 'animals' },
  { german: 'Löwe', searchTerm: 'lion animal', category: 'animals' },
  { german: 'Giraffe', searchTerm: 'giraffe animal', category: 'animals' },
  { german: 'Pinguin', searchTerm: 'penguin animal', category: 'animals' },
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
