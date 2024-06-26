import { atom } from "jotai";

export const dxfFileStatusAtom = atom("no-file"); // no-file, messages, success, error
export const fullDxfSvgDataAtom = atom(null);
export const dxfJsonParsedAtom = atom(null);
export const fabricRollWidthAtom = atom({ width: 1.5, unit: "m" });
export const dxfFileNameAtom = atom(null);


export const solutionSvgAtom = atom(null);
export const solutionJsonAtom = atom(null);