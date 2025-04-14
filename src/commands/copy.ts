import { copyFile } from "fs";
import { resolve } from "path";
import { config } from "../utils/config";

export function copyZXPFile(): void {
  const sourceFile: string = resolve(__dirname, config.outputZXPFile);
  const destinationFile: string = resolve(
    config.targetDir,
    sourceFile.split("\\").pop() || ""
  );

  copyFile(sourceFile, destinationFile, (err) => {
    if (err) {
      console.error("Error copying file:", err.message);
      process.exit(1);
    } else {
      console.log(`File copied to: ${destinationFile}`);
    }
  });
}
