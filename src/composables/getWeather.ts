import Weather from '@/model/Weather';
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
        `https://api.weatherapi.com/v1/current.json?key=${process.env.VUE_APP_APIKEY}&q=${fetchedCity}&aqi=yes`
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error.message);
      }

      const weather: Weather = {
        name: data.location.name,
        country: data.location.country,
        last_updated: data.current.last_updated,
        temp_c: data.current.temp_c,
        feelslike_c: data.current.feelslike_c,
        condition: data.current.condition.text,
        condition_icon: data.current.condition.icon,
        air_quality_index: data.current.air_quality['gb-defra-index'],
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
