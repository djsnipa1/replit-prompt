#!/bin/sh
pip install gay --user
echo "starting server..."
./node_modules/.bin/asciify -f colossal replit | gay -p
#figlet -f small "bs* beef"
#figlet -f mini "browser-sync"

# node server

cd public

#./node_modules/.bin/browser-sync start -s -w -c bs-config.js --ui-port 8080
../node_modules/.bin/browser-sync start -s -w -c ../bs-config.js --no-ui 

#./node_modules/.bin/servor . index.html --reload

#cd border-anim
#../node_modules/.bin/servor . index.html --reload 



