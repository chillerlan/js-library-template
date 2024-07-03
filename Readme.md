# chillerlan/js-library-template

A template/boilerplate for JavaScript libraries.

[![License][license-badge]][license]
[![Build][gh-action-badge]][gh-action]
[![CodeCov][coverage-badge]][coverage]

[license-badge]: https://img.shields.io/github/license/chillerlan/js-library-template.svg
[license]: https://github.com/chillerlan/js-library-template/blob/main/LICENSE
[gh-action-badge]: https://img.shields.io/github/actions/workflow/status/chillerlan/js-library-template/build.yml?branch=main&logo=github&logoColor=ccc
[gh-action]: https://github.com/chillerlan/js-library-template/actions/workflows/build.yml?query=branch%3Amain
[coverage-badge]: https://img.shields.io/codecov/c/github/chillerlan/js-library-template?logo=codecov&logoColor=ccc
[coverage]: https://codecov.io/github/chillerlan/js-library-template

## Overview

### Features

- [GitHub Actions](https://github.com/chillerlan/js-library-template/actions) runner
- [Babel](https://babeljs.io) compiler/transpiler
- [Rollup](https://rollupjs.org) module bundler
- [ESLint](https://eslint.org) static analysis
- [Mocha](https://mochajs.org) test framework
  - [Chai](https://www.chaijs.com) assertion library
- [C8](https://github.com/bcoe/c8) code coverage
  - [istanbul/nyc](https://istanbul.js.org) test coverage
  - [Codecov](https://codecov.io) code coverage analysis
- [jsdoc](https://jsdoc.app) automated API documentation


## Documentation

Register a package with {the GitHub package registry](https://github.com/features/packages), requires a [PAT for the repo/org](https://github.com/settings/tokens):

```bash
npm adduser
# ...
npm login --scope=@chillerlan --auth-type=legacy --registry=https://npm.pkg.github.com
# ...
npm publish --access public
```


## Disclaimer

Use at your own risk!
