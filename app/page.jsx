import Image from "next/image";
import logo from "../public/logo.svg";
import {
  MdOutlineHome,
  MdOutlineLayers,
  MdHistory,
  MdOutlineSettings,
  MdOutlineInfo,
  MdOutlineKeyboardArrowDown,
  MdKeyboardArrowRight,
} from "react-icons/md";

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
          <li>
            <h3>
              <MdOutlineKeyboardArrowDown className="arrow" />
              DESIGN FILES
            </h3>
            <section className="option-group"></section>
          </li>
          <li>
            <h3>
              <MdOutlineKeyboardArrowDown className="arrow" />
              FABRIC ROLL
            </h3>
            <section className="option-group"></section>
          </li>
          <li>
            <h3>
              <MdOutlineKeyboardArrowDown className="arrow" />
              ARRANGEMENT SETTINGS
            </h3>
            <section className="option-group"></section>
          </li>
        </ul>
        <button>Arrange Design</button>
      </section>
      <section className="content-section"></section>
    </>
  );
};

export default HomePage;
