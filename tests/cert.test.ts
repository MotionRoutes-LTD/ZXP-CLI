import { createCertificate } from "../src/commands/cert";

describe("createCertificate", () => {
  it("should create a certificate without errors", () => {
    const password = "testpassword";
    expect(() => createCertificate(password)).not.toThrow();
  });
});
