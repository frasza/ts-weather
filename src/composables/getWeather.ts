import Weather from '@/model/Weather';
import { ref } from 'vue';

export function getWeather() {
  const forecast = ref<Weather>();
  const error = ref<string>();

  const fetchWeather = async (fetchedCity: string) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.VUE_APP_APIKEY}&q=${fetchedCity}&aqi=yes`
      );

      if (!response.ok) {
        throw new Error('Error fetching weather. Please try again.');
      }

      const data = await response.json();

      const weather: Weather = {
        name: data.location.name,
        last_updated: data.current.last_updated,
        temp_c: data.current.temp_c,
        feelslike_c: data.current.feelslike_c,
        condition: data.current.condition.text,
        condition_icon: data.current.condition.icon,
      };

      forecast.value = weather;
    } catch (e) {
      const err = e as Error;
      error.value = err.message;
    }
  };

  return { forecast, error, fetchWeather };
}
