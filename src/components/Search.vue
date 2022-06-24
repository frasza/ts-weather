<template>
  <div class="search">
    <input
      type="text"
      placeholder="City name"
      v-model="city"
      v-on:keyup.enter="query(city)"
    />
    <button @click="query(city)">Fetch</button>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, defineEmits, ref } from 'vue';

const city = ref('');

defineComponent({
  name: 'SearchComponent',
});
const emit = defineEmits<{
  (event: 'searchCity', city: string): void;
}>();

const query = (query: string) => {
  emit('searchCity', query);
  city.value = '';
};
</script>

<style scoped>
.search {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 2rem;
}

input,
input:focus {
  background-color: transparent;
  border: none;
  font-size: 4rem;
  outline: none;
}

button {
  background-color: #8cc0de;
  border: none;
  padding: 1rem 1.6rem;
}
</style>
