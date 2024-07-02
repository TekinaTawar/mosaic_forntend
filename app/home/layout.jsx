"use client";

import AddDesign from "../components/AddDesign";
import OptionGroup from "../components/OptionGroup";
import PrimaryButton from "../components/PrimaryButton";
// import setAtomvlaue
import { useSetAtom, useAtomValue, useAtom } from "jotai";
import {
  dxfFileMultiplierAtom,
  dxfFileNameAtom,
  fabricRollWidthAtom,
} from "@/lib/atoms";

const Layout = ({ children }) => {
  const setFabricRollWidth = useSetAtom(fabricRollWidthAtom);
  const dxfFileName = useAtomValue(dxfFileNameAtom);
  const [dxfFileMultiplier, setDxfFileMultiplier] = useAtom(
    dxfFileMultiplierAtom
  );

  return (
    <>
      <section className="option-section">
        <section className="option-heading">
          <h2>HOME</h2>
        </section>
        <ul className="option-group-list">
          <OptionGroup groupHead={"DESIGN FILES"}>
            <AddDesign />
            {dxfFileName !== null && (
              <div className="fileInfo">
                <p>{dxfFileName}</p>
                <input
                  type="number"
                  id="count"
                  min={1}
                  max={6}
                  value={dxfFileMultiplier}
                  onChange={(e) => {
                    const newValue = Number(e.target.value);
                    console.log(newValue)
                    setDxfFileMultiplier((draft) => {
                      draft = newValue;
                      return draft;
                    });
                  }}
                />
              </div>
            )}
          </OptionGroup>
          <OptionGroup groupHead={"FABRIC ROLL"}>
            <div className="label-input-grid">
              <label htmlFor="width"> width</label>
              <div className="width-inputs">
                <input
                  type="number"
                  defaultValue={1.5}
                  onChange={(e) => {
                    setFabricRollWidth({ width: e.target.value, unit: "m" });
                  }}
                />
                <input
                  type="radio"
                  id="width-m"
                  name="width-unit"
                  value="m"
                  defaultChecked
                />
                <label htmlFor="width-m">m</label>
                <input
                  type="radio"
                  id="width-in"
                  name="width-unit"
                  value="in"
                />
                <label htmlFor="width-in">in</label>
              </div>

              <label htmlFor="fabric-pattern">Fabric Pattern</label>
              <div className="fabric-pattern-inputs">
                <input
                  type="checkbox"
                  id="fabric-pattern-enable"
                  className="fabric-pattern-enable"
                />
                <label
                  htmlFor="fabric-pattern-enable"
                  className="fabric-pattern-enable-label"
                >
                  Plane
                </label>
              </div>
              <label htmlFor="height">tolerance</label>
              <div className="height-inputs">
                <input
                  type="checkbox"
                  id="height-enable"
                  className="height-enable"
                />
                <label
                  htmlFor="height-enable"
                  className="height-enable-label"
                ></label>
                <input type="number" />
                <input
                  type="radio"
                  id="height-m"
                  name="height-unit"
                  value="m"
                  defaultChecked
                />
                <label htmlFor="height-m">m</label>
                <input
                  type="radio"
                  id="height-in"
                  name="height-unit"
                  value="in"
                />
                <label htmlFor="height-in">in</label>
              </div>
            </div>
          </OptionGroup>
          <OptionGroup groupHead={"ARRANGEMENT SETTINGS"} closed={true}>
            <div className="label-input-grid">
              <label htmlFor="arrange-by" className="arrange-by-label">
                Arrange By
              </label>
              <select name="arrange-by" id="arrange-by">
                <option value="width">Width</option>
                <option value="height">Height</option>
                <option value="area">Area</option>
              </select>
              <label htmlFor="arrange-direction">Arrange Direction</label>
              <select name="arrange-direction" id="arrange-direction">
                <option value="horizontal">Horizontal</option>
                <option value="vertical">Vertical</option>
              </select>
              <label htmlFor="fabric-orientation">Fabric Orientation</label>
              <select name="fabric-orientation" id="fabric-orientation">
                <option value="0">0</option>
                <option value="90">90</option>
                <option value="180">180</option>
                <option value="270">270</option>
              </select>
            </div>
          </OptionGroup>
        </ul>
        <PrimaryButton />
      </section>
      <section className="content-section">{children}</section>
    </>
  );
};
export default Layout;
