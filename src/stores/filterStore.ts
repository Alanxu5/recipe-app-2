import { defineStore } from 'pinia'

import { type Filters } from '../types/filter'

export const useFilterStore = defineStore('useFilterStore', {
  state: () => ({ 
    filters: {} as Filters
  }),
  getters: {
    getFilters: (state) => {
      return state.filters;
    }
  },
  actions: {
    async getMethodTypes() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/recipes/methods`, {
          method: "GET",
          headers: { 
            'Content-Type': 'application/json' 
          },
        });

        const responseJson = await response.json();

        if (response.ok) {
          this.filters.methods = responseJson;
        } else {
          console.error(response);
        }   
      } catch (err) {
        console.error(err);
      }
    },
    async getTypes() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/recipes/types`, {
          method: "GET",
          headers: { 
            'Content-Type': 'application/json' 
          },
        });

        const responseJson = await response.json();

        if (response.ok) {
          this.filters.types = responseJson;
        } else {
          console.error(response);
        }   
      } catch (err) {
        console.error(err);
      }
    },
  },
})
