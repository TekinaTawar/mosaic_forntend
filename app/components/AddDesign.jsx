"use client";
import DxfParser from "dxf-parser";
import { MdAdd } from "react-icons/md";

const AddDesign = () => {
  // console.log("this is working");

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const fileText = e.target.result;
        const parser = new DxfParser();
        try {
          const dxf = parser.parseSync(fileText);
          console.log(dxf);
          // Assuming `dxf` is the object you want to send as JSON
          const response = await fetch("http://localhost:5000/dxf-file/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dxf), // Convert the DXF object to a JSON string
          });
          if (response.ok) {
            const jsonResponse = await response.json();
            console.log("Success:", jsonResponse);
          } else {
            console.error("HTTP error:", response.status);
          }
        } catch (err) {
          console.error(err.stack);
        }
      };
      reader.readAsText(file);
    }
  };

  const onClickTest = async () => {
    console.log("Test button clicked 1");

    // send a get request to localhost:5000 and console log the response
    const response = await fetch("http://localhost:5000/post/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ test: "test" }),
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log("Success:", jsonResponse);
    } else {
      console.error("HTTP error:", response.status);
    }
  };

  return (
    <li className="add-design">
      <input
        type="file"
        accept=".dxf"
        multiple
        id="upload-file"
        onChange={handleFileChange}
      />
      <label htmlFor="upload-file">
        <MdAdd className="add-icon" />
        Add/Import Design File
      </label>
      {/* <button onClick={onClickTest}>Test</button> */}
    </li>
  );
};
export default AddDesign;
