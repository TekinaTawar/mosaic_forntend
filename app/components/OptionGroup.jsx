import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const OptionGroup = ({groupHead, children, closed}) => {
  return (
    <li className="option-group">
      <input
        type="checkbox"
        id={groupHead}
        defaultChecked={!closed}
        className="visibility-checkbox"
      />
      <label htmlFor={groupHead} className="option-head">
        <MdOutlineKeyboardArrowDown className="arrow" />
        {groupHead}
      </label>
      <ul className="options">
        {children}
      </ul>
    </li>
  );
};
export default OptionGroup;
