import { useMutation, useQuery } from 'react-query';

import { REST_API } from '@/config';

import { createHistory, listHistory } from '../services';

export function useGetListHistory() {
  return useQuery([REST_API.LIST_BANK], () => listHistory(), {
    cacheTime: 0,
  });
}

export function useCreateHistory() {
  return useMutation(createHistory);
}
