// src/hooks/useMediaQuery.js
import { useEffect, useState } from 'react';

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event) => setMatches(event.matches);

    // Initial check
    setMatches(mediaQueryList.matches);

    // Add listener for changes
    mediaQueryList.addEventListener('change', listener);

    // Clean up listener
    return () => {
      mediaQueryList.removeEventListener('change', listener);
    };
  }, [query]); // Re-run effect if the query string changes

  return matches;
}

export default useMediaQuery;