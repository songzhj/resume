import { useEffect, useState } from 'react';

export const useRefreshByTimer = (interval: number) => {
  const [, setId] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setId((_) => _ + 1);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);
};
