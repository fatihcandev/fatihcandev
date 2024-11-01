import classNames from 'classnames';

import { useIsDarkMode } from '@/hooks';

const DarkModeToggle = () => {
  const { isDarkMode, setIsDarkMode } = useIsDarkMode();

  const toggleTheme = () => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <div className="flex items-center absolute top-4 right-4 z-50">
      <span className="mr-2 text-gray-800 dark:text-gray-300 text-2xl">
        {isDarkMode ? '🌙' : '🌞'}
      </span>
      <button
        onClick={toggleTheme}
        className={`w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition duration-300 relative`}
      >
        <div
          className={classNames(
            'w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 absolute',
            {
              'translate-x-6': isDarkMode,
              'translate-x-0': !isDarkMode,
            }
          )}
        />
      </button>
    </div>
  );
};

export default DarkModeToggle;
