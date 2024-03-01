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
    :class="$style.container">
    <TheNavBar
      :class="$style.header" />
    <RouterView
      :class="$style.content" />
    <div
      :class="$style.footer">
      Some Recipes
    </div>
  </div>
</template>

<style lang="scss" module>
.container {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto auto 300px;
  grid-template-areas: "header header header"
                       "content content content"
                       "footer footer footer";
}

.header {
  grid-area: header;
  width: 100%;
  background-color: white;
  position: fixed;
}

.content {
  grid-area: content;
  background-color: green;
}

.footer {
  grid-area: footer;
  background-color: blue;
}

a:-webkit-any-link {
  text-decoration-line: none;
}
</style>
