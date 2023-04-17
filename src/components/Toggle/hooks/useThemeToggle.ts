import { MouseEventHandler } from "react";

import { THEME_KIND } from "@src/@constants";
import { ThemeKind } from "@src/@types/utils";

interface Props {
  theme: ThemeKind;
  handleChangeTheme: (nextTheme: ThemeKind) => void;
}

function useThemeToggle({ theme, handleChangeTheme }: Props) {
  const currentTab = theme === "LIGHT" ? 0 : 1;

  const highlight = {
    left: currentTab * 56,
    width: 56,
  };

  const handleBtnClick: MouseEventHandler<HTMLLIElement> = (e) => {
    const { id } = e.currentTarget;
    const nextTheme = id === "0" ? THEME_KIND.LIGHT : THEME_KIND.DARK;
    handleChangeTheme(nextTheme);
  };

  return { currentTab, highlight, handleBtnClick };
}

export default useThemeToggle;
