# Program BDD Demo
[![travis build](https://img.shields.io/travis/vidaaudrey/program-bdd-demo.svg?style=flat-square)](https://travis-ci.org/vidaaudrey/program-bdd-demo)
[![codecov coverage](https://img.shields.io/codecov/c/github/vidaaudrey/program-bdd-demo.svg?style=flat-square)](https://codecov.io/github/vidaaudrey/program-bdd-demo)
[![version](https://img.shields.io/npm/v/program-bdd-demo.svg?style=flat-square)](http://npm.im/program-bdd-demo)


A demo app using storybook, cucumber.js, selenium, redux, relay and some other latest technologies.

The purpose of the demo app is to learn and find the best development patterns.

- [NPM package](https://www.npmjs.com/package/program-bdd-demo)
- [Component Library](https://vidaaudrey.github.io/program-bdd-demo)


## Install
`npm install program-bdd-demo --Save`


## How to use
```
npm install
npm run storybook
```
- Publish to github pages: `npm run publish-storybook` (add git remote repo before running this command)
- Publish to npm: `npm publish` (will need to run `npm adduser` if npm user is not present)



## 01. Setup Storybook
I use the basic setup by [react cdk](https://github.com/kadirahq/react-cdk). With the generator, we'll have a minimal react storybook running locally, which will also give the common react setups such as babel, mocha, enzyme, sinon, webpack, etc.
```
npm install -g yo generator-react-cdk
yo react-cdk program-bdd-demo
cd program-bdd-demo
npm install
npm run storybook
```
Here is a the article on how react cdk works by Arunoda Susiripala: [Say Hello to React CDK](https://voice.kadira.io/say-hello-to-react-cdk-97cff692e798#.uiw9ii6xf)
Note you'll need to add 'webpack-hot-middleware' as devDependencies as it's missing from the package tempalte. I've opened a [PR](https://github.com/kadirahq/react-cdk/pull/20) and still waiting for it to be merged.

## 02. Setup Coverage Reporting
For coverage reporting, I use [Istanbul](https://github.com/gotwarlost/istanbul). Istanbul is a coverage tool that computes statement, line, function and branch coverage with module loader hooks to transparently add coverage when running tests. It supports all JS coverage use cases including unit tests, server side functional tests and browser tests

Note the latest Istanbul release 0.4.4 doesn't work well with babel 6x and node 6x version. So we'll have to manually install the alpha version of Istanbul.
```
npm install istanbul@^1.0.0-alpha -D
```

To have a visual view of the coverage, I'll use codecov. Codecov is an online tool for gathering and analyzing the coverage reports.
```
npm install codecov -D

```
 To be able to see the report at codecov, we'll need to push the repo to github first, then visit [https://codecov.io/gh/vidaaudrey/program-bdd-demo](https://codecov.io/gh/vidaaudrey/program-bdd-demo) to get the repository token (remember to change the repo name to yours).

 To store the token in the node env, run `export CODECOV-TOKEN=[your repo token]`, then add below script to package.json to upload the coverage report to codecov.
 ```
 "report-coverage": "codecov"
 ```

## 03. Semantic Release, Git Commit Hook, Commitizen
To better manage the versions and git commit, we are going to use following packages:
 - [Semantic Release](https://github.com/semantic-release/semantic-release)
 - [Commitizen](https://www.npmjs.com/package/commitizen)
 - [GitHooks](https://github.com/gtramontina/ghooks)

Add below script to package.json. It will help run the coverage test before any git commit. And only if the tests pass the minimum threshold, the coverage result will be uploaded to codecov and the commit will be successful.
```
"config": {
  "ghooks": {
    "pre-commit": "npm run test:cover && npm run check-coverage",
    "post-commit": "npm run report-coverage",
  }
},
```
We'll also replace `git commit` command with `git-cz` which will use commitizen to structure the commit messages. To make it easy to remember, add `"commit": "git-cz",` to npm script.

**Now when the dev process would be**:
- Make changes
- Add file to commit by `git add FILE`
- Run `npm run commit`
- Fill the commit type, scope, breaking changes, etc. Semantic Release will help manage the versions based on the changes. If there is any breaking changes, Semantic Release will bump the major version.
- Ghooks will run the coverage test, and if the tests doesn't meet the minimum requirements on statements, function, branches, and lines, the commit will not be successful.
- Once the commit is successful, we'll upload the coverage report to codecov for further analysis.

## 04. Use DotEnv to manage environment variables
As the project grows, we'll need a better strategy to manage the environment variables. [dotenv](https://www.npmjs.com/package/dotenv) is very good option for this purpose.  
Add add below script to npm so we can setup the environment variable as early:
```
"postinstall": "node .scripts/env.config.js",
```
Now install the dotenv package:
```
npm install dotenv -S
```
