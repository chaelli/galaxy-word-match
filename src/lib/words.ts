export type WordCategory = 'planets' | 'colors' | 'cars' | 'space' | 'animals';

export interface Word {
  german: string;
  path: string;
  category: WordCategory;
}

export const words: Word[] = [
  // Colors
  { german: 'Blau', path: 'color/blue.jpg', category: 'colors' },
  { german: 'Rot', path: 'color/red.jpg', category: 'colors' },
  { german: 'Gelb', path: 'color/yellow.jpg', category: 'colors' },
  { german: 'Grün', path: 'color/green.jpg', category: 'colors' },
  { german: 'Schwarz', path: 'color/black.jpg', category: 'colors' },
  { german: 'Weiss', path: 'color/white.jpg', category: 'colors' },
  { german: 'Orange', path: 'color/orange.jpg', category: 'colors' },
  
  // Cars
  { german: 'Auto', path: 'cars/car.jpg', category: 'cars' },
  { german: 'Rennwagen', path: 'cars/race.jpg', category: 'cars' },
  { german: 'Lastwagen', path: 'cars/truck.jpg', category: 'cars' },
  { german: 'Motorrad', path: 'cars/motorcycle.jpg', category: 'cars' },
  { german: 'Bus', path: 'cars/bus.jpg', category: 'cars' },
  { german: 'Taxi', path: 'cars/cab.jpg', category: 'cars' },
  { german: 'Krankenwagen', path: 'cars/ambulance.jpg', category: 'cars' },
  { german: 'Feuerwehr', path: 'cars/fire.jpg', category: 'cars' },
  
  // Space
  { german: 'Erde', path: 'space/earth.jpg', category: 'planets' },
  { german: 'Mars', path: 'space/mars.jpg', category: 'planets' },
  { german: 'Mond', path: 'space/moon.jpg', category: 'planets' },
  { german: 'Sonne', path: 'space/sun.jpg', category: 'planets' },
  { german: 'Sterne', path: 'star sky', category: 'space' },
  { german: 'Rakete', path: 'rocket', category: 'space' },
  { german: 'Astronaut', path: 'astronaut', category: 'space' },
  { german: 'Satellit', path: 'satellite space', category: 'space' },
  { german: 'Komet', path: 'comet space', category: 'space' },
  { german: 'Galaxie', path: 'galaxy space', category: 'space' },
  { german: 'Teleskop', path: 'telescope', category: 'space' },
  { german: 'Raumstation', path: 'space station', category: 'space' },
  { german: 'Meteorit', path: 'meteorite', category: 'space' },

  // Animals
  { german: 'Hund', path: 'dog', category: 'animals' },
  { german: 'Katze', path: 'cat', category: 'animals' },
  { german: 'Pferd', path: 'horse', category: 'animals' },
  { german: 'Vogel', path: 'bird', category: 'animals' },
  { german: 'Fisch', path: 'fish', category: 'animals' },
  { german: 'Kaninchen', path: 'rabbit', category: 'animals' },
  { german: 'Elefant', path: 'elephant', category: 'animals' },
  { german: 'Löwe', path: 'lion', category: 'animals' },
  { german: 'Giraffe', path: 'giraffe', category: 'animals' },
  { german: 'Pinguin', path: 'penguin', category: 'animals' },
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
