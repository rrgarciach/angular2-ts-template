#!/bin/sh

# Run this from
rm ./bin/blueprints/compiled.md && cat ./bin/blueprints/*.md > ./bin/blueprints/compiled.md && drakov -f ./bin/blueprints/compiled.md -p 3000 --autoOptions --header Authorization

