import { DomElementsContext } from "./Store/Context.js";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import TerminalContainer from "./components/Terminal/TerminalContainer.jsx";
import ResumeButton from "./components/Header/ResumeButton.jsx";
import "./App.css";
import ProjectContainer from "./components/Projects/ProjectContainer.jsx";

function App() {
  return (
    <DomElementsContext.Provider
      value={
        {
          // aboutSectionElHeight: aboutSectionElHeight,
          // setAboutSectionElHeight: setAboutSectionElHeight,
        }
      }
    >
      <div
        className="mb-8 mt-[3.5rem] flex flex-col"
        style={{ height: "calc(100vh - 3.5rem)" }}
      >
        <Sidebar />
        <Header />
        <div className="h-full">
          <div className="mt-4 flex h-full flex-col justify-center lg:justify-normal">
            <TerminalContainer />
            <ResumeButton />
          </div>
        </div>
      </div>
      <ProjectContainer />
    </DomElementsContext.Provider>
  );
}

export default App;
