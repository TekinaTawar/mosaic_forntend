import { atom } from "jotai";
import { atomWithImmer } from "jotai-immer";

export const dxfFileStatusAtom = atom("no-file"); // no-file, messages, success, error
export const dxfFileNameAtom = atom(null);
export const dxfFileMultiplierAtom = atomWithImmer(1);
export const fullDxfSvgDataAtom = atom(null);
export const dxfJsonParsedAtom = atomWithImmer(null);
export const fabricRollWidthAtom = atom({ width: 1.5, unit: "m" });


export const solutionSvgAtom = atom(null);
export const solutionJsonAtom = atom(null);