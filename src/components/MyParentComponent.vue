<template>
  <div>
    <slot />
  </div>
</template>
<script setup>
import { provide } from 'vue'
provide('key', 'Hello')
</script>
