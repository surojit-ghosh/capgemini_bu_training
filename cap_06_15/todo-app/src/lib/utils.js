export function filterRequests(requests, { searchText, statusFilter }) {
  let result = requests;
  if (searchText?.trim()) {
    const q = searchText.trim().toLowerCase();
    result = result.filter(
      (req) =>
        req.area.toLowerCase().includes(q) ||
        req.category.toLowerCase().includes(q)
    );
  }
  if (statusFilter) {
    result = result.filter((req) => req.status === statusFilter);
  }
  return result;
}

export function sortRequests(requests, sortBy) {
  if (!sortBy) return requests;
  const sorted = [...requests];
  if (sortBy === 'priority') {
    sorted.sort((a, b) => a.priority.localeCompare(b.priority));
  } else if (sortBy === 'date') {
    sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }
  return sorted;
}
