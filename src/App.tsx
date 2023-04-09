import { routers } from "@src/Router";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "@src/@styles/GlobalStyle";
import { LIGHT_MODE_THEME } from "@src/@styles/theme";

function App() {
  return (
    <ThemeProvider theme={LIGHT_MODE_THEME}>
      <GlobalStyle />
      <RouterProvider router={routers} />
    </ThemeProvider>
  );
}

export default App;
