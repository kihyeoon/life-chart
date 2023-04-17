import { ReactNode } from "react";

import { STORAGE_KIND, THEME_KIND } from "@src/@constants";

export type PropsWithChildren<P = unknown> = P & {
  children: ReactNode;
};

export type FunctionChildren = (...args: any) => ReactNode;

export type ThemeKind = keyof typeof THEME_KIND;

export type StorageKind = keyof typeof STORAGE_KIND;
