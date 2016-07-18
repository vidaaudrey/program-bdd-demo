# Program BDD Demo

A demo app using storybook, cucumber.js, selenium, redux, relay and some other latest technologies.

The purpose of the demo app is to learn and find the best development patterns.

- [NPM package](https://www.npmjs.com/package/program-bdd-demo)
- [Component Library](https://vidaaudrey.github.io/progam-bdd-demo)


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

Note since we are use babel 6x and node 6x version, however the latest Istanbul release 0.4.4 doesn't work well with babel 6x and node 6x version. So we'll have to manually install the alpha version of Istanbul.
```
npm install istanbul@^1.0.0-alpha -D
```

To have a visual view of the coverage, I'll use codecov.
```
npm install codecov -D
```

To be able to see the report at codecov, first push the repo to github, then go to [https://codecov.io/gh/vidaaudrey/program-bdd-demo](https://codecov.io/gh/vidaaudrey/program-bdd-demo) and get the repository token (remember to change the repo name to yours).
