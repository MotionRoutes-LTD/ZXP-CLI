import { spawn } from "child_process";
import { config, zxpsignPath } from "../utils/config";

export function signZXP(password: string | undefined): void {
  const signCommand: string[] = [
    "/c",
    zxpsignPath,
    "-sign",
    config.destinationDirectory,
    config.outputZXPFile,
    config.certificateName,
    password || config.certificatePassword,
    "-tsa",
    "http://timestamp.digicert.com",
  ];

  spawn("cmd", signCommand, { stdio: "inherit" });
}
