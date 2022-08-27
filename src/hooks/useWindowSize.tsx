import { useEffect, useState } from 'react';

interface WindowProps {
  width: number | undefined;
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowProps>({
    width: undefined,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
        });
      };

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowSize;
}
