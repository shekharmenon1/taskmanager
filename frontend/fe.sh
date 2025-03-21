yarn install
sudo rm -rf ./build
yarn run build
pm2 serve build/ 3000 --name "Frontend" --spa
pm2 status
