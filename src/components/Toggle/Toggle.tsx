import { MouseEventHandler, useRef, useState } from "react";

import * as Style from "./Toggle.style";

interface Props {
  menuArr: string[];
  currentIdx: number;
  onClick: (idx: number) => void;
}

// currentIdx ==> 지금 선택한 탭의 index
function Toggle({ menuArr, currentIdx, onClick }: Props) {
  const menuEl = useRef<HTMLUListElement>(null);
  const [currentTab, setCurrentTab] = useState(currentIdx);

  const [highlight, setHighlight] = useState({
    left: currentTab * 56,
    width: 56,
  });

  const handleBtnClick: MouseEventHandler<HTMLLIElement> = (e) => {
    const { id } = e.target as HTMLLIElement;
    const index = Number(id);
    setCurrentTab(index);

    // 선택된 Tab Menu에 따라 하이라이트가 이동
    const left = (menuEl.current?.children[index] as HTMLElement).offsetLeft;
    const width = (menuEl.current?.children[index] as HTMLElement).offsetWidth;

    setHighlight({
      left,
      width,
    });

    onClick(index);
  };

  return (
    <Style.TabContainer>
      <Style.Highlight left={highlight.left} width={highlight.width} />
      <Style.TabMenu ref={menuEl}>
        {menuArr.map((name, idx) => (
          <li
            key={`${idx.toString()}-${name}`}
            id={`${idx}`}
            className={currentTab === idx ? "focused" : ""}
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
