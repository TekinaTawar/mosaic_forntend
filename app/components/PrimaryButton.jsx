"use client";

import Image from "next/image";
import play from "../../public/icons/play.svg";
import S from "./PrimaryButton.module.scss";
import { useAtomValue, useSetAtom } from "jotai";
import {
  dxfFileNameAtom,
  dxfFileStatusAtom,
  dxfJsonParsedAtom,
  fabricRollWidthAtom,
  solutionSvgAtom,
  solutionJsonAtom,
  dxfFileMultiplierAtom,
} from "@/lib/atoms";
import { useRouter } from "next/navigation";

const PrimaryButton = () => {
  const dxfFileStatus = useAtomValue(dxfFileStatusAtom);
  const dxfJsonParsed = useAtomValue(dxfJsonParsedAtom);
  const fabricRollWidth = useAtomValue(fabricRollWidthAtom);
  const dxfFileName = useAtomValue(dxfFileNameAtom);
  const dxfFileMultiplier = useAtomValue(dxfFileMultiplierAtom);

  const setSolutionSvg = useSetAtom(solutionSvgAtom);
  const setSolutionJson = useSetAtom(solutionJsonAtom);

  const router = useRouter();

  const parseJsonForServer = (dxfFileName, dxfJsonParsed, fabricRollWidth) => {
    console.log("dxfFileMultiplier")
    console.log(dxfFileMultiplier)
    const Items = [];

    dxfJsonParsed.forEach((piece) => {
      console.log("running")
      console.log(piece.demand)
      Items.push({
        Demand: piece.demand * dxfFileMultiplier,
        Shape: {
          Type: "SimplePolygon",
          Data: piece.vertices,
        },
      });
    });

    const serverJson = {
      Name: dxfFileName,
      Items: Items,
      Strip: {
        Height: fabricRollWidth.width * 1000,
      },
    };

    return serverJson;
  };

  const ArrangeDesign = async () => {
    const serverJson = parseJsonForServer(
      dxfFileName,
      dxfJsonParsed,
      fabricRollWidth
    );
    console.log(serverJson)
    // send this serverJson to the server and recive a response of a svg and json
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/arrange-parsed-json/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(serverJson),
    });
    const data = await response.json();
    const svgContent = data.svg;
    const jsonContent = data.json;
    setSolutionSvg(svgContent);
		setSolutionJson(jsonContent);
    console.log(svgContent)
    console.log(jsonContent)

    router.push("/arrangement");
  };

  return (
    <button
      className={[
        S.primaryButton,
        dxfFileStatus !== "success" && S.disabled,
      ].join(" ")}
      onClick={ArrangeDesign}
    >
      <div className={S.imageContainer}>
        <Image src={play} alt="Play" className={S.playImage} />
      </div>
      <span className={S.buttonText}>Arrange Design</span>
    </button>
  );
};

export default PrimaryButton;
