import { defineStore } from 'pinia'

export const useFilterStore = defineStore('useFilterStore', {
  state: () => ({ 
    filters: []
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
          this.filters = responseJson;
        } else {
          console.error(response);
        }   
      } catch (err) {
        console.error(err);
      }
    },
  },
})
