import Image from "next/image";
import play from "../../public/icons/play.svg";
import S from "./PrimaryButton.module.scss";

const PrimaryButton = () => {
    return <button className={[S.primaryButton, S.disabled].join(' ')}>
        <div className={S.imageContainer}>
            <Image src={play} alt="Play" className={S.playImage} />
        </div>
        <span className={S.buttonText}>
            Arrange Design
        </span>
  </button>;
};
export default PrimaryButton;
