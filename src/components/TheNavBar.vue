<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheNavBar',
  components: {}
})
</script>

<template>
  <div :class="$style.navigation">
    <RouterLink :to="{ name: 'home' }">
      Some Recipes
    </RouterLink>
    <div
      :class="$style.container">
      <input 
        placeholder="What do you want to cook?"/>
      <div
        :class="$style.account">
        <div>
          BM
        </div>
        <div>
          Acct
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.navigation {
  height: 85px;
  display: grid;
  grid-template-columns: 150px 1fr;
  align-items: center;
}

.container {
  height: 100%;
  display: flex;
  align-items: center;
  grid-gap: 30px;

  input {
    flex-grow: 1;
    height: 40%;
  }

  .account {
    display: flex;
    grid-gap: 30px;
  }
}

</style>