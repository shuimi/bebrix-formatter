import { MantineThemeOverride } from "@mantine/core";
import fontRegular from "../app.assets/fonts/GreycliffCF-Regular.woff2";
import fontMedium from "../app.assets/fonts/GreycliffCF-Medium.woff2";
import fontDemiBold from "../app.assets/fonts/GreycliffCF-DemiBold.woff2";
import fontBold from "../app.assets/fonts/GreycliffCF-Bold.woff2";
import fontHeavy from "../app.assets/fonts/GreycliffCF-Heavy.woff2";

export const MANTINE_DEFAULT_PROPS = {
  Container: {
    sizes: {
      md: 1360,
    },
  },
}


export const MANTINE_THEME: MantineThemeOverride = {
  fontFamily: 'Greycliff CF',
  colorScheme: 'dark',
  colors: {
    accent: [ '#40ba9b', '#318f78' ]
  },
}


export const GLOBAL_STYLES = [
  {
    '@font-face': {
      fontFamily: 'Greycliff CF',
      src: `url('${fontRegular}') format("woff2")`,
      fontWeight: 400,
      fontStyle: 'normal',
    },
  },
  {
    '@font-face': {
      fontFamily: 'Greycliff CF',
      src: `url('${fontMedium}') format("woff2")`,
      fontWeight: 500,
      fontStyle: 'normal',
    },
  },
  {
    '@font-face': {
      fontFamily: 'Greycliff CF',
      src: `url('${fontDemiBold}') format("woff2")`,
      fontWeight: 600,
      fontStyle: 'normal',
    },
  },
  {
    '@font-face': {
      fontFamily: 'Greycliff CF',
      src: `url('${fontBold}') format("woff2")`,
      fontWeight: 700,
      fontStyle: 'normal',
    },
  },
  {
    '@font-face': {
      fontFamily: 'Greycliff CF',
      src: `url('${fontHeavy}') format("woff2")`,
      fontWeight: 900,
      fontStyle: 'normal',
    },
  },
]