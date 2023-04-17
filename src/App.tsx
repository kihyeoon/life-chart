import { routers } from "@src/Router";
import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Chat from "@src/components/Chat/Chat";
import ChatButton from "@src/components/Chat/ChatButton";
import ThemeToggle from "@src/components/Toggle/ThemeToggle";

import useModeTheme from "@src/hooks/useModeTheme";

import { THEME_KIND } from "@src/@constants";
import GlobalStyle from "@src/@styles/GlobalStyle";
import { DARK_MODE_THEME, LIGHT_MODE_THEME } from "@src/@styles/theme";

function App() {
  const { theme } = useModeTheme();
  const [isChatVisible, setIsChatVisible] = useState(false);

  const toggleChatVisibility = () => {
    setIsChatVisible(!isChatVisible);
  };

  return (
    <ThemeProvider
      theme={theme === THEME_KIND.LIGHT ? LIGHT_MODE_THEME : DARK_MODE_THEME}
    >
      <GlobalStyle />
      <ThemeToggle menuArr={["🌝", "🌚"]} />
      <RouterProvider router={routers} />
      {isChatVisible && <Chat onClose={toggleChatVisibility} />}
      <ChatButton onClick={toggleChatVisibility} />
    </ThemeProvider>
  );
}

export default App;
