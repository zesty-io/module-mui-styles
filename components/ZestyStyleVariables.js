import React from 'react';
import { createTheme } from '@mui/material/styles';
let zestyURL =
  process.env.PRODUCTION == 'true'
    ? process.env.zesty.production
    : process.env.zesty.stage;

console.log(zestyURL);

const ZestyStyleVariables = () => {
  const fetchZestyStyles = async (uri, setFunc) => {
    try {
      const res = await fetch(uri).then((response) =>
        response.json().then((data) => !!data && setzestyStyles(data)),
      );

      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const uri = `${zestyURL}/style-variables.json?zpw=${process.env.zesty.stage_password}`;
  const [zestyStyles, setzestyStyles] = React.useState([]);

  // console.log(zestyURL);
  // get data in initial load
  React.useEffect(() => {
    fetchZestyStyles(uri, setzestyStyles);
  }, []);

  const ZestySettingsTheme = createTheme({
    palette: {
      primary: {
        main: `#${zestyStyles?.primary}`,
      },
      secondary: {
        main: `#${zestyStyles?.secondary}`,
      },
      success: {
        main: `#${zestyStyles?.success}`,
      },
      info: {
        main: `#${zestyStyles?.info}`,
      },
      warning: {
        main: `#${zestyStyles?.warning}`,
      },
      danger: {
        main: `#${zestyStyles?.danger}`,
      },
      light: {
        main: `#${zestyStyles?.light}`,
      },
      dark: {
        main: `#${zestyStyles?.dark}`,
      },
    },
    typography: {
      // In Chinese and Japanese the characters are usually larger,
      // so a smaller fontsize may be appropriate.
      fontSize: zestyStyles?.fontSize,
      fontFamily: zestyStyles?.fontFamily,
      fontWeight: zestyStyles?.fontWeight,
    },
  });

  return ZestySettingsTheme;
};

export default ZestyStyleVariables;
