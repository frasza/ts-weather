<template>
  <div>
    <p>{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, defineProps } from 'vue';

defineComponent({
  name: 'ErrorComponent',
});
defineProps<{
  error?: string;
}>();
</script>

<style scoped>
p {
  color: #f4bfbf;
  font-weight: 700;
}
</style>
