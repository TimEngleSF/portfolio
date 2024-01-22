import "../../global.css";

const ResumeButton = () => {
  return (
    <div className="mt-8 flex justify-center">
      <a
        href="/Tim_Engle_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-button mx-auto mt-4 inline-block rounded-md bg-termScreen px-8 py-4 font-scp text-xl font-semibold  text-termTop drop-shadow-md"
      >
        Resume
      </a>
    </div>
  );
};

export default ResumeButton;
