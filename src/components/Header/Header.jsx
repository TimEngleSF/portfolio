import HeaderLink from "./Nav/NavLink";
import NavDesktop from "./Nav/NavDesktop";
import NavMobile from "./Nav/NavMobile";
// import TerminalContainer from "../Terminal/TerminalContainer";
// import ResumeButton from "./ResumeButton";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 h-[3.5rem] w-full bg-white px-6 md:mb-10">
      <div className="flex items-center justify-between">
        <h1 className="font-scp text-2xl font-semibold">Tim Engle</h1>
        <nav className="font-scp">
          <NavMobile />
          <NavDesktop />
        </nav>
      </div>
    </header>
  );
};

export default Header;
