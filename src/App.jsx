import { DomElementsContext } from "./Store/Context.js";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import TerminalContainer from "./components/Terminal/TerminalContainer.jsx";
import ResumeButton from "./components/Header/ResumeButton.jsx";
import "./App.css";

function App() {
  // const [aboutSectionElHeight, setAboutSectionElHeight] = useState(null);

  return (
    <DomElementsContext.Provider
      value={
        {
          // aboutSectionElHeight: aboutSectionElHeight,
          // setAboutSectionElHeight: setAboutSectionElHeight,
        }
      }
    >
      <>
        <div className="h-screen">
          <Sidebar />
          <Header />
          <div className="mt-[5%] flex h-[80%] flex-col justify-between">
            <TerminalContainer />
            <ResumeButton />
          </div>
        </div>
      </>
    </DomElementsContext.Provider>
  );
}

export default App;
