# Developer experience testing repository

This repository is there just for testing purposes. The [Developer experience team](https://circleci.atlassian.net/wiki/spaces/DE/overview) uses it to test its feature

### Usage

For the moment the project contains only a `gcd` function and some tests on it, it declares one workflow which install the dependencies, run the tests, store test results and store the package.json as a small artifact and a zip of the node_modules as a big artifact

If you want to run the test you can run
```bash
npm install
npm test
```
