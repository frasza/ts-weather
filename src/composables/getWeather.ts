import { Weather } from '@/model/Weather';
import { ref } from 'vue';

export function getWeather() {
  const forecast = ref<Weather>();
  const error = ref<string>();
  const fetching = ref<boolean>(false);

  const fetchWeather = async (fetchedCity: string) => {
    forecast.value = undefined;
    error.value = undefined;
    fetching.value = true;
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${process.env.VUE_APP_APIKEY}&q=${fetchedCity}&days=5&aqi=yes`
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error.message);
      }

      const weather: Weather = {
        location: data.location,
        current: data.current,
        forecast: data.forecast,
      };

      forecast.value = weather;
    } catch (e) {
      const err = e as Error;
      error.value = err.message;
    }
    fetching.value = false;
  };

  return { forecast, error, fetching, fetchWeather };
}
