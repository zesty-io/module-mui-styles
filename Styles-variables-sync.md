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
  * _**ZestyStyleVariables.js**_ (📁 _"components"_ ) - contains the `createTheme` object from the [Material UI](https://mui.com/material-ui/customization/theming/). MUI theming with instance style variables can be configure in this file.
<br>

## ⚙️Configuration 
1. ZestyStyleVariable <br>
   This file should have the code below:
   
   ```
   import { createTheme } from '@mui/material/styles'; // import the createTheme from MUI
   const styles = require('.zesty/styleVariables') || {}; // assigning the styleVariables.json to the "styles" variable
   ```
   
   Accessing a style variable and assigning it to MUI theme:
   
   ```
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

