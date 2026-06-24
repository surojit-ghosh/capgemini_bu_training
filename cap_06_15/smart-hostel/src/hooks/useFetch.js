import { useState, useEffect } from 'react';
import api from '../lib/services';

export function useFetch(url, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refetchKey, setRefetchKey] = useState(0);

  const refetch = () => setRefetchKey((k) => k + 1);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    api
      .get(url)
      .then((res) => { if (!cancelled) setData(res.data); })
      .catch((err) => { if (!cancelled) setError(err.message || 'Something went wrong'); })
      .finally(() => { if (!cancelled) setLoading(false); });

    return () => { cancelled = true; };
  }, [url, refetchKey, ...deps]);

  return { data, loading, error, refetch };
}
