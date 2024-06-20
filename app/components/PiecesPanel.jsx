import S from "./PiecesPanel.module.scss";
import { FaSignHanging } from "react-icons/fa6";
import area from "../../public/icons/area.svg";
import rotateClockwise from "../../public/icons/rotateClockwise.svg";
import Image from "next/image";

const PiecesPanel = () => {
  return (
    <div className={S.piecesPanel}>
      <section className={S.pieceHeader}>
        <span>Show Designs</span>
        <div className={S.boundriesOrFull}>
          <label htmlFor="">Boundries Only</label>
          <label htmlFor="">Full Design</label>
        </div>
        <div className={S.viewOptions}>
          <span>view</span>
          <label htmlFor="">Grid</label>
          <label htmlFor="">List</label>
        </div>
      </section>
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
    </div>
  );
};
export default PiecesPanel;
