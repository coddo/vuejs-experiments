import store, { BaseStoreService } from '@/store';
import { ClientStoreState, ClientStoreModule } from './module';

class ClientStore extends BaseStoreService<ClientStoreState> {
  public constructor() {
    super(store);
  }

  public get clients(): Array<string> {
    return this.get(ClientStoreModule.getters.clients);
  }

  public async addClient(newClient: string) {
    this.commit(ClientStoreModule.mutations.addClient, newClient);
  }
}

export default new ClientStore();
