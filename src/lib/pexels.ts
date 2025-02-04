const PEXELS_API_KEY = 'CrkNg7ascphqbzqJREba99eCeNIfQvHleyWSEDy5wRhuN4XdgtLWWlgF';

export async function searchImages(query: string): Promise<string[]> {
  const response = await fetch(
    `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=5`,
    {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch images');
  }

  const data = await response.json();
  return data.photos.map((photo: any) => photo.src.medium);
}