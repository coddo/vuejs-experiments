<template>
  <div>
    <h2>Secondary component counter</h2>

    <ul v-for="client in state" :key="client">
      <li>{{ client }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import store from '@/store/classmodule';

export default Vue.extend({
  computed: {
    state() {
      return store.clients;
    },
  },
});
</script>

<style scoped></style>
