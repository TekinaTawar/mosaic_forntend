import Image from "next/image";
import logo from "../public/logo.svg";
import {
  MdOutlineHome,
  MdOutlineLayers,
  MdHistory,
  MdOutlineSettings,
  MdOutlineInfo,
  MdAdd,
} from "react-icons/md";
import OptionGroup from "./components/OptionGroup";

const HomePage = () => {
  return (
    <>
      <header>
        <div className="logo-container">
          <Image className="logo" src={logo} alt="Logo" />
          <h1 className="mosaic">
            MOSAIC<span> By Vista</span>
          </h1>
        </div>
        <p className="project-title">untitled.mosaic</p>
      </header>
      <aside className="sidebar">
        <ul className="tab-list">
          <li className="current">
            <MdOutlineHome className="icon" />
            <span>Home</span>
          </li>
          <li>
            <MdOutlineLayers className="icon" />
            <span>Arrangment</span>
          </li>
          <li>
            <MdHistory className="icon" />
            <span>History</span>
          </li>
          <li>
            <MdOutlineSettings className="icon" />
            <span>Settings</span>
          </li>
        </ul>
        <ul className="tab-list">
          <li>
            <MdOutlineInfo className="icon" />
            <span>About</span>
          </li>
        </ul>
      </aside>
      <section className="option-section">
        <section className="option-heading">
          <h2>HOME</h2>
          <button>Arrange Design</button>
        </section>
        <ul className="option-group-list">
          <OptionGroup groupHead={"DESIGN FILES"}>
            <li className="add-design">
              <input type="file" accept=".dxf" multiple id="upload-file" />
              <label htmlFor="upload-file">
                <MdAdd className="add-icon" />
                Add/Import Design File
              </label>
            </li>
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
              <label htmlFor="arrange-by" className="arrange-by-label">Arrange By</label>
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
        <button>Arrange Design</button>
      </section>
      <section className="content-section"></section>
    </>
  );
};

export default HomePage;
