<template>
    <div>
      <div class="card">
        <div>
          <img v-if="showImage" src="@/assets/img/fondo2.jpg" alt="Conditional Image" style="width: 100%; max-width: 400px;" />
          <div class="content">
            <button @click="toggleImageVisibility" class="toggle-button">Ocultar la Imagen</button><RootLink />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import RootLink from '@/components/Menu/RootLink.vue';
  
  const showImage = ref(true);
  
  const toggleImageVisibility = () => {
    showImage.value = !showImage.value;
  };
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
  }

  .toggle-button {
  background-color: #4CAF50; 
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
  
  .content {
    display: flex;
    justify-content: space-between; 
    flex: 1;
  }
  </style>
  