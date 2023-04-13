import { createContext, useContext, useMemo, useState } from "react";

import { THEME_KIND } from "@src/@constants";
import { ThemeKind } from "@src/@types/utils";

interface ThemeContextType {
  theme: ThemeKind;
  setTheme: (theme: ThemeKind) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: THEME_KIND.LIGHT,
  setTheme: () => {},
});

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<ThemeKind>(THEME_KIND.LIGHT);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
