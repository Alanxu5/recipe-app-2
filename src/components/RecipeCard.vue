<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

import { type Recipe } from '../types/recipe'

export default defineComponent({
  name: 'RecipeCard',
  props: {
    recipe: {
      type: Object as PropType<Recipe>,
      required: true
    }
  },
  computed: {
    imgFileName() {
      let img;
      if (this.recipe.type === "Protein") {
        img = 'IMG_2825';
      } else if (this.recipe.type === "Vegetable") {
        img = 'IMG_2838';
      } else {
        img = 'instantpot_rice';
      }
      return new URL(`/src/assets/images/${img}.jpg`, import.meta.url);
    },
    methodIcon() {
      let icon;
      if (this.recipe.method === "Pan") {
        icon = 'pan';
      } else if (this.recipe.method === "Instant Pot") {
        icon = 'pot';
      } else {
        icon = 'oven';
      }
      return new URL(`/src/assets/icons/${icon}.png`, import.meta.url); 
    }
  },
  methods: {
    recipeClicked() {
      this.$router.push({ name: 'recipe', query: { id: this.recipe.id } });
    }
  }
})
</script>

<template>
  <div 
    :class="$style.container"
    @click="recipeClicked">
    <img 
      :class="$style.image"
      :src="`${imgFileName}`">
    <div>
      <div :class="$style.info">
        <div :class="$style.name">
          {{ recipe.name }}
        </div>
        <img 
          :class="$style.icon"
          :src="`${methodIcon}`">
      </div>
      <div :class="$style.summary">
        <div :class="$style.time">
          {{ recipe.cookTime + recipe.prepTime }} mins
        </div>
        <!-- <div>
          {{ recipe.ingredients.length }}
        </div> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
  .container {
    display: grid;
    height: 350px; 
    width: 250px;
    grid-template-rows: 70% 30%;
    grid-gap: .5rem;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
  
  .icon {
    width: 35px;
    height: 35px;
  }

  .info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .name {
    font-size: 1.25rem;
  }

  .summary {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .time {
    color: rgb(95, 95, 95); 
    margin-right: 1rem;
  }
</style>