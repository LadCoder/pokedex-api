echo "* Remove any node dependencies *"
rm -r node_modules

echo "* Installing NPM packages *"
npm install

echo "* Building app"
npm run build

echo "* Starting development mode"
npm run serve