<template>
  <div class="app">
    <header>
      <img src="./assets/images/sunny.png" alt="" />
      <span>Weather</span>
      <img src="./assets/images/moon.png" alt="" />
    </header>
    <div class="weather">
      <Search @searchCity="(c) => fetchWeather(c)" />
      <WeatherComp :forecast="forecast" v-if="forecast" />
      <Loader v-if="fetching" />
      <Error :error="error" v-if="error" />
    </div>
    <Forecast :forecast="forecast" v-if="forecast" />
  </div>
</template>

<script setup lang="ts">
import Search from './components/Search.vue';
import WeatherComp from './components/WeatherComp.vue';
import Error from './components/Error.vue';
import Loader from './components/Loader.vue';
import Forecast from './components/Forecast.vue';
import { getWeather } from './composables/getWeather';

const { forecast, error, fetching, fetchWeather } = getWeather();
</script>

<style scoped>
.weather {
  padding: 0 2rem;
  place-self: flex-start center;
}

@media screen and (max-width: 400px) {
  .weather {
    width: 100%;
  }
}
</style>
