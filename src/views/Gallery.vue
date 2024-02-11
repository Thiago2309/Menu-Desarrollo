<template>
  <div class="about">
    <h1>Fotografia</h1>
    <ConditionalImage :showImage="true" />
  </div>
</template>

<script setup lang="ts">
import ConditionalImage from '@/components/Menu/ConditionalImage.vue';
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}

</style>
