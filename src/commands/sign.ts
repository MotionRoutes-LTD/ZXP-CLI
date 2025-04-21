import { spawn } from "child_process";
import { config, zxpsignPath } from "../utils/config";

export function signZXP(
  password: string | undefined,
  timeStampURL: string | undefined
): void {
  try {
    const signCommand: string[] = [
      "/c",
      zxpsignPath,
      "-sign",
      config.sourceDirectory,
      config.outputZXPFile,
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
