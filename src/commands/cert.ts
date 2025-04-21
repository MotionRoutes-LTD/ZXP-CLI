import { config, zxpsignPath } from "../utils/config";
import { spawn } from "child_process";

export async function createCertificate(
  password: string | undefined
): Promise<void> {
  try {
    const certCommand: string[] = [
      "/c",
      zxpsignPath,
      "-selfSignedCert",
      config.countryCode,
      config.stateCode,
      config.organization,
      config.userName,
      password ?? config.certificatePassword,
      config.certificateName,
    ];

    spawn("cmd", certCommand, { stdio: "inherit" });
  } catch (err) {
    if (err instanceof Error) {
      console.error("Error:", err.message);
    } else {
      console.error("Error:", err);
    }
    process.exit(1);
  }
}
