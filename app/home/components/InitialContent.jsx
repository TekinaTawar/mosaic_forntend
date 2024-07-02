import { useHandleFileChange } from "app/hooks/handleFileChange";
import { VscGoToFile, VscNewFile, VscNotebook } from "react-icons/vsc";

const InitialContent = () => {
  const handleFileChange = useHandleFileChange();

  return (
    <div className="intitalContent">
      <section className="heading">
        <h1>Mosaic</h1>
        <span>By VISTA</span>
      </section>
      <section className="start">
        <h2>Start</h2>
        <ul>
          <li>
            <VscGoToFile className="startIcons" />
            <label htmlFor="upload-file">Open Project</label>
            <input
              type="file"
              accept=".dxf"
              id="upload-file"
              onChange={handleFileChange}
            />
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
          Mosaic is a software that takes in patterns as .dfx file for a cloth
          design and arranges it on a sheet while optimizing it’s usage. This is
          a subsidiary of VistaDesign.
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
    </div>
  );
};
export default InitialContent;
