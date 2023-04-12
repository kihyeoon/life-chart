import { routers } from "@src/Router";
import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Toggle from "@src/components/Toggle/Toggle";

import GlobalStyle from "@src/@styles/GlobalStyle";
import { DARK_MODE_THEME, LIGHT_MODE_THEME } from "@src/@styles/theme";

function App() {
  const [theme, setTheme] = useState(LIGHT_MODE_THEME);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Toggle
        menuArr={["🌝", "🌚"]}
        currentIdx={0}
        onClick={(index) =>
          setTheme(index === 0 ? LIGHT_MODE_THEME : DARK_MODE_THEME)
        }
      />
      <RouterProvider router={routers} />
    </ThemeProvider>
  );
}

export default App;
