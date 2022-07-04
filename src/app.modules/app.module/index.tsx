import { RecoilRoot } from "recoil";
import { GLOBAL_STYLES, MANTINE_DEFAULT_PROPS, MANTINE_THEME } from "./app.configs/app.config";
import { MantineProvider, Global } from "@mantine/core";
import { Formatter } from "../formatter.module";

export const Index = () => {
  return (
    <RecoilRoot>
      <Global styles={GLOBAL_STYLES}/>
      <MantineProvider theme={MANTINE_THEME} defaultProps={MANTINE_DEFAULT_PROPS}>
        <Formatter/>
      </MantineProvider>
    </RecoilRoot>
  );
}
