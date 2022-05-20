import React, { useState, useEffect } from "react";

export const useFetch = (
  req: RequestInfo,
  ref: { current: boolean },
  initialValue: any
) => {
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (ref.current) {
      (async () => {
        try {
          const res = await fetch(req);
          const resJson = await res.json();
          setData(resJson);
        } catch (error: any) {
          setError(error);
        } finally {
          setLoading(false);
        }
      })();
    }
    return () => {
      ref.current = false;
    };
  }, [req, ref]);
  return { data, error, loading };
};
