#!/usr/bin/env node

const cssModulesPlugin = require("esbuild-css-modules-plugin");
const svgrPlugin = require('esbuild-plugin-svgr');

require("esbuild")
  .build({
    logLevel: "info",
    entryPoints: ["src/app/index.js"],
    inject:["scripts/react-shim.js"],
    treeShaking: true,
    bundle: true,
    outfile: "dist/app.js",
    plugins: [svgrPlugin(), cssModulesPlugin()],
    loader: {
        ".js": "jsx",
    },
    minify: true,
    target: "es2015",
    entryNames: "[name]-[hash]",
    color: true,
  })
  .catch(() => process.exit(1))
  .then(() => {});