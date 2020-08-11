#!/usr/bin/env node
const debounce = require("lodash.debounce");
const chokidar = require("chokidar");
const program = require("caporal");
const fs = require("fs");
const { spawn } = require("child_process");
program
  .version("0.0.1")
  .argument("[filename]", "Name of the file to Execute")
  .action(async ({ filename }) => {
    const name = filename || "index.js";
    try {
      await fs.promises.access(name);
    } catch (error) {
      throw new Error(`could not find the file ${name}`);
    }

    let proc ;
    const start = debounce(() => {
      
      if(proc){
        proc.kill();
      }
      proc = spawn("node", [name], { stdio: "inherit" });
    }, 100);

    chokidar
      .watch(".")
      .on("add",  start)
      .on("change",  start)
      .on("unlink",  start);
  });
program.parse(process.argv);
