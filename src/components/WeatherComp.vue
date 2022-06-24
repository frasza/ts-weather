<template>
  <div class="forecast" v-if="forecast">
    <p>{{ forecast.name }}, {{ forecast.country }}</p>
    <p>Temperature: {{ forecast.temp_c }} °C</p>
    <div class="condition">
      <img :src="forecast.condition_icon" :alt="forecast.condition" />
      <p>{{ forecast.condition }}</p>
    </div>
  </div>
  <div class="empty" v-else>
    <p>Enter name of the city and retrieve weather.</p>
  </div>
</template>

<script setup lang="ts">
import Weather from '@/model/Weather';
import { defineComponent, defineProps } from 'vue';

defineComponent({
  name: 'WeatherComponent',
});
defineProps<{
  forecast?: Weather;
}>();
</script>

<style scoped>
.condition {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.empty p {
  font-size: 3rem;
}
</style>
