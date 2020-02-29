<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <h1>Test Page - {{ state.name }} - {{ state.counter }}</h1>
    <button @click="cykaBlyat()">Click me</button>

    <br /><br /><br /><br />

    <test-component></test-component>
  </div>
</template>

<script lang="ts">
import store from '@/store';

export default {
  name: 'Home',
  components: {
    'test-component': () => import('../components/TestComp.vue'),
  },
  computed: {
    state() {
      return store.state.testmodule;
    },
  },
  methods: {
    async cykaBlyat() {
      await store.dispatch.testmodule.increment();
    },
  },
};
</script>
