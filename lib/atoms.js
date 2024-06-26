import { atom } from 'jotai'

export const dxfFileStatusAtom = atom('no-file') // no-file, messages, success, error 
export const dxfFileAtom = atom(null)