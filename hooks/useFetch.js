import { useState, useEffect } from "react";

const useFetch = (url, dependency) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data.data);
        setLoading(false);
      } catch {
        setError(true);
        setLoading(false);
      }
    })();
  }, [dependency]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
