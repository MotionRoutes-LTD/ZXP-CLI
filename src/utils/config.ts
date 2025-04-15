import type { Config } from "../types";
import { platform } from "os";
import { join } from "path";
import { config as dotenvConfig } from "dotenv";

// Load .env variables
dotenvConfig();

export const config: Config = {
  organization: process.env.ORGANIZATION || "MyOrganization",
  userName: process.env.USER_NAME || "DefaultUser",
  countryCode: process.env.COUNTRY_CODE || "US",
  stateCode: process.env.STATE_CODE || "CA",
  certificateName: process.env.CERTIFICATE_NAME || "certificate.p12",
  certificatePassword: process.env.CERTIFICATE_PASSWORD || "securepassword",
  sourceDirectory: process.env.SOURCE_DIRECTORY || "src",
  outputZXPFile: process.env.OUTPUT_ZXP_FILE || `.build/output.zxp`,
  targetDir:
    process.env.TARGET_DIR ||
    "C:\\Program Files (x86)\\Common Files\\Adobe\\CEP\\extensions",
};

export const zxpsignPath =
  platform() === "win32"
    ? join(__dirname, "../../bin/ZXPSignCmd.exe")
    : join(__dirname, "../../bin/ZXPSignCmd-64bit.dmg");
