import { useEffect, useState } from 'react';

const useIsDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (!savedTheme) {
        if (e.matches) {
          document.documentElement.classList.add('dark');
          setIsDarkMode(true);
        } else {
          document.documentElement.classList.remove('dark');
          setIsDarkMode(false);
        }
      }
    };

    const darkModeMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );
    darkModeMediaQuery.addEventListener('change', handleSystemThemeChange);

    return () =>
      darkModeMediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []);

  return {
    isDarkMode,
    setIsDarkMode,
  };
};

export default useIsDarkMode;
