rm -rf dist/
tsc
cp package.json dist/

npx projectz compile
# Issue: https://stackoverflow.com/a/51656568/2214973
sed 's/travis-ci.org/travis-ci.com/' README.md > tmp
mv tmp README.md
npx prettier --write README.md

cp README.md dist/
