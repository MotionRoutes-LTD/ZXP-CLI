import { signZXP } from "../src/commands/sign";

describe("signZXP", () => {
  it("should sign the ZXP file without errors", () => {
    const password = "testpassword";
    expect(() => signZXP(password)).not.toThrow();
  });
});
