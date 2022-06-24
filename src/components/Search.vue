<template>
  <div class="search">
    <input type="text" placeholder="City name" v-model="city" />
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
