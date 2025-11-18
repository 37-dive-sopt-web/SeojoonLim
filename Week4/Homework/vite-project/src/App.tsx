import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import { Global } from "@emotion/react";
import { globalStyle } from "./styles/globalStyle";
import { resetStyle } from "./styles/resetStyle";
import { RouterProvider } from "react-router/dom";
import MainRouter from "./routes/MainRouter";


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={resetStyle} />
        <Global styles={globalStyle} />
        <RouterProvider router={MainRouter} />
      </ThemeProvider>
    </>
  );
}

export default App;
