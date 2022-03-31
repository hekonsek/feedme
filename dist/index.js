#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from 'yargs/helpers';
import chalk from "chalk";
import boxen from "boxen";
import { FeedMe, FileSystemOutput } from "./core.js";
var argv = yargs(hideBin(process.argv))
    .scriptName("feedme")
    .command("* [who]", "Says hello world! You can specify to [who]m.")
    .argv;
new FeedMe(new FileSystemOutput()).feed();
var msg = "Done!";
var font = chalk.blue.underline;
msg = font(msg);
msg = boxen(msg, {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "green",
    backgroundColor: "#555555"
});
console.log(msg);
