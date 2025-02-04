const UNSPLASH_API_KEY = 'XdxNXqZQVLJpxOKuLF_9_TbZqA_WXz8_YhNRQ4_Xb7Y';

export async function searchImages(query: string): Promise<string[]> {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=5`,
    {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_API_KEY}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch images');
  }

  const data = await response.json();
  return data.results.map((photo: any) => photo.urls.regular);
}