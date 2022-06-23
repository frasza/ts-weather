<template>
  <div class="weather" v-if="forecast">
    <p>{{ forecast.name }}</p>
    <p>Temperature: {{ forecast.temp_c }}</p>
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
