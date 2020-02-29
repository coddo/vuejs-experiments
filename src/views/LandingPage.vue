<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />

    <h1>Test Page</h1>

    <ul v-for="client in state" :key="client">
      <li>{{ client }}</li>
    </ul>

    <button @click="cykaBlyat()">Click me</button>

    <br /><br /><br /><br />

    <test-component></test-component>
  </div>
</template>

<script lang="ts">
import store from '@/store/classmodule';

export default {
  name: 'Home',
  components: {
    'test-component': () => import('../components/TestComp.vue'),
  },
  computed: {
    state() {
      return store.clients;
    },
  },
  methods: {
    async cykaBlyat() {
      const name =
        Math.random()
          .toString(36)
          .substring(2, 15) +
        Math.random()
          .toString(36)
          .substring(2, 15);

      await store.addClient(name);
    },
  },
};
</script>
