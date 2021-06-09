echo "* Setting up file permissions *"
sudo chown -R $USER:$USER .

echo "* Remove any node dependencies *"
rm -r node_modules

echo "* Installing NPM packages *"
npm install