<template>
  <div class="app">
    <header>Enter name of the city to retrieve weather information.</header>
    <main>
      <div class="weather">
        <Search @searchCity="(c) => fetchWeather(c)" />
        <WeatherComp :forecast="forecast" v-if="forecast" />
        <Loader v-if="fetching" />
        <Error :error="error" v-if="error" />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import Search from './components/Search.vue';
import WeatherComp from './components/WeatherComp.vue';
import Error from './components/Error.vue';
import { getWeather } from './composables/getWeather';
import Loader from './components/Loader.vue';

const { forecast, error, fetching, fetchWeather } = getWeather();
</script>
