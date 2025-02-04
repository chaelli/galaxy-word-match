// Map of search terms to local image paths
const imageMap: Record<string, string[]> = {
  // Animals
  'dog': ['/images/animals/dog.jpg'],
  'cat': ['/images/animals/cat.jpg'],
  'horse': ['/images/animals/horse.jpg'],
  'bird': ['/images/animals/bird.jpg'],
  'fish': ['/images/animals/fish.jpg'],
  'rabbit': ['/images/animals/rabbit.jpg'],
  'elephant': ['/images/animals/elephant.jpg'],
  'lion': ['/images/animals/lion.jpg'],
  'giraffe': ['/images/animals/giraffe.jpg'],
  'penguin': ['/images/animals/penguin.jpg'],
  
  // Planets
  'earth planet': ['/images/planets/earth.jpg'],
  'mars planet': ['/images/planets/mars.jpg'],
  'jupiter planet': ['/images/planets/jupiter.jpg'],
  'saturn planet': ['/images/planets/saturn.jpg'],
  'venus planet': ['/images/planets/venus.jpg'],
  'mercury planet': ['/images/planets/mercury.jpg'],
  'neptune planet': ['/images/planets/neptune.jpg'],
  'uranus planet': ['/images/planets/uranus.jpg'],
  
  // Colors
  'blue sky': ['/images/colors/blue.jpg'],
  'red flower': ['/images/colors/red.jpg'],
  'yellow sun': ['/images/colors/yellow.jpg'],
  'green grass': ['/images/colors/green.jpg'],
  'black color': ['/images/colors/black.jpg'],
  'white snow': ['/images/colors/white.jpg'],
  'purple flower': ['/images/colors/purple.jpg'],
  'orange fruit': ['/images/colors/orange.jpg'],
  'brown wood': ['/images/colors/brown.jpg'],
  'pink flower': ['/images/colors/pink.jpg'],
  
  // Cars
  'car': ['/images/cars/car.jpg'],
  'race car': ['/images/cars/racecar.jpg'],
  'truck': ['/images/cars/truck.jpg'],
  'motorcycle': ['/images/cars/motorcycle.jpg'],
  'bus vehicle': ['/images/cars/bus.jpg'],
  'cab': ['/images/cars/taxi.jpg'],
  'ambulance': ['/images/cars/ambulance.jpg'],
  'fire truck': ['/images/cars/firetruck.jpg'],
  
  // Space
  'star sky': ['/images/space/star.jpg'],
  'rocket': ['/images/space/rocket.jpg'],
  'astronaut': ['/images/space/astronaut.jpg'],
  'satellite space': ['/images/space/satellite.jpg'],
  'comet space': ['/images/space/comet.jpg'],
  'galaxy space': ['/images/space/galaxy.jpg'],
  'telescope': ['/images/space/telescope.jpg'],
  'space station': ['/images/space/spacestation.jpg'],
  'meteorite': ['/images/space/meteorite.jpg'],
};

export async function searchImages(query: string): Promise<string[]> {
  const images = imageMap[query];
  if (!images) {
    console.warn(`No images found for query: ${query}`);
    return ['/placeholder.svg'];
  }
  return images;
}