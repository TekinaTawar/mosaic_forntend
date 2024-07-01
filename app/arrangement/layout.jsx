"use client";
import { useAtomValue } from "jotai";
import { solutionJsonAtom } from "@/lib/atoms";
import GaugeComponent from "react-gauge-component";
import OptionGroup from "../components/OptionGroup";

const Layout = ({ children }) => {
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
        </section>
        <ul className="option-group-list">
          <OptionGroup groupHead={"SOLUTION DETAILS"}>
            <label htmlFor="">Solution Efficiency</label>
            <GaugeComponent
              type="semicircle"
              arc={{
                colorArray: ["#FF2121", "#00FF15"],
                padding: 0.02,
                subArcs: [
                  { limit: 40 },
                  { limit: 60 },
                  { limit: 70 },
                  {},
                  {},
                  {},
                  {},
                ],
              }}
              pointer={{ type: "blob", animationDelay: 0 }}
              value={`${
                solutionJsonObj
                  ? (solutionJsonObj.Solution.Usage * 100).toFixed(1)
                  : "00.0"
              }`}
            />
            <label htmlFor="">No of Tries:  </label>
            <span>
              {solutionJsonObj ? solutionJsonObj.Solution.Tries : "0"} times
            </span>
          </OptionGroup>
        </ul>
      </section>
      <section className="content-section">{children}</section>
    </>
  );
};
export default Layout;
