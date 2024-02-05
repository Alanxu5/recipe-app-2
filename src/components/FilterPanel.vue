<script lang="ts">
import { defineComponent } from 'vue';

import FilterSelect from '@/components/FilterSelect.vue'
import { useFilterStore } from '@/stores/filterStore'
import { type Filter } from '../types'

export default defineComponent({
  name: 'FilterPanel',
  components: {
    FilterSelect
  },
  setup() {
    const store = useFilterStore()

    return {
      store
    };
  },
  computed: {
    // recipeTypes() {
    //   return this.store.getRecipeTypes;
    // },
    recipeMethods():Filter[] {
      return this.store.getFilters.methods;
    }
  },
  created() {
    this.store.getMethodTypes();
  }
})
</script>

<template>
  <div>
    <!-- <FilterSelect 
      :filter-name="'Type'"
      :filters="recipeTypes" /> -->
    <FilterSelect 
      :filter-name="'Method'"
      :filters="recipeMethods" />
  </div> 
</template>