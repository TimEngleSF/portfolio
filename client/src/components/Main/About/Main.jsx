import { useContext, useEffect, useState } from 'react';
import { DomElementsContext } from '../../../Store/Context';
import About from './About';
const Main = () => {
  const domCtx = useContext(DomElementsContext);

  useEffect(() => {
    // setPosition(window.innerHeight - 180);
  }, []);

  return (
    <main
      // style={{ top: `${position}px` }}
      className={`absolute mx-auto mt-20 flex w-full flex-col items-center text-termScreen`}
    >
      <About />
    </main>
  );
};

export default Main;
