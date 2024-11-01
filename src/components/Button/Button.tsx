import { forwardRef } from 'react';
import classNames from 'classnames';

import buttonHoverSound from '../../assets/audio/button-hover.mp3';
import buttonClickSound from '../../assets/audio/button-click.mp3';

// Constants
const AUDIO_CONFIG = {
  DEFAULT_VOLUME: 0.3,
} as const;

// Types
interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  endIcon?: React.ReactNode;
  customClickSound?: HTMLAudioElement;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, endIcon, className, customClickSound, onClick, ...props },
    ref
  ) => {
    const hoverSound = new Audio(buttonHoverSound);
    hoverSound.preload = 'auto';
    hoverSound.volume = AUDIO_CONFIG.DEFAULT_VOLUME;

    const clickSound = new Audio(buttonClickSound);
    clickSound.preload = 'auto';
    clickSound.volume = AUDIO_CONFIG.DEFAULT_VOLUME;

    const handleHover = () => {
      hoverSound.currentTime = 0; // Reset audio to start
      hoverSound
        .play()
        .catch((err) => console.warn('Audio playback failed:', err));
    };

    const handleClick = () => {
      const audio = customClickSound || clickSound;
      audio.play().catch((err) => console.warn('Audio playback failed:', err));
    };

    return (
      <button
        onMouseEnter={handleHover}
        onFocus={handleHover}
        onClick={(e) => {
          handleClick();
          onClick?.(e);
        }}
        {...props}
        ref={ref}
        className={classNames(
          'flex items-center justify-center gap-1 text-base bg-blue-500 text-white hover:bg-blue-600',
          'min-w-40 rounded-lg px-3 h-9',
          'transition-all',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gray-200',
          'dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500',
          'focus:outline-none focus:ring-4 focus:ring-blue-600',
          'dark:focus:ring-blue-500',
          className
        )}
      >
        {children}
        {endIcon && <span className="flex-shrink-0">{endIcon}</span>}
      </button>
    );
  }
);

export default Button;
