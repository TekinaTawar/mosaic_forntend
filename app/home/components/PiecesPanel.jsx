"use client";

import S from "./PiecesPanel.module.scss";
import { FaSignHanging } from "react-icons/fa6";
import area from "@/public/icons/area.svg";
import rotateClockwise from "@/public/icons/rotateClockwise.svg";
import Image from "next/image";
import { useState } from "react";
import { dxfFileAtom } from "@/lib/atoms";
import { useAtomValue } from "jotai";

const PiecesPanel = () => {
  const [boundriesOrFull, setBoundriesOrFull] = useState("Full Design");
  const _dxfFileAtom = useAtomValue(dxfFileAtom);

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
          <span>view</span>
          <label htmlFor="">Grid</label>
          <label htmlFor="">List</label>
        </div>
      </section>
      {boundriesOrFull === "Boundries Only" ? (
        <section className={S.pieceBody}>
          <section className={S.piece}>
            <section className={S.pieceImage}></section>
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
                <input type="number" id="count" defaultValue={1} min={1} />
              </section>
              <section className={S.perimeterSection}>
                <span>
                  <FaSignHanging className={S.perimeterIcon} />
                  Perimeter
                </span>
                <span>4 ft</span>
              </section>
              <section className={S.areaSection}>
                <span>
                  <Image src={area} alt="Area" className={S.areaIcon} />
                  Area
                </span>
                <span>4 ft</span>
              </section>
            </section>
          </section>
        </section>
      ) : (
        <section className={S.fullDesign}>
          <div dangerouslySetInnerHTML={{ __html: _dxfFileAtom }} className={S.designSvg}/>
        </section>
      )}
    </div>
  );
};
export default PiecesPanel;
