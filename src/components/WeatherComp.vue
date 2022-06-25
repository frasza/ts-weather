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
    <div class="air_quality">
      <span>Air pollution: </span>
      <span>{{ airQualityIndexText }}</span>
      <div class="air_quality_radar" :class="airQualityRadarColor()"></div>
    </div>
    <div class="date">
      <p>Updated: {{ forecast.last_updated }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Weather from '@/model/Weather';
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
    air_quality_low: props.forecast.air_quality_index < 4,
    air_quality_med: props.forecast.air_quality_index > 3,
    air_quality_high: props.forecast.air_quality_index > 6,
  };
};

const airQualityIndexText = computed<string>(() => {
  if (!props.forecast) return '';
  return props.forecast.air_quality_index <= 3
    ? 'Low'
    : props.forecast.air_quality_index > 3
    ? 'Moderate'
    : props.forecast.air_quality_index > 7
    ? 'High'
    : 'Unknown';
});
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
