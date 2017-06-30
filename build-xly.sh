#!/bin/bash

mkdir -p ./output/webroot/static/rifle

cp -r ./lib/* ./output/webroot/static/rifle

rm -rf ./output/webroot/static/rifle/.DS_Store
rm -rf ./output/webroot/static/rifle/.svn
rm -rf ./output/webroot/static/rifle/.git