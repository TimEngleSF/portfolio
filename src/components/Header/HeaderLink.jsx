import { Link } from "react-scroll";
const HeaderLink = ({ linkText, url, isPageLink }) => {
  const linkEl = isPageLink ? (
    <Link to={url} smooth duration={500}>
      {linkText}
    </Link>
  ) : (
    <a href={url} target="_blank">
      {linkText}
    </a>
  );

  return (
    <li className="border-b-2 text-2xl font-bold duration-300 hover:border-black">
      {linkEl}
    </li>
  );
};

export default HeaderLink;
