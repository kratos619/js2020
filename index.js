#!/usr/bin/env node
const fs = require("fs");
const chalk = require("chalk");
const targetDir = process.argv[2] || process.cwd();
const { lstat } = fs.promises;
const path = require("path");
fs.readdir(targetDir, async (err, filenames) => {
  if (err) {
    console.log(err);
    return;
  }

  const statPromis = filenames.map(function (fileName) {
    return lstat(path.join(targetDir, fileName));
  });

  const allStats = await Promise.all(statPromis);

  for (const stat of allStats) {
    const index = allStats.indexOf(stat);

    if (stat.isFile()) {
      console.log(filenames[index]);
    } else {
      console.log(chalk.blue(chalk.bold(filenames[index])));
    }
  }
});
