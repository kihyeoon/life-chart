import useThemeToggle from "@src/components/Toggle/hooks/useThemeToggle";

import useModeTheme from "@src/hooks/useModeTheme";

import * as Style from "./ThemeToggle.style";

interface Props {
  menuArr: string[];
}

// currentIdx ==> 지금 선택한 탭의 index
function ThemeToggle({ menuArr }: Props) {
  const { theme, handleChangeTheme } = useModeTheme();

  const { currentTab, highlight, handleBtnClick } = useThemeToggle({
    theme,
    handleChangeTheme,
  });

  return (
    <Style.TabContainer>
      <Style.Highlight left={highlight.left} width={highlight.width} />
      <Style.TabMenu>
        {menuArr.map((menu, index) => (
          <li
            key={`${index.toString()}-${menu}`}
            id={`${index}`}
            className={currentTab === index ? "focused" : ""}
            onClick={handleBtnClick}
            role="none"
          >
            {menu}
          </li>
        ))}
      </Style.TabMenu>
    </Style.TabContainer>
  );
}

export default ThemeToggle;
