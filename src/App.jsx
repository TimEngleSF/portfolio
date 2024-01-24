import { DomElementsContext } from "./Store/Context.js";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import TerminalContainer from "./components/Terminal/TerminalContainer.jsx";
import ResumeButton from "./components/Header/ResumeButton.jsx";
import "./App.css";
import ProjectContainer from "./components/Projects/ProjectContainer.jsx";

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
          <div className="h-[90%]">
            <TerminalContainer />
            <ResumeButton />
          </div>
        </div>
        <ProjectContainer />
      </>
    </DomElementsContext.Provider>
  );
}

export default App;
