#!/bin/bash

rm -rf dist
mkdir dist

cp src/public/index.html dist

esbuild=$(
  node scripts/bundle.js \
    2>&1
)

jsfile=$(echo $esbuild | tr '\n' '\r' | sed -r "s/^.*(app-.*js).*$/\1/")
cssfile=$(echo $esbuild | tr '\n' '\r' | sed -r "s/^.*(app-.*css).*$/\1/")

echo $jsfile
echo $cssfile

sed -i -r "s/<\/head>/<link rel=\"stylesheet\" href=\".\/$cssfile\"\/><\/head>/" dist/index.html
sed -i -r "s/<\/body>/<script src=\".\/$jsfile\"><\/script><\/body>/" dist/index.html

rm dist/index.html-r
