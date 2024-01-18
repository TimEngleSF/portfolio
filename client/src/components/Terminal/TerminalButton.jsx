import PropTypes from "prop-types";

const TerminalButton = ({ showIcon, icon, color }) => {
  return (
    <div className={`h-4 w-4 rounded-full ${color}`}>{showIcon && icon}</div>
  );
};
export default TerminalButton;

TerminalButton.propTypes = {
  showIcon: PropTypes.bool,
  icon: PropTypes.element,
  color: PropTypes.string,
};
