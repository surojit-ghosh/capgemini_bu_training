import { useMemo } from 'react';

export function useRequestFilters(requests, { search, category, status, priority, sortBy }) {
  return useMemo(() => {
    let result = [...requests];

    if (search?.trim()) {
      const q = search.trim().toLowerCase();
      result = result.filter((r) => r.title.toLowerCase().includes(q));
    }

    if (category && category !== 'All') {
      result = result.filter((r) => r.category === category);
    }

    if (status && status !== 'All') {
      result = result.filter((r) => r.status === status);
    }

    if (priority && priority !== 'All') {
      result = result.filter((r) => r.priority === priority);
    }

    switch (sortBy) {
      case 'oldest':
        result.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        break;
      case 'title':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'latest':
      default:
        result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    return result;
  }, [requests, search, category, status, priority, sortBy]);
}
