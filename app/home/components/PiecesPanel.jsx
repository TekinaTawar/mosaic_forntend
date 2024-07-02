"use client";

import S from "./PiecesPanel.module.scss";
import { FaSignHanging } from "react-icons/fa6";
import area from "@/public/icons/area.svg";
import rotateClockwise from "@/public/icons/rotateClockwise.svg";
import Image from "next/image";
import { useState } from "react";
import { dxfJsonParsedAtom, fullDxfSvgDataAtom } from "@/lib/atoms";
import { useAtom, useAtomValue } from "jotai";
import { createSVG } from "utils/svgGenerator";

const Piece = ({ pieceJson, setDJP }) => {
  console.log("pieceJson");
  console.log(pieceJson);
  return (
    <section className={S.piece}>
      <section className={S.pieceImage}>
        {createSVG(pieceJson.vertices)}
      </section>
      <section className={S.pieceDetails}>
        <button>
          <Image
            src={rotateClockwise}
            alt="Rotate Clockwise"
            className={S.rotateClockwise}
          />
          Change Orientation
        </button>
        <section className={S.countSection}>
          <label htmlFor="count">
            <span>#</span>Count
          </label>
          <input
            type="number"
            id="count"
            min={1}
            value={pieceJson.demand}
            onChange={(e) => {
              const newValue = Number(e.target.value);
              setDJP((draft) => {
                const index = draft.findIndex(
                  (item) => item.pieceName === pieceJson.pieceName
                );
                console.log(index);
                if (index !== -1) {
                  console.log("running");
                  draft[index].demand = newValue;
                }
              });
            }}
          />
        </section>
        <section className={S.perimeterSection}>
          <span>
            <FaSignHanging className={S.perimeterIcon} />
            Perimeter
          </span>
          <span>~{(pieceJson.perimeter / 10).toFixed(0)}cm</span>
        </section>
        <section className={S.areaSection}>
          <span>
            <Image src={area} alt="Area" className={S.areaIcon} />
            Area
          </span>
          <span>
            ~{(pieceJson.area / 100).toFixed(0)} cm<sup>2</sup>
          </span>
        </section>
      </section>
    </section>
  );
};

const PiecesPanel = () => {
  const [boundriesOrFull, setBoundriesOrFull] = useState("Boundries Only");
  const fullDxfSvgData = useAtomValue(fullDxfSvgDataAtom);
  const [dxfJsonParsed, setDxfJsonParsed] = useAtom(dxfJsonParsedAtom);

  console.log("dxfJsonParsed");
  console.log(dxfJsonParsed);

  const toggleBoundriesOrFull = () => {
    if (boundriesOrFull === "Boundries Only") {
      setBoundriesOrFull("Full Design");
    } else {
      setBoundriesOrFull("Boundries Only");
    }
  };

  return (
    <div className={S.piecesPanel}>
      <section className={S.pieceHeader}>
        <span>Filter</span>
        <div className={S.boundriesOrFull}>
          <label
            htmlFor=""
            className={`${boundriesOrFull === "Boundries Only" && S.enable}`}
            onClick={toggleBoundriesOrFull}
          >
            Boundries Only
          </label>
          <label
            htmlFor=""
            className={`${boundriesOrFull === "Full Design" && S.enable}`}
            onClick={toggleBoundriesOrFull}
          >
            Full Design
          </label>
        </div>
        <div className={S.viewOptions}>
          <span>Sort</span>
          {/* <label htmlFor="">Grid</label>
          <label htmlFor="">List</label> */}
        </div>
      </section>
      {boundriesOrFull === "Boundries Only" ? (
        <section className={S.pieceBody}>
          {dxfJsonParsed.map((pieceJson) => {
            return (
              <Piece
                key={pieceJson.pieceName}
                pieceJson={pieceJson}
                setDJP={setDxfJsonParsed}
              />
            );
          })}
        </section>
      ) : (
        <section className={S.fullDesign}>
          <div
            dangerouslySetInnerHTML={{ __html: fullDxfSvgData }}
            className={S.designSvg}
          />
        </section>
      )}
    </div>
  );
};
export default PiecesPanel;
