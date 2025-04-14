import type { Config } from "../types";
import { platform } from "os";
import { join } from "path";

export const config: Config = {
  organization: "DemoCompany",
  userName: "DemoUser",
  countryCode: "GB",
  stateCode: "JS",
  certificateName: "code-sign2.p12",
  certificatePassword: "12345678",
  destinationDirectory: "src",
  outputZXPFile: `.build/app.zxp`,
  targetDir: "C:\\Program Files (x86)\\Common Files\\Adobe\\CEP\\extensions",
};

export const zxpsignPath =
  platform() === "win32"
    ? join(__dirname, "../../bin/ZXPSignCmd.exe")
    : join(__dirname, "../../bin/ZXPSignCmd-64bit.dmg");
