# TypeScriptのDIコンテナライブラリ InversifyJSとTsyringeの基本的な使い方を比較してみた の写経
https://dev.classmethod.jp/articles/typescript-di-inversifyjs-vs-tsyringe/

## プロジェクト作成
https://typescript-jp.gitbook.io/deep-dive/nodejs
```
npm init -y
npm install typescript --save-dev
npm install @types/node --save-dev
npx tsc --init --rootDir src --outDir lib --esModuleInterop --resolveJsonModule --lib es6,dom --module commonjs

npm install ts-node --save-dev
npm install nodemon --save-dev
```

package.jsonの調整
```
  "scripts": {
    "start": "npm run build:live",
    "build": "tsc -p .",
    "build:live": "nodemon --watch 'src/**/*.ts' --exec \"ts-node\" src/index.ts"
  },
```


