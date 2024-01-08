import { useEffect, useState, useRef } from 'react';
import { FaX, FaBars } from 'react-icons/fa6';
import { VscChromeMinimize } from 'react-icons/vsc';
import TerminalButton from './TerminalButton';
import TerminalScreen from './TerminalScreen';

const TerminalContainer = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [showWindow, setShowWindow] = useState(true);
  const [winWidth, setWinWidth] = useState();

  const windowWidth = useRef(window.innerWidth);

  useEffect(() => {
    setWinWidth(windowWidth.current);
  });

  if (showWindow) {
    return (
      <section className=" mx-auto h-[90%] w-full px-3 text-xs drop-shadow-md lg:h-[80%] lg:w-[80%] lg:text-sm xl:text-base">
        {/* <div className="mx-auto drop-shadow-md"> */}
        <div className="h-6 w-full rounded-t-md bg-termTop">
          <div className="ml-2 flex h-full w-16 items-center justify-between">
            <TerminalButton
              color="bg-termExit"
              showIcon={showIcon}
              icon={<FaX size="1rem" />}
            />
            <TerminalButton
              color="bg-termMin"
              showIcon={showIcon}
              icon={<VscChromeMinimize size="1rem" />}
            />
            <TerminalButton
              color="bg-termMax"
              showIcon={showIcon}
              icon={<FaBars size="1rem" />}
            />
          </div>
          {/* </div> */}
        </div>
        <TerminalScreen winWidth={winWidth} />
      </section>
    );
  }
  // return (
  //   <section className="mx-auto sm:w-[90%] lg:w-3/4 text-xs lg:text-sm xl:text-base">
  //     <div className="mx-auto drop-shadow-md">
  //       <div className="w-full h-6 bg-termTop rounded-t-md">
  //         <div className="flex w-16 h-full ml-2 justify-between items-center">
  //           <TerminalButton
  //             color="bg-termExit"
  //             showIcon={showIcon}
  //             icon={<FaX size="1rem" />}
  //           />
  //           <TerminalButton
  //             color="bg-termMin"
  //             showIcon={showIcon}
  //             icon={<VscChromeMinimize size="1rem" />}
  //           />
  //           <TerminalButton
  //             color="bg-termMax"
  //             showIcon={showIcon}
  //             icon={<FaBars size="1rem" />}
  //           />
  //         </div>
  //       </div>
  //       <TerminalScreen winWidth={winWidth} />
  //     </div>
  //   </section>
  // );
};

export default TerminalContainer;
