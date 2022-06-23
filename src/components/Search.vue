<template>
  <div class="search">
    <input type="text" placeholder="City" v-model="city" />
    <button @click="$emit('searchCity', city)">Fetch</button>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue';

const city = ref('');

defineComponent({
  name: 'SearchComponent',
});
</script>

<style scoped>
.search {
  display: flex;
  gap: 10px;
}
</style>
