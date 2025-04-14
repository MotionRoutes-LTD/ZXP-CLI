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
