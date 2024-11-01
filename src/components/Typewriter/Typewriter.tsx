import { useState, useEffect } from 'react';
import classNames from 'classnames';

import './styles.css';

interface TypewriterProps {
  text: string;
  delay: number;
  onComplete?: () => void;
  className?: string;
}

const Typewriter = ({
  text,
  delay,
  onComplete,
  className,
}: TypewriterProps) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  useEffect(() => {
    if (currentText.length === text.length) {
      onComplete?.();
    }
  }, [currentText.length, onComplete, text.length]);

  return (
    <div
      className={classNames(
        'flex w-fit relative font-bold typewriter',
        className
      )}
    >
      {currentText}
    </div>
  );
};

export default Typewriter;
