import { useCallback, useState } from 'react';

// The initial class is set by an inline script in index.html so the page
// never flashes the wrong theme. This hook just reads and toggles it.
export function useTheme() {
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle('dark', next);
      try {
        localStorage.setItem('portfolio-theme-v2', next ? 'dark' : 'light');
      } catch {
        /* storage unavailable: theme still applies for this visit */
      }
      return next;
    });
  }, []);

  return { isDark, toggleTheme };
}
