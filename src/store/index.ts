import Vue from 'vue';
import Vuex from 'vuex';
import { createDirectStore } from 'direct-vuex';
import testmodule from './testmodule';

Vue.use(Vuex);

const { store, rootActionContext, moduleActionContext } = createDirectStore({
  modules: {
    testmodule,
  },
});

// The following exports will be used to enable types in the implementation of actions
export { rootActionContext, moduleActionContext };

// The following lines enable types in the injected store '$store'.
export type AppStore = typeof store;
declare module 'vuex' {
  interface Store<S> {
    direct: AppStore;
  }
}

export default store;
