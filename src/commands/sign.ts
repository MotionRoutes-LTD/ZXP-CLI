import { spawn } from "child_process";
import { config, zxpsignPath } from "../utils/config";
import { existsSync, mkdirSync } from "fs";

export function signZXP(
  password: string | undefined,
  timeStampURL: string | undefined
): void {
  try {
    // Check if the certificate file exists
    if (!existsSync(config.certificateName)) {
      console.error(
        "Error: Certificate file does not exist. Please create a certificate first."
      );
      console.error('Run "zxp-cli cert" to create a certificate.');
      process.exit(1);
    }

    // Check if the source directory exists
    if (!existsSync(config.buildDirectory)) {
      console.log(`Source directory does not exist: ${config.buildDirectory}`);
      mkdirSync(config.buildDirectory, { recursive: true });
      console.log(`Source directory created: ${config.buildDirectory}`);
    }

    const signCommand: string[] = [
      "/c",
      zxpsignPath,
      "-sign",
      config.sourceDirectory,
      `${config.buildDirectory}/${config.zxpFileName}`,
      config.certificateName,
      password ?? config.certificatePassword,
    ];

    // Add the timestamp URL if provided
    if (timeStampURL) {
      signCommand.push("-tsa", timeStampURL);
    }

    spawn("cmd", signCommand, { stdio: "inherit" });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
      console.error("Error:", error);
    }
    process.exit(1);
  }
}
