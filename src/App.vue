<template>
  <main>
    <div class="weather">
      <Search @searchCity="(c) => fetchWeather(c)" />
      <WeatherComp :forecast="forecast" />
      <Error :error="error" v-if="error" />
    </div>
  </main>
</template>

<script setup lang="ts">
import Search from './components/Search.vue';
import WeatherComp from './components/WeatherComp.vue';
import Error from './components/Error.vue';
import { getWeather } from './composables/getWeather';

const { forecast, error, fetchWeather } = getWeather();
</script>

<style></style>
