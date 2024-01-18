import { useEffect } from 'react';

const TerminalFetching = ({ setNextLine }) => {
  useEffect(() => {
    const continueNextLine = setTimeout(() => {
      setNextLine((prevLine) => prevLine + 1);
    }, 500);

    return () => clearTimeout(continueNextLine);
  }, []);
  return <pre className="ml-2 text-termTop ">Fetching information...</pre>;
};

export default TerminalFetching;
