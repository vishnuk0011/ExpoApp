const RAPIDAPI_HOST = 'gold-price-live.p.rapidapi.com';
const RAPIDAPI_KEY = process.env.EXPO_PUBLIC_RAPIDAPI_KEY!;

export async function getMetalPrices() {
  const url = `https://${RAPIDAPI_HOST}/get_metal_prices`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': RAPIDAPI_KEY,
      'x-rapidapi-host': RAPIDAPI_HOST,
    },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || 'Failed to fetch metal prices');
  }

  return response.json(); // ✅ JSON, not text
}