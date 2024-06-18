import Image from "next/image";
import logo from "../public/logo.svg";
import {
  MdOutlineHome,
  MdOutlineLayers,
  MdHistory,
  MdOutlineSettings,
  MdOutlineInfo,
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
            <li>Add/Import Design File</li>
          </OptionGroup>
          <OptionGroup groupHead={"FABRIC ROLL"}>
            <li>
              <label htmlFor="width"> width</label>
              <input type="text" />
              <input type="radio" />
            </li>
          </OptionGroup>
          <OptionGroup groupHead={"ARRANGEMENT SETTINGS"}></OptionGroup>
        </ul>
        <button>Arrange Design</button>
      </section>
      <section className="content-section"></section>
    </>
  );
};

export default HomePage;
