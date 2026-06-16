import { useMemo } from 'react';
import { filterRequests, sortRequests } from '../lib/utils';

export function useRequestFilters(requests, searchText, statusFilter, sortBy) {
  return useMemo(() => {
    let result = filterRequests(requests, { searchText, statusFilter });
    result = sortRequests(result, sortBy);
    return result;
  }, [requests, searchText, statusFilter, sortBy]);
}
