"use client";
import { useAtomValue } from "jotai";
import { solutionJsonAtom } from "@/lib/atoms";

import OptionGroup from "../components/OptionGroup";

const layout = ({ children }) => {
  const solutionJson = useAtomValue(solutionJsonAtom);
  console.log(solutionJson);
  console.log(typeof solutionJson);
  // parse solutionJson string to json object
  const solutionJsonObj = JSON.parse(solutionJson);
  if (solutionJsonObj) {
    console.log("working");
    console.log(solutionJsonObj.Solution.Usage);
  }
  return (
    <>
      <section className="option-section">
        <section className="option-heading">
          <h2>ARRANGEMENT</h2>
          <ul className="option-group-list"></ul>
        </section>
        <OptionGroup groupHead={"SOLUTION DETAILS"}>
          <div>
            <h2>
              {`${
                solutionJsonObj
                  ? solutionJsonObj.Solution.Usage * 100
                  : "efficiency placeholder"
              }`}{" "}
              <span>%</span>
            </h2>
          </div>
        </OptionGroup>
      </section>
      <section className="content-section">{children}</section>
    </>
  );
};
export default layout;
