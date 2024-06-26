"use client";

import { Provider } from "jotai";

export const _Provider = ({ children }) => {
  return <Provider>{children}</Provider>;
};
