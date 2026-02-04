const RAPIDAPI_HOST = 'quotes15.p.rapidapi.com';
const RAPIDAPI_KEY = process.env.EXPO_PUBLIC_RAPIDAPI_KEY!;

export async function getRandomQuote() {
  const url = `https://${RAPIDAPI_HOST}/quotes/random/?language_code=en`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': RAPIDAPI_KEY,
      'x-rapidapi-host': RAPIDAPI_HOST,
    },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || 'Failed to fetch quote');
  }

  return response.json(); // ✅ returns JSON
}