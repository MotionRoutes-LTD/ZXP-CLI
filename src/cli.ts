#!/usr/bin/env node
import { Command } from "commander";
import { createCertificate } from "./commands/cert";
import { signZXP } from "./commands/sign";
import { copyZXPFile } from "./commands/copy";
import { copySourceFolder } from "./commands/copyFolder";
import { CommandOptions } from "./types";

const program = new Command();

program
  .name("zxp-cli")
  .description("CLI tool for bundling, signing, and managing ZXP files")
  .version("1.0.0");

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
  .action((options: CommandOptions) => {
    signZXP(options.password);
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

program.parse(process.argv);
