export interface Config {
  organization: string;
  userName: string;
  countryCode: string;
  stateCode: string;
  certificateName: string;
  certificatePassword: string;
  destinationDirectory: string;
  outputZXPFile: string;
  targetDir: string;
}

export interface CommandOptions {
  password?: string;
}
