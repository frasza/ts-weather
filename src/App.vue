<template>
  <Search @searchCity="(c) => fetchWeather(c)" />
  <WeatherComp :forecast="forecast" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Search from './components/Search.vue';
import WeatherComp from './components/WeatherComp.vue';
import Weather from './model/Weather';

const forecast = ref<Weather>();

const fetchWeather = async (fetchedCity: string) => {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${process.env.VUE_APP_APIKEY}&q=${fetchedCity}&aqi=no`
  );
  const data = await response.json();

  const weather: Weather = {
    name: data.location.name,
    last_updated: data.current.last_updated,
    temp_c: data.current.temp_c,
    feelslike_c: data.current.feelslike_c,
    condition: data.current.condition,
  };

  forecast.value = weather;
};
</script>

<style></style>
