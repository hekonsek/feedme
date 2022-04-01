#!/usr/bin/env node

import yargs from "yargs";
import {hideBin} from 'yargs/helpers'
import chalk from "chalk"
import boxen from "boxen"
import {FeedMe, FileSystemOutput, GcpOutput} from "./core.js";

let argv = yargs(hideBin(process.argv))
    .scriptName("feedme")
    .command(
        "* [output]",
        "Says hello world! You can specify to [who]m."
    )
    .argv
let who = "file"
if(argv["output"]) {
    who = <string>argv["output"]
}

let output = who == "file" ? new FileSystemOutput() : new GcpOutput()

new FeedMe(output).feed()

let msg = "Done!"
let font = chalk.blue.underline
msg = font(msg)
msg = boxen(msg, {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "green",
    backgroundColor: "#555555",

})

console.log(msg)