const HeaderLink = ({ headerText, headerLink }) => {
  return (
    <li className="border-b-2 text-2xl font-bold duration-300 hover:border-black">
      <a href={headerLink}>{headerText}</a>
    </li>
  );
};

export default HeaderLink;
