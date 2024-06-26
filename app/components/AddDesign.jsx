"use client";
import DxfParser from "dxf-parser";
import { useSetAtom } from "jotai";
import {
  fullDxfSvgDataAtom,
  dxfFileStatusAtom,
  dxfJsonParsedAtom,
  dxfFileNameAtom,
} from "@/lib/atoms";

import { MdAdd } from "react-icons/md";

const AddDesign = () => {
  const setdxfFileStatus = useSetAtom(dxfFileStatusAtom);
  const setFullDxfSvgData = useSetAtom(fullDxfSvgDataAtom);
  const setDxfJsonParsed = useSetAtom(dxfJsonParsedAtom);
  const setDxfFileName = useSetAtom(dxfFileNameAtom)

  const parseDxfJson = (dxfJsonRaw) => {
    const parsedBlocks = [];

    Object.entries(dxfJsonRaw.blocks).forEach(([blockName, blockData]) => {
      console.log(blockName, blockData);
      const vertices = [];

      blockData.entities.forEach((entity) => {
        if (entity.type === "POLYLINE") {
          console.log(entity);
          const layer1Vertices = entity.vertices
            .filter((vertex) => vertex.layer === "1")
            .map((vertex) => [vertex.x, vertex.y]);

          vertices.push(...layer1Vertices);
        }
      });

      if (vertices.length > 0) {
        parsedBlocks.push({ pieceName: blockName, vertices: vertices, demand: 1 });
      }
    });

    return parsedBlocks;
  };

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
    setdxfFileStatus(`Reading & Processing Raw dxf file ${dxfFile.name}...`);
    

    if (dxfFile) {
      const reader = new FileReader();
      reader.readAsText(dxfFile);

      reader.onload = async (e) => {
        const dxfText = e.target.result;
        await Promise.all([
          (async () => {
            // this gets svg data from server and sets it.
            const svg = await dxfToSvg(dxfText);
            setFullDxfSvgData(svg);
          })(),
          (async () => {
            const dxfJsonRaw = dxfTextToJson(dxfText);
            const parsedDxfJson = parseDxfJson(dxfJsonRaw);
            console.log("parsedDxfJson")
            console.log(parsedDxfJson)
            setDxfJsonParsed(parsedDxfJson);
          })(),
        ]);
        setDxfFileName(dxfFile.name)
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
