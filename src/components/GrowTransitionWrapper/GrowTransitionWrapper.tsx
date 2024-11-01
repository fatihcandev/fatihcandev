import classNames from 'classnames';

import { useIsDarkMode } from '@/hooks';

import './styles.css';

const GrowTransitionWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode } = useIsDarkMode();

  return (
    <>
      <div
        className={classNames(
          'flex items-center justify-center fixed inset-0 bg-gray-100 dark:bg-gray-900',
          {
            growTransition: !isDarkMode,
            growTransitionDark: isDarkMode,
          }
        )}
      />
      <div className="flex flex-1 fadeInAnimation">{children}</div>
    </>
  );
};

export default GrowTransitionWrapper;
