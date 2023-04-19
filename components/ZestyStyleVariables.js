import React from 'react';
import { createTheme } from '@mui/material/styles';
import { style } from '@mui/system';
import { blue } from '@mui/material/colors';
var styles = require('.zesty/styleVariables') || {};
console.log(styles['font-family-base']);

// Typography defaults

//Headings
const headingsColor = styles['headings-color'];
const headingFontWeight = style['headings-font-weight'];

export default function ZestyStyleVariables() {
  const ZestySettingsTheme = createTheme({
    palette: {
      primary: {
        main: `${styles['brand-primary'] || '#42a5f5'}`,
      },
      secondary: {
        main: `${styles['gray-base'] || '#ab47bc'}`,
      },
      success: {
        main: `${styles['brand-success'] || '#388e3c'}`,
      },
      info: {
        main: `${styles['brand-info'] || '#0288d1'}`,
      },
      warning: {
        main: `${styles['brand-warning'] || '#f57c00'}`,
      },
      error: {
        main: `${styles['brand-danger'] || '#d32f2f'}`,
      },
      dark: {
        main: blue[500],
      },
    },
    typography: {
      // In Chinese and Japanese the characters are usually larger,
      // so a smaller fontsize may be appropriate.

      // Header styles
      h1: {
        fontSize: parseInt(styles['font-size-h1']) || 24,
        color: headingsColor,
        fontWeight: headingFontWeight,
      },
      h2: {
        fontSize: parseInt(styles['font-size-h2']) || 19,
        color: headingsColor,
        fontWeight: headingFontWeight,
      },
      h3: {
        fontSize: parseInt(styles['font-size-h3']) || 17,
        color: headingsColor,
        fontWeight: headingFontWeight,
      },
      h4: {
        fontSize: parseInt(styles['font-size-h4']) || 14,
        color: headingsColor,
        fontWeight: headingFontWeight,
      },
      h5: {
        fontSize: parseInt(styles['font-size-h5']) || 13,
        color: headingsColor,
        fontWeight: headingFontWeight,
      },
      h6: {
        fontSize: parseInt(styles['font-size-h6']) || 50,
        color: headingsColor,
        fontWeight: headingFontWeight,
      },

      //
      fontSize: parseInt(styles['font-size-base']) || 14,
      fontFamily: styles['font-family-base'] || 'sans-serif',
      // fontWeight: styles?.fontWeight,
    },
    // components: {
    //   MuiButtonBase: {},
    // },
  });

  return ZestySettingsTheme;
}
