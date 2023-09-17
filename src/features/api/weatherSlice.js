import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURL = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&lang=fa&appid=cfbdccebe58f79a4e1c5de3700f4f8d5&';

export const weatherSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL}),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: city => `&q=${city}`,
    })
  }),
});
export const {useGetWeatherQuery} = weatherSlice;