export interface TestState {
  name: string | null;
  counter: number;
}

export default {
  namespaced: true as true,
  state: {
    name: 'blyat',
    counter: 1,
  } as TestState,
  getters: {
    message: (state: TestState) => `Hello, ${state.name}!`,
  },
  mutations: {
    increment(state: TestState) {
      state.counter += 1;
    },
  },
  actions: {
    // eslint-disable-next-line
    async increment({ commit }: { commit: any }) {
      commit('increment');
    },
  },
};
