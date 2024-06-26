"use client";
import DxfParser from "dxf-parser";
import { useSetAtom } from "jotai";
import { dxfFileAtom, dxfFileStatusAtom } from "@/lib/atoms";

import { MdAdd } from "react-icons/md";

const AddDesign = () => {
  const setdxfFileStatus = useSetAtom(dxfFileStatusAtom);
  const setdxfFile = useSetAtom(dxfFileAtom);

  const dxfTextToJson = (dxfText) => {
    const parser = new DxfParser();
    const dxfJson = parser.parseSync(dxfText);
    return dxfJson;
  };

  const dxfToSvg = async (dxfText) => {
    try {
      const response = await fetch("http://localhost:5000/dxf-to-svg/", {
        method: "POST",
        //send header of content type bienge text/plain
        headers: {
          "Content-Type": "text/plain",
        },
        body: dxfText,
      });
      if (response.ok) {
        // const jsonResponse = await response.json();
        // console.log("Success:", jsonResponse);
        const svg = await response.text();
        
        return svg;
      } else {
        console.error("HTTP error:", response.status);
      }
    } catch (err) {
      console.error(err.stack);
    }
  };

  const handleFileChange = async (e) => {
    const dxfFile = e.target.files[0];
    setdxfFileStatus(`1/5 Reading Raw dxf file ${dxfFile.name}...`);

    if (dxfFile) {
      const reader = new FileReader();
      reader.readAsText(dxfFile);

      reader.onload = async (e) => {
        const dxfText = e.target.result;
        const dxfJson = dxfTextToJson(dxfText);
        // wait 10 second before setting setdxfFileStatus
        // new Promise((resolve) =>
        //   setTimeout(() => {
        //     setdxfFileStatus(`2/5 parsed raw dxf file ${dxfFile.name}...`);
        //     resolve();
        //   }, 4000)
        // );
        const svg = await dxfToSvg(dxfText);
        console.log(svg);
        setdxfFile(svg);
        setdxfFileStatus(`success`);
      };
    }
  };

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
