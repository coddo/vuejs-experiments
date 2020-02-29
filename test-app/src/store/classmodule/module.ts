export class ClientStoreState {
  clients: Array<string> = [];
}

export const ClientStoreModule = {
  namespaced: false,
  state: new ClientStoreState(),

  getters: {
    clients(state: ClientStoreState): Array<string> {
      return state.clients;
    },
  },
  mutations: {
    addClient(state: ClientStoreState, client: string): void {
      state.clients.push(client);
    },
  },
};
