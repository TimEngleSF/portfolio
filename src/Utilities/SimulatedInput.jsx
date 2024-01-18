import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const SimulatedInput = ({
  text,
  delay,
  timeUntilNext,
  setNextLine,
  isBash,
  wordBreak,
}) => {
  const [displayText, setDisplayText] = useState('$ ');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputCursor, setInputCursor] = useState(true);
  const [startTyping, setStartTyping] = useState(false);
  useEffect(() => {
    if (isBash) {
      setDisplayText('$ ');
    } else {
      setDisplayText('> ');
    }

    // Delay typing effect
    const delayTimeout = setTimeout(() => {
      setStartTyping(true);
    }, delay);

    return () => clearTimeout(delayTimeout);
  }, []);

  // Begin typing
  useEffect(() => {
    if (startTyping) {
      if (currentIndex < text.length) {
        const timeout = setTimeout(
          () => {
            setDisplayText((prevText) => prevText + text[currentIndex]);
            setCurrentIndex((prevIndex) => prevIndex + 1);
          },
          Math.random() * (175 - 100) + 100,
        );

        return () => clearTimeout(timeout);
      } else {
        const continueNextLine = setTimeout(() => {
          setInputCursor(false);
          setNextLine((prevLine) => prevLine + 1);
        }, timeUntilNext);

        return () => clearTimeout(continueNextLine);
      }
    }
  }, [currentIndex, text, startTyping]); // Add startTyping to dependencies

  return (
    <pre className="break- ml-2 text-termTop">
      {displayText}
      {inputCursor && <span className="h-4 w-4 bg-termTop">:</span>}
    </pre>
  );
};

export default SimulatedInput;

SimulatedInput.propTypes = {
  text: PropTypes.string,
  delay: PropTypes.number,
  timeUntilNext: PropTypes.number,
};
