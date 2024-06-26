"use client";
import { useAtomValue } from "jotai";
import { dxfFileStatusAtom } from "@/lib/atoms";

import InitialContent from "./components/InitialContent";
import FileLoadingSection from "./components/FileLoadingSection";
import PiecesPanel from "./components/PiecesPanel";

const HomePage = () => {
  const dxfFileStatus = useAtomValue(dxfFileStatusAtom);

  if (dxfFileStatus === "no-file") {
    return <InitialContent />;
  } else if (dxfFileStatus === "success") {
    return <PiecesPanel />;
  } else {
    return <FileLoadingSection loadingMessage={dxfFileStatus}/>;
  }
};

export default HomePage;
