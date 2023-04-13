import { useThemeContext } from "@src/context/ThemeContext";
import { useEffect } from "react";

import useWebStorage from "@src/hooks/useWebStorage";

import { STORAGE_KIND, THEME_KIND } from "@src/@constants";
import { ThemeKind } from "@src/@types/utils";

interface UseModeThemeResult {
  theme: ThemeKind;
  handleToggleTheme: (index: number) => void;
}

function useModeTheme(): UseModeThemeResult {
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

  const handleToggleTheme = (index: number) => {
    const nextTheme = index === 0 ? THEME_KIND.LIGHT : THEME_KIND.DARK;
    handleChangeTheme(nextTheme);
  };

  useEffect(() => {
    const storedTheme = getStoredTheme();

    if (storedTheme === THEME_KIND.DARK || storedTheme === THEME_KIND.LIGHT) {
      handleChangeTheme(storedTheme);

      return;
    }

    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      handleChangeTheme(THEME_KIND.LIGHT);

      return;
    }

    handleChangeTheme(THEME_KIND.DARK);
  }, []);

  return { theme, handleToggleTheme };
}

export default useModeTheme;
