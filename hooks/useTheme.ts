'use client';

const STORAGE_KEY = 'theme';

export function useTheme() {
  const toggle = () => {
    const root = document.documentElement;
    root.classList.add('theme-transition');
    const isDark = root.classList.toggle('dark');

    try {
      localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
    } catch (error) {
      // localStorage can throw in private mode or when storage is blocked/full.
      // The theme still applies this session; log so monitoring can see why it
      // won't persist, but don't break the toggle over a non-fatal failure.
      console.error('Theme preference could not be saved:', error);
    }

    window.setTimeout(() => root.classList.remove('theme-transition'), 200);
  };

  return { toggle };
}
