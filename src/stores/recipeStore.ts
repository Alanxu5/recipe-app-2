import { defineStore } from 'pinia'

import { type Recipe } from '../types/recipe'

export const useRecipeStore = defineStore('useRecipeStore', {
  state: () => ({ 
    recipes: [] as Recipe[]
  }),
  getters: {
    recipeList: (state) => {
      return state.recipes;
    }
  },
  actions: {
    async getRecipes() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/recipes`, {
          method: "GET",
          headers: { 
            'Content-Type': 'application/json' 
          },
        });

        const responseJson = await response.json();

        if (response.ok) {
          this.recipes = responseJson;
        }
      } catch(err) {
        console.error(err);
      }
    },
  },
})
