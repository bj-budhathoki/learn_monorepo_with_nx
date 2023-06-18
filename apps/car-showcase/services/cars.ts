const headers: HeadersInit = {
  'X-RapidAPI-Key': process.env.RAPIDAPI_KEY || '',
  'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
};
export const fetchCars = async () => {
  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    {
      headers,
    }
  );
  const result = await response.json();
  return result;
};
