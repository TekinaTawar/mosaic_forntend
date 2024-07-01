"use client";

import { useHandleFileChange } from "../hooks/handleFileChange";
import { MdAdd } from "react-icons/md";

const AddDesign = () => {
  const handleFileChange = useHandleFileChange();

  return (
    <li className="add-design">
      <input
        type="file"
        accept=".dxf"
        id="upload-file"
        onChange={handleFileChange}
      />
      <label htmlFor="upload-file">
        <MdAdd className="add-icon" />
        Add/Import Design File
      </label>
    </li>
  );
};
export default AddDesign;
