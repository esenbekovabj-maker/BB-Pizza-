import { useEffect } from 'react';

// Calls onEscape when the Escape key is pressed while enabled is true.
export const useEscapeKey = (onEscape: () => void, enabled = true) => {
  useEffect(() => {
    if (!enabled) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onEscape();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onEscape, enabled]);
};
