import { useState, useEffect } from 'react';

function useDroppable() {
  const [enabled, setEnabled] = useState(false);

  /**
   * React-beautiful-dnd has issue with react 18 StrictMode
   * see: https://github.com/atlassian/react-beautiful-dnd/issues/2350
   * this hook solve issue instead of reactStrictMode set false
   */
  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  return {
    enabled,
  };
}

export default useDroppable;
