import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { getStoreAccessors, GetterHandler, MutationHandlerWithPayload } from 'vuex-typescript';
import { ClientStoreModule } from './classmodule/module';

// eslint-disable-next-line
export interface RootState {}

export abstract class BaseStoreService<T> {
  private store: Store<RootState>;

  protected constructor(store: Store<RootState>) {
    this.store = store;
  }

  protected storeApi = getStoreAccessors<T, RootState>('');

  protected get<TResult>(handler: GetterHandler<T, RootState, TResult>): TResult {
    return this.storeApi.read<TResult>(handler)(this.store);
  }

  protected commit<TPayload>(handler: MutationHandlerWithPayload<T, TPayload>, payload: TPayload) {
    this.storeApi.commit(handler)(this.store, payload);
  }
}

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  modules: {
    clientStore: ClientStoreModule,
  },
});
