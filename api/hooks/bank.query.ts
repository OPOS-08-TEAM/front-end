import { useMutation, useQuery } from 'react-query';

import { REST_API } from '@/config';

import { listBank, searchUserAccount } from '../services';

export function useGetListBank() {
  return useQuery([REST_API.LIST_BANK], () => listBank(), {
    cacheTime: 0,
  });
}

export function useSearchUserAccount() {
  return useMutation(searchUserAccount);
}
