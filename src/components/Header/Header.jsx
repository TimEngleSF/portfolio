import HeaderLink from "./HeaderLink";
// import TerminalContainer from "../Terminal/TerminalContainer";
// import ResumeButton from "./ResumeButton";

const Header = () => {
  return (
    <header className="px-6">
      <div className=" flex justify-between">
        <h1 className="font-scp text-2xl font-semibold">Tim Engle</h1>
        <nav className="font-scp">
          <ul className="flex gap-4">
            <HeaderLink linkText="Projects" url="projects" isPageLink={true} />
            <HeaderLink
              linkText="Resume"
              url="/Tim_Engle_Resume.pdf"
              isPageLink={false}
            />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
