<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheNavBar',
  components: {}
})
</script>

<template>
  <div :class="$style.navigation">
    <div
      :class="$style.container">
      <RouterLink
        :class="$style.routerLink"
        :to="{ name: 'home' }">
        Some Recipes
      </RouterLink>
      <div
        :class="$style.searchNav">
        <input 
          placeholder="What do you want to cook?" />
        <div
          :class="$style.account">
          <div>
            Bookmarks
          </div>
          <div>
            Acct
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.navigation {
  display: grid;
  grid-template-columns: [page-start] minmax(0,1fr) repeat(7,[col-start] 110px [col-end] 40px) [col-start] 110px [col-end] minmax(0,1fr) [page-end];
}

.container {
  height: 85px;
  display: flex;
  flex-direction: row;
  grid-column: col-start 1/col-end 8;
  align-items: center;

  .routerLink {
    width: 200px;
  }

  .searchNav {
    display: flex;
    height: 55%;
    width: calc(100vw - 200px);
    column-gap: 10px;

    input {
      flex: 1 1;
    }

    .account {
      display: flex;
      column-gap: 10px;
      align-items: center;
    }
  }
}

</style>