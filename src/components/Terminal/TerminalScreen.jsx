import { useEffect, useState, useRef } from "react";
import SimulatedInput from "../../Utilities/SimulatedInput";
import TerminalAbout from "./TerminalAbout";
import AsciiArt from "./AsciiArt";
import TerminalFetching from "./TerminalFetching";

//TODO Test SimulatedInput, fix showing the "cursor" that follows the text within
// SimulatedInput
const TerminalScreen = ({ winWidth }) => {
  const [nextLine, setNextLine] = useState(0);
  const [showPhoto, setShowPhoto] = useState(false);

  const terminalScreenRef = useRef(null);

  const windowWidth = useRef(window.innerWidth);

  useEffect(() => {
    terminalScreenRef.focus;
    const terminalScreenDiv = terminalScreenRef.current;
    if (terminalScreenDiv) {
      terminalScreenDiv.scrollTop = terminalScreenDiv.scrollHeight;
    }
  }, [nextLine]);

  useEffect(() => {
    if (nextLine === 1) {
      setTimeout(() => {
        setShowPhoto(true);
      }, 1000);
    }
  });

  return (
    <div
      ref={terminalScreenRef}
      id="terminalScreen"
      className="h-full max-h-[56.5625rem] w-full overflow-y-scroll rounded-b-md bg-termScreen  text-sm md:h-[90%]"
    >
      {nextLine >= 0 && (
        <SimulatedInput
          text={"Tim start"}
          delay={0}
          timeUntilNext={500}
          setNextLine={setNextLine}
          isBash={true}
        />
      )}
      {nextLine >= 1 && showPhoto && <AsciiArt setNextLine={setNextLine} />}
      {nextLine >= 2 && (
        <SimulatedInput
          text={"about"}
          delay={500}
          timeUntilNext={1000}
          setNextLine={setNextLine}
          isBash={false}
        />
      )}
      {nextLine >= 3 && <TerminalFetching setNextLine={setNextLine} />}
      {nextLine >= 4 && <TerminalAbout />}
    </div>
  );
};

export default TerminalScreen;
