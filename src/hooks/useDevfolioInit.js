import { useEffect, useState } from 'react';

export const useDevfolioInit = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadDevfolioScript = () => {
      if (window.devfolio) {
        window.devfolio.init();
        setIsLoading(false);
      } else {
        setTimeout(loadDevfolioScript, 1000);
      }
    };

    // Start checking for Devfolio SDK
    loadDevfolioScript();

    // Cleanup function
    return () => {
      // Any cleanup if needed
    };
  }, []);

  return { isLoading };
};