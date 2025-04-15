export interface Config {
  organization: string;
  userName: string;
  countryCode: string;
  stateCode: string;
  certificateName: string;
  certificatePassword: string;
  sourceDirectory: string;
  outputZXPFile: string;
  targetDir: string;
}

export interface CommandOptions {
  password?: string;
}
