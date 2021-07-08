#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://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@github.com/LucasColomboHurpia/Study_Restaurant-page_Vue.git master:gh-pages

cd -