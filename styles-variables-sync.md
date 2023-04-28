# Zesty styles-variables sync to next starter app

This feature will help to incorporate zesty instance style variables to Material UI Theme.

## 🔃Running the script
 Upon installing [zesty next starter app](https://github.com/zesty-io/nextjs-starter), the `sync.js` will run for the first time. But there will be always a changes specially in the style variables. Fortunately we can sync the instance styles anytime to next starter app anytime by running the command below to the console.

```
npm run sync
```

<br>

## 📃Generated Files
  * **_styleVariables.json_** - located at folder (📁 _".zesty"_ ). It contains the fetched style variables data from the API.
e.g:
```javascript
{
  "brand-primary": "#337ab7",
  "brand-success": "#5cb85c",
  "brand-warning": "#f0ad4e",
  "brand-danger": "#d9534f",
  "brand-info": "#5bc0de",
}
```
 
<br>

## ⚙️Configuration 
1. We should create a file where we can configure the MUI theme customization with instance style variables. In this example the file will be named as:
 _**zestyStyleVariables.js**_ under folder 📁 _"components"_ :  <br>
   
   > After creating the file, we should import first the dependency of our zesty styles configuration:
   ```javascript
   import { createTheme } from '@mui/material/styles'; // import the createTheme from MUI
   const styles = require('.zesty/styleVariables') || {}; // assigning the styleVariables.json to the "styles" variable
   ```
   
   > Accessing a style variable and assigning it to MUI theme:
   
   ```javascript
   import { createTheme } from '@mui/material/styles';
   const styles = require('.zesty/styleVariables') || {};
   
   // customizing MUI theme colors:
   export default function ZestyStyleVariables() {
    const zestySettingsTheme = createTheme({
      palette: {
         primary: {
            //Accessing the @brand-primary color 
            main: `${styles['brand-primary']}`
         },
      },

    });
    
    return zestySettingsTheme;
   }
   ```
   
   > Customizing Header default styles:
   
   ```javascript
    import { createTheme } from '@mui/material/styles';
    const styles = require('.zesty/styleVariables') || {};
   
   // customizing MUI theme colors:
   export default function ZestyStyleVariables() {
    const zestySettingsTheme = createTheme({
     typography: {

       // Header styles
       h1: {
         fontSize: parseInt(styles['font-size-h1']) || 24,
         },
       },

    });
    
    return zestySettingsTheme;
   }
   
   ```
   
   
## ✅Applying the MUI theme configurations
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

Also do not forget to import the theme configuration file 
```javascript
import ZestyStyleVariables from 'components/ZestyStyleVariables';
```
<br>

Example of adding `ThemeProvider` in Zesty starter app `App.js` file:

```javascript

import ZestyStyleVariables from 'components/zestyStyleVariables'; //Importing the custom theme config from the zestyStyleVariables.js
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

### 📝 Please take note that the `ThemeProvider` can be imported exclusively in a specific component, the example above is just a general scenario to apply the theme to the webpage as a whole.
   
For more details about customizing theme, kindly see in the [MUI Documentation](https://mui.com/material-ui/customization/theming/)

