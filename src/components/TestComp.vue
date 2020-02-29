<template>
  <div>
    <h2>Secondary component counter - {{ counter }}</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import store from '@/store';

export default Vue.extend({
  computed: {
    counter() {
      return store.state.testmodule.counter;
    },
  },
});
</script>

<style scoped></style>
