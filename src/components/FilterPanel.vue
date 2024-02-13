<script lang="ts">
import { defineComponent } from 'vue';

import FilterSelect from '@/components/FilterSelect.vue'
import { useFilterStore } from '@/stores/filterStore'
import { type Filter } from '../types/filter'

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
    types():Filter[] {
      return this.store.getFilters.types;
    },
    methods():Filter[] {
      return this.store.getFilters.methods;
    }
  },
  created() {
    this.store.getMethodTypes();
    this.store.getTypes();
  }
})
</script>

<template>
  <div v-if="types && methods">
    <FilterSelect 
      :filter-name="'Type'"
      :filters="types" />
    <FilterSelect 
      :filter-name="'Method'"
      :filters="methods" />
  </div> 
</template>