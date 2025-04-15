# ZXP CLI Tool

A CLI tool for bundling, signing, and managing ZXP files.

## Installation

```bash
npm install -g zxp-cli
```

## Usage

```bash
zxp-cli cert --password mypassword
zxp-cli sign --password mypassword
zxp-cli copy
zxp-cli copyFolder
```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue.

## License

This project is licensed under the MIT License.

## Third-Party Software

This tool includes `ZXPSignCmd`, which is licensed under the Apache License 2.0. For more information, see the [Adobe CEP Resources repository](https://github.com/Adobe-CEP/CEP-Resources).

The `ZXPSignCmd` executable is bundled in the `bin/` directory of this tool.

## Configuration

You can configure the tool using environment variables. Create a `.env` file in your project directory with the following variables:

```env
ORGANIZATION=MyCompany
USER_NAME=JohnDoe
COUNTRY_CODE=US
STATE_CODE=NY
CERTIFICATE_NAME=my-cert.p12
CERTIFICATE_PASSWORD=securepassword
DESTINATION_DIRECTORY=output
OUTPUT_ZXP_FILE=.build/my-app.zxp
TARGET_DIR=C:\Custom\Adobe\Extensions
```

If no `.env` file is provided, the tool will use default values.
