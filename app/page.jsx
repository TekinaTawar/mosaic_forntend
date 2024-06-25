import { VscGoToFile, VscNewFile, VscNotebook } from "react-icons/vsc";
import OptionGroup from "./components/OptionGroup";
import PrimaryButton from "./components/PrimaryButton";
import PiecesPanel from "./components/PiecesPanel";
import AddDesign from "./components/AddDesign";

const HomePage = () => {
  return (
    <>
      <section className="option-section">
        <section className="option-heading">
          <h2>HOME</h2>
        </section>
        <ul className="option-group-list">
          <OptionGroup groupHead={"DESIGN FILES"}>
            <AddDesign />
          </OptionGroup>
          <OptionGroup groupHead={"FABRIC ROLL"}>
            <div className="label-input-grid">
              <label htmlFor="width"> width</label>
              <div className="width-inputs">
                <input type="number" />
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
              <label htmlFor="height">height</label>
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
            </div>
          </OptionGroup>
          <OptionGroup groupHead={"ARRANGEMENT SETTINGS"}>
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
      <section className="content-section">
        {/* <div className="intitalContent">
          <section className="heading">
            <h1>Mosaic</h1>
            <span>By Vista</span>
          </section>
          <section className="start">
            <h2>Start</h2>
            <ul>
              <li>
                <VscGoToFile className="startIcons" />
                <label htmlFor="openProject">Open Project</label>
                <input type="file" id="openProject" />
              </li>
              <li>
                <VscNewFile className="startIcons" />
                <label htmlFor="newProject">New Project</label>
                <input type="button" id="newProject" />
              </li>
              <li>
                <VscNotebook className="startIcons" />
                <label htmlFor="openDocs">Open Docs</label>
              </li>
            </ul>
          </section>
          <section className="about">
            <h2>About</h2>
            <p>
              Mosaic is a software that takes in patterns as .dfx file for a
              cloth design and arranges it on a sheet while optimizing it’s
              usage. This is a subsidiary of VistaDesign.
            </p>
          </section>
          <section className="recent">
            <h2>Recent</h2>
            <ul>
              <li>
                <span>file name</span>
                <span>file location</span>
              </li>
            </ul>
          </section>
        </div> */}
        <PiecesPanel />
      </section>
    </>
  );
};

export default HomePage;
