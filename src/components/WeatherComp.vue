<template>
  <div class="current" v-if="forecast">
    <div class="location">
      <p>{{ forecast.location.name }}, {{ forecast.location.country }}</p>
    </div>
    <p>Temperature: {{ forecast.current.temp_c }} °C</p>
    <div class="condition">
      <p>{{ forecast.current.condition.text }}</p>
      <img
        :src="forecast.current.condition.icon"
        :alt="forecast.current.condition.text"
      />
    </div>
    <div class="air_quality">
      <span>Air pollution: </span>
      <span>{{ airQualityIndexText }}</span>
      <div class="air_quality_radar" :class="airQualityRadarColor()"></div>
    </div>
    <div class="date">
      <p>Updated: {{ forecast.current.last_updated }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Weather } from '@/model/Weather';
import { computed } from '@vue/reactivity';
import { defineComponent, defineProps } from 'vue';

defineComponent({
  name: 'WeatherComponent',
});
const props = defineProps<{
  forecast?: Weather;
}>();

const airQualityRadarColor = () => {
  if (!props.forecast) return;
  return {
    air_quality_low: props.forecast.current.air_quality['gb-defra-index'] < 4,
    air_quality_med: props.forecast.current.air_quality['gb-defra-index'] > 3,
    air_quality_high: props.forecast.current.air_quality['gb-defra-index'] > 6,
  };
};

const airQualityIndexText = computed<string>(() => {
  if (!props.forecast) return '';
  return props.forecast.current.air_quality['gb-defra-index'] <= 3
    ? 'Low'
    : props.forecast.current.air_quality['gb-defra-index'] > 3
    ? 'Moderate'
    : props.forecast.current.air_quality['gb-defra-index'] > 7
    ? 'High'
    : 'Unknown';
});
</script>

<style scoped>
.current {
  padding: 5rem 0 0 0;
  width: 100%;
}

.date {
  border-top: 1px solid #8cc0de;
  padding-top: 2rem;
  margin-top: 1rem;
}

.date p {
  font-size: 1.6rem;
}

.air_quality {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.air_quality_radar {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
}

.air_quality_low {
  background-color: #8cc0de;
}

.air_quality_med {
  background-color: #ffdcae;
}

.air_quality_high {
  background-color: #f4bfbf;
}
</style>
