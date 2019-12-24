git push
git push --tags
./build.sh
cd dist/
npm publish --access public
cd ..
