<template>
  <div class="forecast" v-if="forecast">
    <div class="location">
      <p>{{ forecast.name }}, {{ forecast.country }}</p>
    </div>
    <p>Temperature: {{ forecast.temp_c }} °C</p>
    <div class="condition">
      <img :src="forecast.condition_icon" :alt="forecast.condition" />
      <p>{{ forecast.condition }}</p>
    </div>
    <div class="date">
      <p>Updated: {{ forecast.last_updated }}</p>
    </div>
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
.forecast {
  padding: 5rem 0;
}
.condition {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.location {
  margin-bottom: 2rem;
}

.date {
  border-top: 1px solid #8cc0de;
  padding-top: 2rem;
  margin-top: 1rem;
}

.date p {
  font-size: 2rem;
}
</style>
