import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const OptionGroup = ({groupHead, children}) => {
  return (
    <li className="option-group">
      <input
        type="checkbox"
        id={groupHead}
        defaultChecked
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
