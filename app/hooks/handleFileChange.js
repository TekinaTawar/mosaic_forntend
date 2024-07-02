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

  try {
    // check if block has undefined entities
    const hasUndefinedEntities = Object.values(dxfJsonRaw.blocks).some(
      (blockData) => blockData.entities === undefined
    );

    if (!hasUndefinedEntities) {
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
    } else {
      let pieceCounter = 1;
      let currentPieceVertices = [];
      let previousVertex = null;

      dxfJsonRaw.entities.forEach((entity, index) => {
        if (entity.type === "LINE") {
          // If it's the first entity or if the current entity's first vertex matches the previous entity's second vertex
          if (
            !previousVertex ||
            (previousVertex.x === entity.vertices[0].x &&
              previousVertex.y === entity.vertices[0].y)
          ) {
            // Add the first vertex if it's the start of a new piece
            if (!previousVertex) {
              currentPieceVertices.push([
                entity.vertices[0].x * 10,
                entity.vertices[0].y * 10,
              ]);
            }
            // Always add the second vertex
            currentPieceVertices.push([
              entity.vertices[1].x * 10,
              entity.vertices[1].y * 10,
            ]);
          } else {
            // Calculate perimeter and area for the current piece
            const perimeter = calculatePerimeter(currentPieceVertices);
            const area = calculateArea(currentPieceVertices);

            // Push the current piece to parsedBlocks
            parsedBlocks.push({
              pieceName: `Piece${pieceCounter.toString().padStart(2, "0")}`,
              vertices: currentPieceVertices,
              demand: 1,
              perimeter: perimeter,
              area: area,
            });

            // Reset for the next piece
            pieceCounter++;
            currentPieceVertices = [
              [entity.vertices[0].x, entity.vertices[0].y],
              [entity.vertices[1].x, entity.vertices[1].y],
            ];
          }

          // Update previousVertex for the next iteration
          previousVertex = entity.vertices[1];
        }
      });

      // Handle the last piece
      if (currentPieceVertices.length > 0) {
        const perimeter = calculatePerimeter(currentPieceVertices);
        const area = calculateArea(currentPieceVertices);

        parsedBlocks.push({
          pieceName: `Piece${pieceCounter.toString().padStart(2, "0")}`,
          vertices: currentPieceVertices,
          demand: 1,
          perimeter: perimeter,
          area: area,
        });
      }

      dxfJsonRaw.entities.forEach((entity, index) => {
        if (entity.type === "LWPOLYLINE") {
          console.log("this running .ll")
          const vertices = entity.vertices.map((vertex) => [
            vertex.x*10,
            vertex.y*10,
          ]);
          const perimeter = calculatePerimeter(vertices);
          const area = calculateArea(vertices);

          parsedBlocks.push({
            pieceName: entity.handle,
            vertices: vertices,
            demand: 1,
            perimeter: perimeter,
            area: area,
          });
        }
      });
    }
  } catch (error) {
    console.error(error);
  }

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
            console.log("dxfJsonRaw");
            console.log(dxfJsonRaw);
            const parsedDxfJson = parseDxfJson(dxfJsonRaw);
            console.log("parsedDxfJson");
            console.log(parsedDxfJson);
            setDxfJsonParsed(parsedDxfJson);
          })(),
        ]);
        setDxfFileName(dxfFile.name);
        setdxfFileStatus(`success`);
      };
    } else {
    }
  };
};
