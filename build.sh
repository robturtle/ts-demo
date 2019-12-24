rm -rf dist/
tsc
cp package.json dist/
npx projectz compile
npx prettier --write README.md
cp README.md dist/
