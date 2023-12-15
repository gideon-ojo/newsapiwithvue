<template>
  <div>
        <input
      class="form-control me-2 mt-3 border-0 shadow p-3 bg-white rounded"
      v-model="query"
      type="search"
      placeholder="Search News..."
      aria-label="Search"
      
    />
      </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'

</script>

<style>

</style>