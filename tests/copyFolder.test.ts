import { copySourceFolder } from "../src/commands/copyFolder";

describe("copySourceFolder", () => {
  it("should copy the source folder without errors", () => {
    const source = "./src";
    const destination = "./dest";
    expect(() => copySourceFolder(source, destination)).not.toThrow();
  });
});
