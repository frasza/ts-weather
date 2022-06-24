<template>
  <div class="forecast" v-if="forecast">
    <p>{{ forecast.name }}</p>
    <p>{{ forecast.country }}</p>
    <p>Temperature: {{ forecast.temp_c }} °C</p>
    <p>Condition: {{ forecast.condition }}</p>
    <img :src="forecast.condition_icon" :alt="forecast.condition" />
  </div>
  <div class="empty" v-else>
    <p>Please search for city.</p>
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
