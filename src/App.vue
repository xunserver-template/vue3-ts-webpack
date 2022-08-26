<template>
  <div class="test">
    {{ name }}
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const name = ref('app')
</script>
<style lang="scss" scoped>
.test {
  color: red;
}
</style>
