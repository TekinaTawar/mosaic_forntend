import DxfParser from "dxf-parser";
import { useSetAtom } from "jotai";
import {
  fullDxfSvgDataAtom,
  dxfFileStatusAtom,
  dxfJsonParsedAtom,
  dxfFileNameAtom,
} from "@/lib/atoms";
import { calculateArea, calculatePerimeter } from "utils/polygonUtil";

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

    const perimeter = calculatePerimeter(vertices);
    const area = calculateArea(vertices);

    if (vertices.length > 0) {
      parsedBlocks.push({
        pieceName: blockName,
        vertices: vertices,
        demand: 1,
        perimeter: perimeter,
        area: area,
      });
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
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/dxf-to-svg/`,
      {
        method: "POST",
        //send header of content type bienge text/plain
        headers: {
          "Content-Type": "text/plain",
        },
        body: dxfText,
      }
    );
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

export const useHandleFileChange = () => {
  const setdxfFileStatus = useSetAtom(dxfFileStatusAtom);
  const setFullDxfSvgData = useSetAtom(fullDxfSvgDataAtom);
  const setDxfJsonParsed = useSetAtom(dxfJsonParsedAtom);
  const setDxfFileName = useSetAtom(dxfFileNameAtom);

  // Return a function that handles the file change event
  return async (e) => {
    const dxfFile = e.target.files[0];
    setdxfFileStatus(`Reading & Processing Raw dxf file ${dxfFile.name}...`);

    if (dxfFile) {
      const reader = new FileReader();
      reader.readAsText(dxfFile);

      reader.onload = async (e) => {
        const dxfText = e.target.result;
        await Promise.all([
          (async () => {
            const svg = await dxfToSvg(dxfText);
            setFullDxfSvgData(svg);
          })(),
          (async () => {
            const dxfJsonRaw = dxfTextToJson(dxfText);
            const parsedDxfJson = parseDxfJson(dxfJsonRaw);
            console.log("parsedDxfJson");
            console.log(parsedDxfJson);
            setDxfJsonParsed(parsedDxfJson);
          })(),
        ]);
        setDxfFileName(dxfFile.name);
        setdxfFileStatus(`success`);
      };
    }
  };
};
