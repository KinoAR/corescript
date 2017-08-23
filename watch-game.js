#!/usr/bin/env node
const { readFileSync, readdirSync } = require('fs');
const { copySync } = require('cpx');
const watch = require('node-watch');

const concatSource = require('./concat.js');
const args = process.argv.slice(2);
const gameFolderName = args[0];

JSON.parse(readFileSync('./modules.json', 'utf8'))
  .map(name => ({ name, target: `./js/${name}` }))
  .forEach(({ name, target }) => {
    watch(target, () => {
      concatSource(name);
      copySync(`./dist/${name}.js`, `./games/${gameFolderName}/js/`);
      console.log(`${target} changed. Copy ${name}.js`);
    });
  });

watch("./plugins", (name) => {
  copySync(`./${name}`, `./games/${gameFolderName}/js/plugins/`);
  console.log(`/${name.split("/")[1]} plugin changed. Copy updated in ./games/${gameFolderName}/js/`); 
});
  