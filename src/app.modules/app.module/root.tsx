import { RecoilRoot } from "recoil";
import { GLOBAL_STYLES, MANTINE_DEFAULT_PROPS, MANTINE_THEME } from "./app.configs/app.config";
import { MantineProvider, Global, ColorSchemeProvider, ColorScheme } from "@mantine/core";
import { Formatter } from "../formatter.module";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Root = () => {

  const [ colorScheme, setColorScheme ] = useState<ColorScheme>('dark');

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <BrowserRouter>
      <RecoilRoot>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <Global styles={GLOBAL_STYLES}/>
          <MantineProvider
            theme={MANTINE_THEME}
            defaultProps={MANTINE_DEFAULT_PROPS}
            withGlobalStyles
            withNormalizeCSS
          >
            <Routes>
              <Route path={'/'} element={<Formatter/>}/>
            </Routes>
          </MantineProvider>
        </ColorSchemeProvider>
      </RecoilRoot>
    </BrowserRouter>
  );
}
