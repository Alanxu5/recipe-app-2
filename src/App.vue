<script lang="ts">
import { RouterView } from 'vue-router'
import { defineComponent } from 'vue';

import TheNavBar from '@/components/TheNavBar.vue'

export default defineComponent({
  name: 'App',
  components: {
    TheNavBar,
    RouterView
  }
})
</script>

<template>
  <div
    :class="$style.app">
    <TheNavBar />
    <RouterView />
  </div>
</template>

<style lang="scss" module>
.app {
  display: grid;
}

a:-webkit-any-link {
  text-decoration-line: none;
}
</style>
