import { REST_API } from '@/config';

import { HttpService } from '../http-service.ts';

export const listBank = async () => {
  const route = REST_API.LIST_BANK.uri;

  return HttpService.get(route);
};

export const searchUserAccount = async (payload: any) => {
  const url = REST_API.LIST_BANK.uri;

  return HttpService.post(url, payload);
};
