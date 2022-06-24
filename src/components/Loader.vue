<template>
  <div class="loader">
    <div class="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'LoaderComponent',
});
</script>

<style scoped>
.loader {
  display: grid;
  place-items: center;
  padding: 3rem 0;
}
</style>
