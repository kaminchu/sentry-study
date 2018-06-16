[![pipeline status](https://gitlab.com/kmchu/sentry-study/badges/master/pipeline.svg)](https://gitlab.com/kmchu/sentry-study/commits/master)
[![coverage report](https://gitlab.com/kmchu/sentry-study/badges/master/coverage.svg)](https://gitlab.com/kmchu/sentry-study/commits/master)
# Sentry Study
Sentryの使い方覚えるためのお勉強用

## Getting Started

そのうち書く

### Prerequisites

動作させるために、node&yarn環境が必要です

```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs

curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
```

### Installing


```
yarn install
```

## Running the tests

いくつかのテストを実行できます

### test

[jest](https://facebook.github.io/jest/ja/)を使ったテストを実行できます

```
yarn test
```

### lint

[ESLint](https://eslint.org/)を使ったlintを実行できます

```
yarn lint
```

### flow

[flow](https://flow.org/)を使った型チェックを実行できます

```
yarn flow
```

## Development

そのうち書く

### local環境
localでサーバを立ち上げて、動かすことができます
```
yarn start
```

### flow-typed
新しいパッケージを導入した場合は、flowに認識させる必要があります
```
npx flow-typed install [導入したパッケージ名]@[バージョン]
```

## Deployment

`gitlab-ci`により、`master`ブランチが自動でdeployされます

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

