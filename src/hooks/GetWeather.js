import { useGetWeatherQuery } from "../features/api/weatherSlice";

function GetWeather(city) {
  const {
    data,
    isSuccess,
    isLoading,
    isError,
    error
  } = useGetWeatherQuery(city);
  return { data, isSuccess, isLoading, isError, error };
}

export default GetWeather;