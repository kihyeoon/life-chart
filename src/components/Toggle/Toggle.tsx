import { MouseEventHandler } from "react";

import useModeTheme from "@src/hooks/useModeTheme";

import * as Style from "./Toggle.style";

interface Props {
  menuArr: string[];
}

// currentIdx ==> 지금 선택한 탭의 index
function Toggle({ menuArr }: Props) {
  const { theme, handleToggleTheme } = useModeTheme();

  const currentTab = theme === "LIGHT" ? 0 : 1;

  const highlight = {
    left: currentTab * 56,
    width: 56,
  };

  const handleBtnClick: MouseEventHandler<HTMLLIElement> = (e) => {
    const { id } = e.currentTarget;
    const index = Number(id);
    handleToggleTheme(index);
  };

  return (
    <Style.TabContainer>
      <Style.Highlight left={highlight.left} width={highlight.width} />
      <Style.TabMenu>
        {menuArr.map((name, index) => (
          <li
            key={`${index.toString()}-${name}`}
            id={`${index}`}
            className={currentTab === index ? "focused" : ""}
            onClick={handleBtnClick}
            role="none"
          >
            {name}
          </li>
        ))}
      </Style.TabMenu>
    </Style.TabContainer>
  );
}

export default Toggle;
