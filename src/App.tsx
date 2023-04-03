import { ThemeProvider } from "styled-components";
import GlobalStyle from "src/@styles/GlobalStyle";
import { LIGHT_MODE_THEME } from "src/@styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={LIGHT_MODE_THEME}>
        <GlobalStyle />
        <div>hello world!</div>
      </ThemeProvider>
    </>
  );
}

export default App;
