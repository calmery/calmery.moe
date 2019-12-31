# Calmery.moe

[![GitHub Actions](https://github.com/calmery/Calmery.moe/workflows/GitHub%20Actions/badge.svg?branch=develop)](https://github.com/calmery/Calmery.moe/actions)

## Usage

Install Node.js v12.14.0 and npm 6.13.4.

```bash
$ npm ci
```

```bash
$ npm run build
$ npm run lint
$ npm start
$ npm test
```

## Design

![Design](https://user-images.githubusercontent.com/12670155/71620998-347e1b00-2c10-11ea-91cc-bf64fff0b97d.png)

## Alias Paths

[Resolve | webpack](https://webpack.js.org/configuration/resolve/#resolvealias)

| Alias Path | Original Path |                   Example                   |
| :--------: | :-----------: | :-----------------------------------------: |
|     ~/     |     src/      | `~/pages/Top`, `~/helpers/google-analytics` |
