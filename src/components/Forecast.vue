<template>
  <div class="forecast" v-if="forecast">
    <div
      class="day"
      v-for="(d, i) in forecast.forecast.forecastday"
      :key="d.date"
    >
      <div class="location">
        <p v-if="i === 0">Today</p>
        <p v-else>Date: {{ d.date }}</p>
      </div>
      <div class="info">
        <span>Min temperature:</span>
        <span>{{ d.day.mintemp_c }} °C</span>
      </div>
      <div class="info">
        <span>Max temperature:</span>
        <span>{{ d.day.maxtemp_c }} °C</span>
      </div>
      <div class="info">
        <span>Avg temperature:</span>
        <span>{{ d.day.avgtemp_c }} °C</span>
      </div>
      <div class="info">
        <span>Chance of rain:</span>
        <span>{{ d.day.daily_chance_of_rain }} %</span>
      </div>
      <div class="condition">
        <p>{{ d.day.condition.text }}</p>
        <img :src="d.day.condition.icon" :alt="d.day.condition.text" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Weather } from '@/model/Weather';
import { defineComponent, defineProps } from 'vue';

defineComponent({
  name: 'ForecastComponent',
});
defineProps<{
  forecast?: Weather;
}>();
</script>

<style scoped>
.forecast {
  display: flex;
  justify-content: space-around;
  padding: 2rem;
}

.forecast p,
span {
  font-size: 3rem;
}

.day {
  flex: 1;
  padding: 2rem;
  border: 1px solid #8cc0de;
}

.info {
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 400px) {
  .forecast {
    display: flex;
    flex-direction: column;
  }
}
</style>
