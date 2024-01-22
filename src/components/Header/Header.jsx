import HeaderLink from "./HeaderLink";
import TerminalContainer from "../Terminal/TerminalContainer";
import ResumeButton from "./ResumeButton";

const Header = () => {
  return (
    <header className="px-6">
      <div className=" flex justify-between">
        <h1 className="font-scp text-2xl font-semibold">Tim Engle</h1>
        {/* <nav>
          <ul className="flex gap-4">
            <HeaderLink headerText="Home" />
            <HeaderLink headerText="About" />
            <HeaderLink headerText="Experience" />
            <HeaderLink headerText="Contact" />
            <HeaderLink headerText="Resume" />
          </ul>
        </nav> */}
      </div>
      {/* <div className="flex h-full flex-col  "> */}
      {/* <TerminalContainer />
      <ResumeButton /> */}
      {/* </div> */}
    </header>
  );
};

export default Header;
