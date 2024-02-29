<script lang="ts">
import { defineComponent } from 'vue';

// import FilterPanel from '@/components/FilterPanel.vue'
import RecipeList from '@/components/RecipeList.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    // FilterPanel,
    RecipeList
  }
})
</script>

<template>
  <main :class="$style.home">
    <!-- <FilterPanel /> -->
    <div
      :class="$style.recipeBlock">
    </div>
    <RecipeList />  
  </main>
</template>

<style lang="scss" module>
  .home {
    display: grid;
    justify-content: center;
  }

  .recipeBlock {
    height: 300px;
    background-color: linen;
    margin-bottom: 25px;
  }
</style>
