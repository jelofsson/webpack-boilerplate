/* eslint-disable import/no-extraneous-dependencies */
const Dotenv = require('dotenv-webpack');
const { resolve } = require('path');
const glob = require('glob');

module.exports = (env) => {
  let envFile;
  let mode;
  switch (env.ENV) {
    case 'dev':
      envFile = './.env';
      mode = 'development';
      break;
    case 'prod':
      envFile = './.env.prod';
      mode = 'production';
      break;
    default:
      envFile = './.env';
      mode = 'development';
      break;
  }

  const devtool = mode === 'production' ? 'source-map' : 'inline-source-map';

  return {
    mode,
    devtool,
    entry: './src/index.js',
    output: {
      path: resolve(__dirname, env.OUTPUT || 'dist'),
      filename: 'bundle.min.js',
    },
    resolve: {
      extensions: ['.js'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
    plugins: [
      new Dotenv({
        path: envFile,
      }),
    ],
  };
};
