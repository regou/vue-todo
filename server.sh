#!/bin/sh
dir=$PWD
echo $dir

./node_modules/.bin/simple-server $dir/dist
