<script lang="ts">
import { defineComponent } from 'vue';

import RecipeCard from '@/components/RecipeCard.vue'
import { useRecipeStore } from '@/stores/recipeStore'
import { type Recipe } from '../types/recipe'

export default defineComponent({
  name: 'RecipeList',
  components: {
    RecipeCard
  },
  setup() {
    const store = useRecipeStore()

    return {
      store
    };
  },
  computed: {
    recipes():Recipe[] {
      return this.store.recipeList;
    },
  },  
  created() {
    this.store.getRecipes();
  }
})
</script>

<template>
  <div :class="$style.container">
  <RecipeCard
      v-for="(recipe, index) in recipes"
      :key="index"
      :recipe="recipe" /> 
  </div>
</template>


<style lang="scss" module>
  @media only screen and (min-width: 800px) {
    .container {
      max-width: 700px;
    }
  }

  @media only screen and (min-width: 1000px) {
    .container {
      max-width: 900px;
    }
  }

  @media only screen and (min-width: 1200px) {
    .container {
      max-width: 1100px;
    }
  }
  
  @media only screen and (min-width: 1400px) {
    .container {
      max-width: 1300px;
    }
  }
  
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 10px;
  }
</style>