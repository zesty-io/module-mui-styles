# Zesty styles-variables sync to next starter app

This feature will help to incorporate zesty instance style variables to Material UI Theme.

## ✅Running the script
 Once the [zesty next starter app](https://github.com/zesty-io/nextjs-starter) is installed, go to the root directory of the project then run the code below in the console.

```
npm run fetch-style
```

<br>

## 📃Generated Files
The following files will be generated with its location folders:
  * **_styleVariables.json_** (📁 _".zesty"_ ) - contains the fetched style variables data from the API.
  * _**zestyStyleVariables.js**_ (📁 _"components"_ ) - contains the `createTheme` object from the [Material UI](https://mui.com/material-ui/customization/theming/). MUI theming with instance style variables can be configure in this file.
<br>

## ⚙️Configuration 
1. zestyStyleVariable.js <br>
  > This file should have the code below:
   
   ```javascript
   import { createTheme } from '@mui/material/styles'; // import the createTheme from MUI
   const styles = require('.zesty/styleVariables') || {}; // assigning the styleVariables.json to the "styles" variable
   ```
   
   Accessing a style variable and assigning it to MUI theme:
   
   ```javascript
   const styles = require('.zesty/styleVariables') || {};
   
   // customizing MUI theme colors:
   const ZestySettingsTheme = createTheme({
     pallete: {
        primary: {
           //Accessing the @brand-primary color 
           main: `${styles['brand-primary']}`
        }.
     },
   
   });
   ```
   
   Customizing Header default styles:
   
   ```javascript
   
    const styles = require('.zesty/styleVariables') || {};
   
   // customizing MUI theme colors:
   const ZestySettingsTheme = createTheme({
    typography: {

      // Header styles
      h1: {
        fontSize: parseInt(styles['font-size-h1']) || 24,
        },
      },
   
   });
   
   ```
2. Adding MUI Theme provider
> In order for the custom theme to work, `ThemeProvider` should be imported in a component or in a top level component file.

Importing the MUI `ThemeProvider` :

```javascript
import { ThemeProvider } from '@mui/material/styles';

```
<br>

After importing, the component should be the child of the `ThemeProvider` component and use `ZestyStyleVariables` as the theme prop value.

```javascript
  <ThemeProvider theme={ZestyStyleVariables()}>  
     <Component />
  </ThemeProvider>

```

<br>

Example of adding `ThemeProvider` in Zesty starter app `App.js` file:

```javascript

import ZestyStyleVariables from 'components/ZestyStyleVariables'; //Importing the custom theme config from the ZestyStyleVariables.js
import { ThemeProvider } from '@mui/material/styles'; // importing ThemeProvider from MUI styles

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* logic to run zesty head if it detects zesty meta data patterns in props, else load alternate head for you to edit */}
      {(pageProps?.meta?.web && <ZestyHead content={pageProps} />) || (
        <Head>
          <meta charSet="utf-8" />
          <title>Zesty.io Next.js Marketing Technology Example Starter</title>
        </Head>
      )}
      
      {/* MUI customized theme will start to effect here */}
      <ThemeProvider theme={ZestyStyleVariables()}>  
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;

```

### 📝 Please take note that the `ThemeProvider` can be imported in any component or can be used in a specific component file only, the example above is just a general example
   
For more details about customizing theme, kindly see in the [MUI Documentation](https://mui.com/material-ui/customization/theming/)

