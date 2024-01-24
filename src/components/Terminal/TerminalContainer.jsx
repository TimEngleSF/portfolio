import { useEffect, useState, useRef } from "react";
import { FaX, FaBars } from "react-icons/fa6";
import { VscChromeMinimize } from "react-icons/vsc";
import TerminalButton from "./TerminalButton";
import TerminalScreen from "./TerminalScreen";

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
      <section className="mx-auto mb-14 h-[80%] w-full px-3 text-xs drop-shadow-lg md:mb-8 lg:h-[80%] lg:max-w-5xl lg:text-sm xl:text-base">
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
};

export default TerminalContainer;
