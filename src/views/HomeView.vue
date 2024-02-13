<script lang="ts">
import { defineComponent } from 'vue';

import FilterPanel from '@/components/FilterPanel.vue'
import RecipeList from '@/components/RecipeList.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    FilterPanel,
    RecipeList
  }
})
</script>

<template>
  <main :class="$style.home">
    <FilterPanel />
    <RecipeList />  
  </main>
</template>

<style lang="scss" module>
  .home {
    display: grid;
    grid-template-columns: 225px auto;
  }
</style>
