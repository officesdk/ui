#!/bin/bash

set -e

echo "npm version: $(npm -v)"
echo "node version: $(node -v)"
echo "yarn version: $(yarn -v)"

# start corepack
corepack enable

# install dependencies
yarn install --immutable || exit 1

# type check
yarn type-check || exit 1

# code check
yarn lint || exit 1

echo "All tests passed!"

