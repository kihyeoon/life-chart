import { routers } from "@src/Router";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Toggle from "@src/components/Toggle/Toggle";

import useModeTheme from "@src/hooks/useModeTheme";

import { THEME_KIND } from "@src/@constants";
import GlobalStyle from "@src/@styles/GlobalStyle";
import { DARK_MODE_THEME, LIGHT_MODE_THEME } from "@src/@styles/theme";

function App() {
  const { theme } = useModeTheme();

  return (
    <ThemeProvider
      theme={theme === THEME_KIND.LIGHT ? LIGHT_MODE_THEME : DARK_MODE_THEME}
    >
      <GlobalStyle />
      <Toggle menuArr={["🌝", "🌚"]} />
      <RouterProvider router={routers} />
    </ThemeProvider>
  );
}

export default App;
