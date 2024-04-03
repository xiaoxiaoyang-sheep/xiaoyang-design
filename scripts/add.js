const path = require('path');
const glob = require('glob');
const fs = require('fs-extra');
const chalk = require('chalk');
const { spawn } = require('child_process');
const handlebars = require('handlebars');
const fetch = require('node-fetch-npm');

/**
 * abc-xyz => AbcXyz
 * @param {*} str
 */
const varCase = (str) =>
  str
    .replace(/-[a-z]/g, (m) => m[1].toUpperCase())
    .replace(/^.{1}/, (m) => m.toUpperCase());
const lowCase = (str) =>
  str.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`).replace(/^-/, '');

(async () => {
  const component = process.argv[2];

  const dirName = lowCase(component);
  const componentName = varCase(component);

  let componentPath = `src/${component}`;
  let testPath = `src/${component}/__tests__`;

  spawn('mkdir', ['-p', path.join(process.cwd(), componentPath)]);
  spawn('mkdir', ['-p', path.join(process.cwd(), testPath)]);

  const tplFiles = glob.sync(path.join(__dirname, 'template/*.hbs'));
  const testFiles = glob.sync(path.join(__dirname, 'template/*/*.hbs'));

  tplFiles.forEach(async (filePath) => {
    const content = await fs.readFile(filePath, 'utf-8');
    const template = handlebars.compile(content);
    const result = template({
      dirName,
      componentName,
    });

    const newPath = filePath
      .replace('scripts/template', `src/${dirName}`)
      .replace('component', dirName)
      .replace('.hbs', '');

    await fs.writeFile(newPath, result);

    console.log(`write ${component} success `);
  });
  testFiles.forEach(async (filePath) => {
    const content = await fs.readFile(filePath, 'utf-8');
    const template = handlebars.compile(content);
    const result = template({
      dirName,
      componentName,
    });

    const newPath = filePath
      .replace('scripts/template/__tests__', `src/${dirName}/__tests__`)
      .replace('component', dirName)
      .replace('.hbs', '');

    await fs.writeFile(newPath, result);

    console.log(`write ${component} success `);
  });

  const response = await fetch(
    `https://unpkg.com/antd@4.19.5/es/${dirName}/style/index.css`,
  );
  let body = await response.text();
  body = body.replace(new RegExp('ant-', 'g'), 'xy-');

  const lessFile = path.join(process.cwd(), `src/${dirName}/index.less`);
  await fs.writeFile(lessFile, body);
  console.log(chalk.green(`update ${lessFile} success`));
})();
