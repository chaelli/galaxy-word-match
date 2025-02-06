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
  { german: 'Erde', path: 'space/earth.jpg', category: 'space' },
  { german: 'Mars', path: 'space/mars.jpg', category: 'space' },
  { german: 'Mond', path: 'space/moon.jpg', category: 'space' },
  { german: 'Sonne', path: 'space/sun.jpg', category: 'space' },
  { german: 'Sterne', path: 'space/stars.jpg', category: 'space' },
  { german: 'Rakete', path: 'space/rocket.jpg', category: 'space' },
  { german: 'Astronaut', path: 'space/astronaut.jpg', category: 'space' },
  { german: 'Satellit', path: 'space/satellite.jpg', category: 'space' },
  { german: 'Komet', path: 'space/comet.jpg', category: 'space' },
  { german: 'Galaxie', path: 'space/galaxy.jpg', category: 'space' },
  { german: 'Teleskop', path: 'space/telescope.jpg', category: 'space' },
  { german: 'Raumstation', path: 'space/spacestation.jpg', category: 'space' },
  { german: 'Meteorit', path: 'space/meteorite.jpg', category: 'space' },

  // Animals
  { german: 'Hund', path: 'animals/dog.jpg', category: 'animals' },
  { german: 'Katze', path: 'animals/cat.jpg', category: 'animals' },
  { german: 'Pferd', path: 'animals/horse.jpg', category: 'animals' },
  { german: 'Vogel', path: 'animals/bird.jpg', category: 'animals' },
  { german: 'Fisch', path: 'animals/fish.jpg', category: 'animals' },
  { german: 'Kaninchen', path: 'animals/rabbit.jpg', category: 'animals' },
  { german: 'Elefant', path: 'animals/elephant.jpg', category: 'animals' },
  { german: 'Löwe', path: 'animals/lion.jpg', category: 'animals' },
  { german: 'Giraffe', path: 'animals/giraffe.jpg', category: 'animals' },
  { german: 'Pinguin', path: 'animals/penguin.jpg', category: 'animals' },
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
