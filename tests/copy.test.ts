import { copyZXPFile } from "../src/commands/copy";

describe("copyZXPFile", () => {
  it("should copy the ZXP file without errors", () => {
    expect(() => copyZXPFile()).not.toThrow();
  });
});
