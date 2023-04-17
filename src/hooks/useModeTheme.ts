import { useThemeContext } from "@src/context/ThemeContext";
import { useEffect } from "react";

import useWebStorage from "@src/hooks/useWebStorage";

import { STORAGE_KIND, THEME_KIND } from "@src/@constants";
import { ThemeKind } from "@src/@types/utils";

function useModeTheme() {
  const { theme, setTheme } = useThemeContext();

  const { getItem: getStoredTheme, setItem: setStoredTheme } =
    useWebStorage<ThemeKind>({
      key: "theme",
      kind: STORAGE_KIND.LOCAL,
    });

  const handleChangeTheme = (nextTheme: ThemeKind) => {
    setStoredTheme(nextTheme);
    setTheme(nextTheme);
  };

  useEffect(() => {
    const storedTheme = getStoredTheme();

    if (storedTheme === THEME_KIND.DARK || storedTheme === THEME_KIND.LIGHT) {
      handleChangeTheme(storedTheme);
      return;
    }

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      handleChangeTheme(THEME_KIND.DARK);
    }
  }, []);

  return { theme, handleChangeTheme };
}

export default useModeTheme;
