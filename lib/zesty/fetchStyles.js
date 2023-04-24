/**
 * Zesty.io NextJS Fetch Styles File
 * Get all style variables that exist to your Zesty.io instance and ready to be used as MUI component
 * Upon running this file, it will generate another file: styleVariables.json under .zesty folder
 * styleVariables.json will contain all style variables fetched from the Zesty.io Instance
 */
const { readFile, writeFile, stat, mkdir } = require('fs/promises');
const { resolve, normalize } = require('path');
const { exit } = require('process');
const fetch = require('node-fetch');
const chalk = require('chalk');
const SDK = require('@zesty-io/sdk');
const { writeFileSync } = require('fs');

(async () => {
  let zestyConfig = await readZestyConfig();

  if (!zestyConfig) {
    console.log(`${chalk.red('Error:')} missing .zesty/config.json `);
    console.log(
      `Run the command: ${chalk.bold(
        'zesty init',
      )}, if zesty is not found run ${chalk.bold(
        'npm i -g @zesty-io/cli',
      )} and try again.`,
    );
    exit();
  }

  //Input you credentials here
  const ZESTY_USER_EMAIL = 'email@zesty.io'; // should be replaced
  const ZESTY_USER_PASSWORD = '*********'; // by a real zesty account
  const authContainer = loginAuth(ZESTY_USER_EMAIL, ZESTY_USER_PASSWORD);
  const zuid = zestyConfig.instance_zuid;

  authContainer
    .then((d) => {
      const instance = getInstance(zuid, d.token);
      return instance;
    })
    .then((i) => {
      if (i) {
        const res = fetch(
          `https://${i.instanceZUID}.api.zesty.io/v1/web/stylesheets/variables`,
          {
            headers: {
              Authorization: `Bearer ${i.token}`,
              'Content-Type': 'application/json',
            },
          },
        );
        return res;
      }
    })
    .then((stylesResponse) => stylesResponse.json())
    .then((styleVariables) => {
      writeStyles(styleVariables);
    })
    .catch((err) => {
      console.error(err);
    });
})();

//Reads the zesty.config.json
async function readZestyConfig() {
  try {
    const file = resolve(process.cwd(), 'zesty.config.json');
    const str = await readFile(file, {
      encoding: 'utf-8',
    });

    return JSON.parse(str);
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function loginAuth(user, pass) {
  try {
    const auth = new SDK.Auth();
    const session = await auth.login(user, pass);
    session.code == 200
      ? console.log(chalk.green(session.message))
      : console.log(chalk.red(session.message));

    return session;
  } catch (error) {
    throw new Error(`Failed to Login`);
  }
}

async function getInstance(zuid, token) {
  try {
    const instances = new SDK(zuid, token);
    return instances;
  } catch (error) {}
}

async function writeStyles(d) {
  const { data } = d;
  let styles = {};
  try {
    const file = resolve(process.cwd(), '.zesty/styleVariables.json'); //filtering referenceName and value from the fetched style variables
    for (const { referenceName: rn, value: val } of data) {
      styles[rn] = val;
    }

    writeFileSync(file, JSON.stringify(styles)); //creates styleVariables.json file to .zesty folder with referenceName and values as content.
    console.log(chalk.green('Style variables are sync successfully!'));
  } catch (error) {
    throw new Error(error);
  }
}
