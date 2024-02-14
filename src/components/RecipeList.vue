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
  @media only screen and (min-width: 992px) {
    .container {
      max-width: 800px;
    }
  }

  @media only screen and (min-width: 1300px) {
    .container {
      max-width: 1075px;
    }
  }
  
  @media only screen and (min-width: 1600px) {
    .container {
      max-width: 1350px;
    }
  }
  
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 10px;
  }
</style>