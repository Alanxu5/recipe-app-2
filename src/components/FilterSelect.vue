<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import { useFilterStore } from '@/stores/filterStore'
import { type Filter } from '../types'

export default defineComponent({
  name: 'FilterSelect',
  props: {
    filterName: {
      type: String,
      required: true
    },
    filters: {
      type: Array as PropType<Filter[]>,
      required: true
    }
  },
  setup() {
    const store = useFilterStore()

    return {
      store
    };
  },  
  computed: {
    // checkedFilters(): Filters {
    //   const queryFilters = this.store.getFilters[this.filterName.toLowerCase()];
    //   const checkedFilters = this.filters.map(filter => {
    //     filter.checked = queryFilters.includes(filter.name);
    //     return filter;
    //   })

    //   return checkedFilters;
    // }
  },
  methods: {
    filterClicked(filter: Filter) {
      console.log(filter);
      // this.$store.dispatch('filterChanged', { filterType: this.filterName.toLowerCase(), filter });
    }
  }
})
</script>

<template>
  <div :class="$style.filterSection">
    <div>
      {{ filterName }} 
    </div> 
    <!-- <div :class="$style.filterGroup">
      <label 
        v-for="(filter, index) in checkedFilters" 
        :key="index">
        <input 
          type="checkbox"
          :checked="filter.checked"
          @change="filterClicked(filter)">
        <span>
          {{ filter.name }}
        </span>
      </label>
    </div> -->
    <div :class="$style.filterGroup">
      <label 
        v-for="(filter, index) in filters" 
        :key="index">
        <input 
          type="checkbox"
          :checked="filter.checked"
          @change="filterClicked(filter)">
        <span>
          {{ filter.name }}
        </span>
      </label>
    </div>
  </div>
</template>

<style lang="scss" module>
  .filterSection {
    margin-bottom: 2rem;
  }

  .filterGroup {
    label {
      display: block;
      padding-right: .5rem;
      white-space: nowrap;
    }
   }
</style>