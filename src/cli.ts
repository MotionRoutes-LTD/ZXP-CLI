#!/usr/bin/env node
import { Command } from "commander";
import { createCertificate } from "./commands/cert";
import { signZXP } from "./commands/sign";
import { copyZXPFile } from "./commands/copy";
import { copySourceFolder } from "./commands/copyFolder";
import { CommandOptions } from "./types";
import { version } from "../package.json";
import { config } from "./utils/config";

const program = new Command();

program
  .name("zxp-cli")
  .description("CLI tool for bundling, signing, and managing ZXP files")
  .version(version);

program
  .command("cert")
  .description("Create a self-signed certificate")
  .option("-p, --password <password>", "Certificate password")
  .action((options: CommandOptions) => {
    createCertificate(options.password);
  });

program
  .command("sign")
  .description("Sign the ZXP file")
  .option("-p, --password <password>", "Certificate password")
  .option("-t, --timeStampURL <url>", "Timestamp URL")
  .action((options: CommandOptions) => {
    signZXP(options.password, options.timeStampURL);
  });

program
  .command("copy")
  .description("Copy the signed ZXP file to the target directory")
  .action(() => {
    copyZXPFile();
  });

program
  .command("copyFolder")
  .description("Copy the source folder to the target directory")
  .argument("<source>", "Source folder path")
  .argument("<destination>", "Destination folder path")
  .action((source: string, destination: string) => {
    copySourceFolder(source, destination);
  });

program
  .command("config")
  .description("Display the current configuration variables")
  .action(() => {
    console.log("Loaded Configuration:");
    console.log(JSON.stringify(config, null, 2)); // Pretty-print the config object
  });
program.parse(process.argv);
