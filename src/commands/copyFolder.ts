import {
  readdirSync,
  lstatSync,
  mkdirSync,
  copyFileSync,
  existsSync,
} from "fs";
import { join } from "path";

export function copySourceFolder(source: string, destination: string): void {
  if (!existsSync(destination)) {
    mkdirSync(destination, { recursive: true });
  }

  const files: string[] = readdirSync(source);

  files.forEach((file: string) => {
    const srcPath: string = join(source, file);
    const destPath: string = join(destination, file);

    if (lstatSync(srcPath).isDirectory()) {
      copySourceFolder(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  });
}
