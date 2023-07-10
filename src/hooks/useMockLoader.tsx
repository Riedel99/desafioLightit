import { useEffect, useState } from "react";

export const useMockLoader = (delay: number) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const x = setTimeout(() => {
      setLoading(false);
    }, delay);
    return () => {
      clearTimeout(x);
    };
  }, []);

  return { loading };
};
