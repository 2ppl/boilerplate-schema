import { Login, Refresh, Result } from './schema';
import { ApiConfig, AxiosService } from '@2ppl/core/api';

export interface Service {
  login(data: Login): Promise<Result>;

  refresh(data: Refresh): Promise<Result>;
}

export const apiConfig: ApiConfig<Service> = {
  login: {
    method: 'POST',
    url: '/login',
  },
  refresh: {
    method: 'POST',
    url: '/refresh',
  },
};

export class ClientService extends AxiosService implements Service {
  async login(data: Login): Promise<Result> {
    return this.request({
      ...apiConfig.login,
      data,
    });
  }

  async refresh(data: Refresh): Promise<Result> {
    return this.request({
      ...apiConfig.refresh,
      data,
    });
  }
}
